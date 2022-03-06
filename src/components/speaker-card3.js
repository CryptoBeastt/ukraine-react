import React from 'react'

import PropTypes from 'prop-types'

import styles from './speaker-card3.module.css'

const SpeakerCard3 = (props) => {
  return (
    <div
      className={` ${styles['SpeakerCard']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['image-container']}>
        <img
          alt={props.image_alt}
          src="/playground_assets/peep%20%5B5%5D-300h.png"
          className={styles['image']}
        />
        <div className={styles['read-more-container']}></div>
      </div>
      <span className={styles['firstName']}>{props.firstName}</span>
      <span className={styles['lastName']}>{props.lastName}</span>
      <span className={styles['text']}>{props.role}</span>
    </div>
  )
}

SpeakerCard3.defaultProps = {
  rootClassName: '',
  firstName: 'Jonathan',
  lastName: 'carey',
  image_alt: 'image',
  role: 'Volunteer',
}

SpeakerCard3.propTypes = {
  rootClassName: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image_alt: PropTypes.string,
  role: PropTypes.string,
}

export default SpeakerCard3
