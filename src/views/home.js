import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard1 from '../components/speaker-card1'
import SpeakerCard2 from '../components/speaker-card2'
import SpeakerCard3 from '../components/speaker-card3'
import SpeakerCard4 from '../components/speaker-card4'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Ukraine</title>
        <meta property="og:title" content="Ukraine" />
      </Helmet>
      <Navigation></Navigation>
      <main className={styles['Main']}>
        <div
          className={` ${styles['Hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['content-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                <span>
                  100% GO TO SUPPORT UKRAINIANS
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span></span>
              </h1>
              <span className={styles['text03']}>
                <span>
                  As you are reading this, thousands of Ukrainians are without
                  adequate shelter, food, and water supply, constantly dodging
                  bullets and in fear of what the future holds.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Our mission is to provide aid to cities that have been
                  affected by violence and destruction.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className={styles['btns-container']}>
                <button
                  className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
                >
                  MAKE A DONATION
                </button>
              </div>
            </div>
            <div className={styles['video-container']}>
              <video
                muted="true"
                poster="/playground_assets/ukraine%20nft-03-1200w.jpg"
                autoPlay="true"
                className={styles['video']}
              ></video>
            </div>
          </div>
          <div className={styles['BlueBackground']}></div>
        </div>
        <div
          className={` ${styles['Sponsors']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <h1
                className={` ${styles['text07']} ${projectStyles['heading2']} `}
              >
                <span>Slava Ukraini! Heroiam slava!</span>
                <br></br>
                <span>
                  transl. &quot;Glory to Ukraine! Glory to the heroes!&quot;
                </span>
              </h1>
            </div>
            <div className={styles['events-container']}></div>
          </div>
        </div>
        <div className={styles['Location']}>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHVrcmFpbmV8ZW58MHx8fHwxNjQ1OTA1ODI3&amp;ixlib=rb-1.2.1&amp;w=2000"
            className={styles['image']}
          />
          <div
            className={` ${styles['content-container1']} ${projectStyles['section-container']} `}
          >
            <div className={styles['container1']}>
              <span className={styles['text11']}>OUr Mission</span>
              <div className={styles['container2']}></div>
              <div className={styles['container3']}>
                <span className={styles['text12']}>Summary</span>
                <span className={styles['text13']}>
                  <span>
                    Russia has invaded Ukraine in the biggest
                    state-against-state attack since World War II. Millions of
                    civilians are caught in the middle of an escalating military
                    conflict and humanitarian crisis, and casualties are rising.
                    Your donation to this fund will support Ukrainians in need,
                    with a focus on the most vulnerable, including children.
                  </span>
                </span>
                <span className={styles['text15']}>CHALLENGE</span>
                <span className={styles['text16']}>
                  <span>
                    Eight years of armed conflict in eastern Ukraine has already
                    killed thousands of civilians and put millions in need of
                    humanitarian assistance. Full-scale war in Ukraine will have
                    catastrophic consequences. Nearly 120,000 additional
                    Ukrainians have now fled Ukraine in response to
                    Russia&apos;s invasion. The COVID-19 pandemic is an added
                    challenge for communities where violence and uncertainty
                    takes a heavy toll.
                  </span>
                </span>
                <span className={styles['text18']}>SOLUTION</span>
                <span className={styles['text19']}>
                  <span>
                    All donations to the Ukraine Crisis Relief Fund will support
                    humanitarian assistance in impacted communities in Ukraine
                    and surrounding regions where Ukrainian refugees have fled.
                    Slava Ukraini local partners are bringing relief to
                    terrified and displaced communities, and they need resources
                    to continue their life-saving work.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span></span>
                  <span></span>
                </span>
                <div className={styles['btns-container1']}>
                  <button
                    className={` ${styles['register']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                  >
                    DONATE
                  </button>
                  <button
                    className={` ${styles['learn-more']} ${projectStyles['button']} ${projectStyles['button-outline']} ${projectStyles['button-md-border']} `}
                  >
                    WHITEPAPER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['Speakers']}>
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container1']}>
              <h1
                className={` ${styles['text25']} ${projectStyles['heading2']} `}
              >
                <span>we ARE ALL VOLUNTEERS</span>
                <span className={styles['text27']}></span>
              </h1>
              <span className={styles['text28']}>
                16 speakers from 7 countries and 3 continents
              </span>
            </div>
            <div className={styles['speakers-container']}>
              <SpeakerCard1></SpeakerCard1>
              <SpeakerCard2 rootClassName="rootClassName"></SpeakerCard2>
              <SpeakerCard3 rootClassName="rootClassName"></SpeakerCard3>
              <SpeakerCard4 rootClassName="rootClassName"></SpeakerCard4>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Home
