import React from 'react'

import PropTypes from 'prop-types'

import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={` ${styles['card']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text01']}>
        <span>Unlimited sandbox testing and</span>
        <br className={styles['text03']}></br>
        <br></br>
        <span>production access for up to 25</span>
        <br className={styles['text06']}></br>
        <br></br>
        <span>connected businesses for life.</span>
      </span>
      <div className={styles['get-started']}>
        <span className={styles['text09']}>{props.text2}</span>
      </div>
      <span className={styles['text10']}>{props.text1}</span>
      <div className={styles['bullet-points']}>
        <div className={styles['point']}>
          <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon']}>
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className={styles['text11']}>{props.text3}</span>
        </div>
        <div className={styles['point1']}>
          <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon2']}>
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className={styles['text12']}>{props.text4}</span>
        </div>
        <div className={styles['point2']}>
          <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon4']}>
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className={styles['text13']}>{props.text5}</span>
        </div>
        <div className={styles['point3']}>
          <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon6']}>
            <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <span className={styles['text14']}>{props.text6}</span>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  text1: "What's included",
  text3: 'Sed ut pespiciatis unde omnis',
  text5: 'Sed ut pespiciatis unde omnis',
  text: 'Pay as you go',
  text6: 'Sed ut pespiciatis unde omnis',
  text2: 'Start for free',
  rootClassName: '',
  text4: 'Sed ut pespiciatis unde omnis',
}

Card.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default Card
