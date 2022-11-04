module.exports = ({ github }) => {
  const action = github.context.payload.action

  if (['opened', 'edited'].includes(action)) {
    return 'taking action'
  }
}
