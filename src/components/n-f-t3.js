import React from 'react'

import PropTypes from 'prop-types'

import styles from './n-f-t3.module.css'

const NFT3 = (props) => {
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

NFT3.defaultProps = {
  title: 'Project Title',
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  image_src: '/playground_assets/bweujygiiaem0no-1500w.jpg',
  image_alt: 'image',
}

NFT3.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default NFT3
