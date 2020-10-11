import React, { FunctionComponent } from 'react'

interface Props {
  id: string
}

const Soundcloud: FunctionComponent<Props> = ({ id }) => {
  return (
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      // onLoad={() => false}
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
    />
  )
}

export default Soundcloud
