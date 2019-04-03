import { join } from 'path'
import React from 'react'
import { Link } from 'react-navi'
import { formatDate } from '../utils/formats'
import styles from './ArticleMeta.module.css'

interface ArticleMetaProps {
  blogRoot: string
  data: any
  readingTime?: any
}

function ArticleMeta({ blogRoot, data, readingTime }: ArticleMetaProps) {
  let readingTimeElement
  if (readingTime) {
    let minutes = Math.max(Math.round(readingTime.minutes), 1)
    let cups = Math.round(minutes / 5)
    readingTimeElement = (
      <React.Fragment>
        <span className={styles.readingTime}>
          {new Array(cups || 1).fill('☕️').join('')} {minutes} min read
        </span>
      </React.Fragment>
    )
  }

  return (
    <small className={styles.ArticleMeta}>
      {readingTimeElement || null}
    </small>
  )
}

export default ArticleMeta
