import React from 'react'

const SidebarItem = ({link , liStyle, pValue , pStyle , imgStyle , altValue}) => {
  return (
    <li className={liStyle}>
          <img className={imgStyle} src={link} alt={altValue} />
          <p className={pStyle}>{pValue}</p>
    </li>
  )
}

export default SidebarItem