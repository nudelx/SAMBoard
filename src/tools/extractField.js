
export default const extractField = () => {
  if (field === 'updated') return this.state.timeAgo
  if (field === 'user') return <User user={this.state.user} />
  if (field.indexOf('t-') != -1) {
    return parseFloat(this.state.threads[field])
      ? <span className="fail">
          {this.state.threads[field]}
        </span>
      : <span className="pass">
          {this.state.threads[field] === undefined
            ? <img className="spinner" src={spinner} />
            : '✓'}
        </span>
}
