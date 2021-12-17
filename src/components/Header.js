import React from 'react'

import PropTypes from "prop-types"
import Button from './Button'

function Header({title="Task Tracker", showAddTas, toggleShow}) {


   
    return (
      <header className="header">
        <h1>{title}</h1>
        <Button color={showAddTas ? 'red':'purple'} text={showAddTas ? 'Close Taks Bar':'Show Task Bar'} toggleShow={toggleShow} />
      </header>
    );
}
// Header.defaultProps = {
//     title : "Task Tracker"
// }

// Header.propTypes = {
//     title:PropTypes.string.isRequired
// }
export default Header
