const { libTest } = require('./sub/libb/test')

function getContent () {
    return `v0.1.1 test liba from self >> ${libTest()}`
}

module.exports = {
    getContent,
}