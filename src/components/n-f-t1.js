import React from 'react'

import PropTypes from 'prop-types'

import styles from './n-f-t1.module.css'

const NFT1 = (props) => {
  return (
    <div
      className={` ${styles['GalleryCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.title}</h2>
      <span className={styles['text1']}>{props.subtitle}</span>
    </div>
  )
}

NFT1.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet',
  image_src: '/playground_assets/359775_1586119823-1500w.jpg',
  title: 'Project Title',
}

NFT1.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
}

export default NFT1
