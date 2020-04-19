import React from 'react'
import PropTypes from 'prop-types'

import win from '../../../assets/sounds/win.wav'
import fail from '../../../assets/sounds/fail.wav'
import wheelSound from '../../../assets/sounds/wheel.wav'


const audios = { win, fail, wheelSound }

const Sound = ({ audio }) => (
  <audio autoPlay="autoplay" preload="false">
    <source src={audios[audio]} />
  </audio>
)

Sound.propTypes = {
  audio: PropTypes.string.isRequired
}

export default Sound