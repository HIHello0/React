import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './testimonal.module.css'

const Testimonal = (props) => {
  return (
    <div className={` ${styles['testimonal']} ${projectStyles['testimonal']} `}>
      <span className={styles['text']}>{props.Quote}</span>
      <div className={styles['author']}>
        <div className={styles['avatar']}>
          <img
            alt={props.Avatar_alt}
            src={props.Avatar_src}
            className={styles['image']}
          />
        </div>
        <div className={styles['user']}>
          <span className={styles['name']}>{props.Name}</span>
          <span className={styles['divider']}>—</span>
          <span className={styles['from']}>{props.From}</span>
        </div>
      </div>
    </div>
  )
}

Testimonal.defaultProps = {
  From: 'Vista Social',
  Avatar_alt: 'image',
  Avatar_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200',
  Name: 'Andy Smith',
  Quote:
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
}

Testimonal.propTypes = {
  From: PropTypes.string,
  Avatar_alt: PropTypes.string,
  Avatar_src: PropTypes.string,
  Name: PropTypes.string,
  Quote: PropTypes.string,
}

export default Testimonal
