const core = require('@actions/core')
const github = require('@actions/github')
const i18nActions = require('./i18n-actions')

i18nActions({ github }).catch((err) => core.error(err.message))
