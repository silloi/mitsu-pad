import React from 'react';

const YouTube = (props) => {
  const { url } = props;
  let videoId;

  videoId = url.split('v=')[1];

  // 正しいurlの形式だったとき
  if (videoId) {
    // &=クエリパラーメターがついていることがあるので取り除く
    const ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition != -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
  }

  // 埋め込み用URL
  const urlEmbed = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div style={{margin: '20px 0 0', textAlign: 'center'}}>
      <iframe 
        id="ytplayer" 
        type="ytplayer" 
        width="320" 
        height="190"
        src={urlEmbed}
        frameBorder="0"
      />
    </div>
  )
}

export default YouTube;