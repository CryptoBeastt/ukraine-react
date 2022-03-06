import React from 'react'

import PropTypes from 'prop-types'

import styles from './speaker-card2.module.css'

const SpeakerCard2 = (props) => {
  return (
    <div
      className={` ${styles['SpeakerCard']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['image-container']}>
        <img
          alt={props.image_alt}
          src="/playground_assets/peep%20%5B3%5D-300h.png"
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

SpeakerCard2.defaultProps = {
  role: 'Volunteer',
  firstName: 'Jonathan',
  lastName: 'carey',
  rootClassName: '',
  image_alt: 'image',
}

SpeakerCard2.propTypes = {
  role: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default SpeakerCard2
