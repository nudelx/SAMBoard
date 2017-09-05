  import React from 'react'
  import StatusBlock from './statusBlock'

const Header = ({ title }) => {
  return  (
    <div className={'header'}>
      <ul className={'header-list'}>
        <li className={'main-title'}> {title} </li>
        <li> <StatusBlock status envName={'cmdb'} /> </li>
        <li> <StatusBlock envName={'esd'} /> </li>
      </ul>
    </div>
  )
}


export default Header
