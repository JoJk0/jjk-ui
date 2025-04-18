import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   * Referenced packages must be installed
   */
  // parserPreset: 'conventional-changelog-atom',
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    // 'type-enum': [RuleConfigSeverity.Error, 'always', ['foo']],
    'body-max-line-length': [2, 'always', 500],
  },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  ignores: [(message) => /^Bumps \[.+\]\(.+\) from .+ to .+\.$/m.test(message)],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  /*
   * Custom prompt configs
   */
  // prompt: {
  //   messages: {},
  //   questions: {
  //     type: {
  //       description: 'please input type:',
  //     },
  //   },
  // },
}

export default Configuration
