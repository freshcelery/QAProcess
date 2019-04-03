import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

interface BioProps {
  className?: string
}

function Bio(props: BioProps) {
  let photoURL = getGravatarURL({
    email: "cory.purnell@pixelunion.net",
    size: 56,
  })

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
    </div>
  )
}

export default Bio
