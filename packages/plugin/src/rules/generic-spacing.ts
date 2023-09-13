import { TSESTree } from '@typescript-eslint/utils'
import { createEslintRule } from '../utils'


// TSTypeParameterDeclaration type A"<T, S>"
// TSTypeParameterInstantiation Record"<T, any>"
// TSTypeParameter "T = string"

export const RULE_NAME = 'generic-spacing'
export type MessageIds = 'genericSpacingMismatch'
export type Options = []


export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'layout',
    docs: {
      description: '',
      recommended: 'stylistic',
    },
    fixable: 'code',
    schema: [],
    messages: {
      genericSpacingMismatch: 'spacing mismatch'
    }
  },
  defaultOptions: [],
  create(context) {
    const sourceCode = context.sourceCode

    return {
      TSTypeParameterDeclaration(node) {
        const params = node.params
        if (!params.length) return

        const start = node.range[0] + 1
        const end = node.range[1] - 1

        const firstParam = params[0]
        const lastParam = params.at(-1)!

        const textBeforeFirst = sourceCode.text.slice(start, firstParam.range[0])
        const textAfterLast = sourceCode.text.slice(lastParam.range[1], end)

        // if same line, remove spaces
        if (textBeforeFirst.length && !textBeforeFirst.includes('\n')) {
          context.report({
            node,
            messageId: 'genericSpacingMismatch',
            *fix(fixer) {
              yield fixer.replaceTextRange([start, firstParam.range[0]], '')
            }
          })
        }

        // if same line, remove spaces
        if (textAfterLast.length && !textAfterLast.includes('\n')) {
          context.report({
            node,
            messageId: 'genericSpacingMismatch',
            *fix(fixer) {
              yield fixer.replaceTextRange([lastParam.range[1], end], '')
            }
          })
        }
      },
      TSTypeParameterInstantiation(node) {

      },
      TSTypeParameter(node) {

      }
    }
  }
})