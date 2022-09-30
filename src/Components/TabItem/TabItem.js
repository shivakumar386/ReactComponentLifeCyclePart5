import './TabItem.css'

const TabItem = props => {
  const {tabsList, clickTabItem} = props
  const {tabId, displayText} = tabsList

  const showTabItems = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-list-elements">
      <button type="button" className="tab-button" onClick={showTabItems}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
