import React from 'react'

import PropTypes from 'prop-types'

import styles from './you-tube.module.css'

const YouTube = (props) => {
  return (
    <div className={styles['you-tube']}>
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className={styles['pasted-image']}
      />
    </div>
  )
}

YouTube.defaultProps = {
  pastedImage_src: '/playground_assets/pastedimage-smjb.svg',
  pastedImage_alt: 'pastedImage',
}

YouTube.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default YouTube
