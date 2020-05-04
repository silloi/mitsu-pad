import React from 'react';

const YouTube = (props) => {
  const { id } = props

  const url = 'https://www.youtube.com/embed/' + id;

  return (
    <div style={{margin: '20px', textAlign: 'center'}}>
      <iframe 
        id="ytplayer" 
        type="ytplayer" 
        width="480" 
        height="270"
        src={url}
        frameborder="0"
      />
    </div>
  )
}

export default YouTube;