module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AnswerFields',
      externals: {
        react: 'React'
      }
    }
  }
}
