module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": false,
		"es6": true,
		"node": true,
		"mocha": true,
	},
	"extends": "eslint:recommended",
	"ecmaFeatures": {
		"modules": true
	},
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {

		// possible errors
		"comma-dangle": ["error", "always-multiline"],
		"handle-callback-err": "error",
		"no-cond-assign": "error",
		"no-console": "off",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "off",
		"no-extra-parens": "off",
		"no-extra-semi": "error",
		"no-func-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-negated-in-lhs": "error",
		"no-obj-calls": "error",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"use-isnan": "error",
		"valid-jsdoc": ["error", {"requireReturn": false}],
		"valid-typeof": "error",

		// best practices
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"complexity": ["error", 5],
		"consistent-return": "off",
		"curly": "error",
		"default-case": "error",
		"dot-notation": "error",
		"dot-location": ["error", "property"],
		"eqeqeq": "error",
		"guard-for-in": "error",
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "error",
		"no-else-return": 0,
		"no-labels": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "off",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "off",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-native-reassign": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-process-env": "off",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "off",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "off",
		"no-useless-call": "error",
		"no-void": "error",
		"no-warning-comments": ["error", {"terms": ["fixme"], "location": "anywhere"}],
		"no-with": "error",
		"radix": "error",
		"vars-on-top": "error",
		"wrap-iife": ["error", "inside"],
		"yoda": "error",

		"strict": "off",

		// variables
		"no-catch-shadow": "error",
		"no-delete-var": "error",
		"no-shadow-restricted-names": "error",
		"no-shadow": "off",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-unused-vars": ["error", {"args": "after-used"}],
		"no-use-before-define": ["error", {"functions": true}],

		// stylistic
		"array-bracket-spacing": ["error", "never"],
		"block-spacing": "error",
		"brace-style": ["error", "1tbs"],
		"camelcase": ["error", {"properties": "always"}],
		"comma-spacing": ["error", {"before": false, "after": true}],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": "off", // Too many use-cases for reassigning "this" to different values
		"eol-last": "error",
		"func-names": "error",
		"func-style": ["error", "declaration"], // talk about!!!!!!!!\
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
		"keyword-spacing": "error",
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": "off",
		"max-depth": ["error", 4],
		"max-len": ["error", 120, 2],
		"max-nested-callbacks": ["error", 5],
		"max-statements": ["error", 30],
		"new-parens": "error",
		"newline-after-var": "off",
		"no-array-constructor": "error",
		"no-bitwise": "off",
		"no-continue": "error",
		"no-inline-comments": "off",
		"no-lonely-if": "error",
		"no-mixed-spaces-and-tabs": "off", ////
		"no-multiple-empty-lines": "error",
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-spaced-func": "error",
		"no-ternary": "off",
		"no-trailing-spaces": ["error", {"skipBlankLines": true}],
		"no-underscore-dangle": "off",
		"no-unneeded-ternary": "error",
		"object-curly-spacing": ["error", "always"],
		"one-var": ["error", {"uninitialized": "always", "initialized": "never"}],
		"operator-assignment": "off",
		"operator-linebreak": ["error", "after"],
		"padded-blocks": "off",
		"quote-props": ["error", "as-needed"],
		"quotes": ["error", "single", "avoid-escape"],
		"semi": ["error", "always"],
		"semi-spacing": ["error", {"before": false, "after": true}],
		"sort-imports": "off",
		"sort-vars": "off",
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", {"words": true, "nonwords": false}],
		"spaced-comment": "off",
		"wrap-regex": "off",

		//ECMA 2015
		"arrow-body-style": [2, "as-needed"],
		"arrow-parens": [2, "always"],
		"arrow-spacing": "error",
		"constructor-super": "error",
		"generator-star-spacing": ["error", {"before": true, "after": false}],
		"no-this-before-super": "error",
		"no-var": "error",
		"object-shorthand": ["error", "properties"], // methods are optional so you can specify a name if you want
		"prefer-const": "error",
		"max-params": ["error", 5],
	},
};
