import React from 'react'

import PropTypes from 'prop-types'

import styles from './speaker-card4.module.css'

const SpeakerCard4 = (props) => {
  return (
    <div
      className={` ${styles['SpeakerCard']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['image-container']}>
        <img
          alt={props.image_alt}
          src="/playground_assets/peep%20%5B7%5D-300h.png"
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

SpeakerCard4.defaultProps = {
  lastName: 'carey',
  role: 'Volunteer',
  image_alt: 'image',
  firstName: 'Jonathan',
  rootClassName: '',
}

SpeakerCard4.propTypes = {
  lastName: PropTypes.string,
  role: PropTypes.string,
  image_alt: PropTypes.string,
  firstName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SpeakerCard4
