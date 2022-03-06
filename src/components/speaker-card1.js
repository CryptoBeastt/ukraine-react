import React from 'react'

import PropTypes from 'prop-types'

import styles from './speaker-card1.module.css'

const SpeakerCard1 = (props) => {
  return (
    <div className={styles['SpeakerCard']}>
      <div className={styles['image-container']}>
        <img
          alt={props.image_alt}
          src="/playground_assets/peep%20%5B1%5D-300h.png"
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

SpeakerCard1.defaultProps = {
  firstName: 'Jonathan',
  lastName: 'carey',
  image_alt: 'image',
  role: 'Volunteer',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

SpeakerCard1.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image_alt: PropTypes.string,
  role: PropTypes.string,
  image_src: PropTypes.string,
}

export default SpeakerCard1
