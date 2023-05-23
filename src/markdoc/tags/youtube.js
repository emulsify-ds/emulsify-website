import * as React from 'react'
import ReactPlayer from 'react-player'

export default function YouTube({ url }) {
  return (
    <ReactPlayer
      url={url}
      controls
      width="100%"
      height="100%"
      className="aspect-video"
    />
  )
}
