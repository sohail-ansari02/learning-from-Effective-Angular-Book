import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: [
        'apps/*/*/tsconfig.json',
        'apps/*/*/tsconfig.*?.json',
        'libs/*/*/*/tsconfig.*?.json',
        'libs/workspace-generators-plugin/tsconfig.*?.json',
      ],
    },
    extends: ['plugin:@nx/typescript'],
    rules: {
      'deprecation/deprecation': 'warn',
      'rxjs/no-async-subscribe': 'error',
      'rxjs/no-create': 'error',
      'rxjs/no-ignored-error': 'error',
      'rxjs/no-ignored-notifier': 'error',
      'rxjs/no-ignored-replay-buffer': 'error',
      'rxjs/no-ignored-takewhile-value': 'error',
      'rxjs/no-ignored-subscribe': 'error',
      'rxjs/no-index': 'error',
      'rxjs/no-internal': 'error',
      'rxjs/no-nested-subscribe': 'error',
      'rxjs/no-redundant-notify': 'error',
      'rxjs/no-sharereplay': 'error',
      'rxjs/no-unbound-methods': 'error',
      'rxjs/no-unsafe-subject-next': 'error',
      'rxjs/no-unsafe-takeuntil': 'error',
    },
  },
];
