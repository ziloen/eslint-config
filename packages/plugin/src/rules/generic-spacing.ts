import { TSESTree } from '@typescript-eslint/utils'
import { createEslintRule } from '../utils'
import { RuleContext } from '@typescript-eslint/utils/ts-eslint'


export const RULE_NAME = 'generic-spacing'
export type MessageIds = 'genericSpacingMismatch'
export type Options = []

export const messageId = 'genericSpacingMismatch'

function removeSpaceAround(
  node: TSESTree.TSTypeParameterInstantiation | TSESTree.TSTypeParameterDeclaration,
  context: Readonly<RuleContext<MessageIds, []>>
) {
  const params = node.params
  if (!params.length) return

  const sourceCode = context.sourceCode

  const start = node.range[0] + 1
  const end = node.range[1] - 1

  const startNode = params[0]
  const endNode = params.at(-1)!

  const textBeforeFirst = sourceCode.text.slice(start, startNode.range[0])
  const textAfterLast = sourceCode.text.slice(endNode.range[1], end)

  // if same line, remove spaces
  if (textBeforeFirst.length && !textBeforeFirst.includes('\n')) {
    context.report({
      node,
      messageId,
      *fix(fixer) {
        yield fixer.replaceTextRange([start, startNode.range[0]], '')
      },
      loc: {
        start: {
          column: node.loc.start.column + 1,
          line: node.loc.start.line
        },
        end: startNode.loc.start
      }
    })
  }

  // if same line, remove spaces
  if (textAfterLast.length && !textAfterLast.includes('\n')) {
    context.report({
      node,
      messageId,
      *fix(fixer) {
        yield fixer.replaceTextRange([endNode.range[1], end], '')
      },
      loc: {
        start: endNode.loc.end,
        end: {
          column: node.loc.end.column - 1,
          line: node.loc.end.line
        }
      }
    })
  }
}

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
      // type T<"K, S"> = any
      TSTypeParameterDeclaration: node => removeSpaceAround(node, context),
      // type T = Record<"K, S">
      TSTypeParameterInstantiation: node => removeSpaceAround(node, context),
      // type T<"K = any", "S = any"> = any
      TSTypeParameter(node) {
        if (!node.default) return
        const startNode = node.constraint || node.name
        const endNode = node.default

        const start = startNode.range[1]
        const end = endNode.range[0]

        // replace all content between name and default with " = "
        if (sourceCode.text.slice(start, end) !== ' = ') {
          context.report({
            node,
            messageId,
            *fix(fixer) {
              yield fixer.replaceTextRange([start, end], ' = ')
            },
            loc: {
              start: startNode.loc.end,
              end: endNode.loc.start
            }
          })
        }
      }
    }
  }
})