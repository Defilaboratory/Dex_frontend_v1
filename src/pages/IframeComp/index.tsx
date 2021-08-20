import React, { useState } from 'react';

const url = 'http://web.dev.hello4am.com/amag/nft/';

const IframeComp = () => {
    const [iFrameHeight, setIFrameHeight]  = useState<any>(undefined)

    return (
      <>
        <iframe title="title" scrolling="auto" frameBorder="0"
            style={{width:'100%',height:iFrameHeight, overflow:'visible'}}
            onLoad={() => {  // iframe高度不超过content的高度即可
                const h = document.documentElement.clientHeight - 20;
                setIFrameHeight(h)
            }} 
            src={url}
        />
      </>
    )
  }
export default IframeComp