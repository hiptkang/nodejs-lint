# nodejs-lint
General configuration of eslint and prettier for a ReactJS project

## ESLint configuration

### default configuration files

- .eslintrc
- .eslintrc.js
- package.json ("eslintConfig" field)

### configuration file on the [command line](https://eslint.org/docs/user-guide/command-line-interface)
The {config-file} overrides the default configuration files if present.

- eslint --config {config-file}

### ignoring files

- .eslintignore
- eslint --ignore-path {ignore-file}
- eslint --ignore-pattern {ignore-pattern}

## Prettier configuration

- .prettierrc

### ignoring files

- .prettierignore

## References

- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io/)
