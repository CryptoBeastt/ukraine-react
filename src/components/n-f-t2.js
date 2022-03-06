import React from 'react'

import PropTypes from 'prop-types'

import styles from './n-f-t2.module.css'

const NFT2 = (props) => {
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

NFT2.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/5640289-hsc00001-7-1500w.jpg',
  subtitle: 'Lorem ipsum dolor sit amet',
  title: 'Project Title',
  image_alt: 'image',
}

NFT2.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
}

export default NFT2
