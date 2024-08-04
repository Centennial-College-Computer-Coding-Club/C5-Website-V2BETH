// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.recommendedTypeCheckedOnly, // NOTE: More Rules Can be Added Below Here.
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },

        ignores: [
            // NOTE: Ignore Patterns Here (If Any).
        ],
    },
    
    // NOTE: More Rules Can be Added BelowHere.
)