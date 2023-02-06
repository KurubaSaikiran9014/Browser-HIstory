const EachHistoryItem = props => {
  const {historyDet, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDet

  const deleteButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="lis">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-icon"
        data-testid="delete"
        onClick={deleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default EachHistoryItem
