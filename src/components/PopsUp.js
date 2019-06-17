import React,{useState,useEffect} from 'react'
import Popup from 'reactjs-popup'


  const header = {
    width: '100%',
    borderBottom: '1px solid gray',
    fontSize: '14px',
    textAlign: 'center',
  }

  const cardPops ={
    fontSize: '12px'

  }

const PopsUp = ({ title }) => (
  <div style={{cardPops}}>
    <div style={{header}}>{title} Easy Enjoyment </div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </div>
)


const PopsUpAction = () => {
const [showPops, setShowPops] = useState(false)
const [idleMinsTime, setIdleMinsTime] = useState(2)

useEffect(() => {

    const events =[
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ]
    for (var i in events){
        window.addEventListener(events[i],idle)
    }
    const showpops = setInterval (()=>{
        setIdleMinsTime(idleMinsTime - 1)
    },1000);

    let idle = setTimeout (showpops, idleMinsTime * 60 *1000)

    if(idleMinsTime === 0){
        setShowPops(true)
    }

    return () => {
        clearInterval(showpops)
        clearTimeout(idle)
    };
    
}, [showPops])
if(showPops === true){
    return(
        <div className="example-warper">
              <Popup
                trigger={<button className="button"> Top Center </button>}
                position="top center"
                on="hover"
              >
                <PopsUp title="Easy Enjoyment" />
              </Popup>
          
              
            </div>
        )
}
else return null
    
}

export default PopsUpAction;