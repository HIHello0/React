import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './active-users.module.css'

const ActiveUsers = (props) => {
  return (
    <div className={` ${styles['active-users']} ${projectStyles['metrics']} `}>
      <span className={styles['text']}>{props.Statistic}</span>
      <span className={styles['text1']}>{props.Caption}</span>
    </div>
  )
}

ActiveUsers.defaultProps = {
  Caption: 'Caption',
  Statistic: 'Description',
}

ActiveUsers.propTypes = {
  Caption: PropTypes.string,
  Statistic: PropTypes.string,
}

export default ActiveUsers
