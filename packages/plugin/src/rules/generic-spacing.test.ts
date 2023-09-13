import { RuleTester } from '@typescript-eslint/rule-tester'
import rule, { RULE_NAME } from './generic-spacing'

const valid = [
  `type Foo<T, K> = T`,
  `type Foo<
  T,
  K,
> = T`
]

const invalid = [
  [`type Foo< T, K > = T`, `type Foo<T, K> = T`, 2]
] as const

const ruleTester: RuleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser')
})

ruleTester.run(RULE_NAME, rule, {
  valid,
  invalid: invalid.map(i => ({
    code: i[0],
    output: i[1].trim(),
    errors: Array.from({ length: i[2] || 1 }, () => ({ messageId: 'genericSpacingMismatch' }))
  }))
})