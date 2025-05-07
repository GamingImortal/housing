import { useState } from 'react';
import './chat.scss';

function Chat(){
    const [chat, setChat] = useState(null)
    return(
        <div className='chat'> 
        <div className='messages'>
            <h1>Messages</h1>
            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Chiweshe Ralph</span>
                <p>
                    Hello team mates...
                </p>
            </div>
            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Chimoto Moyo</span>
                <p>
                    This is very nice...
                </p>
            </div>
            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Nelius Hove</span>
                <p>
                    hello Ralph how are?...
                </p>
            </div>
            
            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Tawanda Gonyora</span>
                <p>
                    Is this safe for us...
                </p>
            </div>
            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Tawanda Gonyora</span>
                <p>
                    Is this safe for us...
                </p>
            </div>
            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Tawanda Gonyora</span>
                <p>
                    Is this safe for us...
                </p>
            </div>
            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Tawanda Gonyora</span>
                <p>
                    Is this safe for us...
                </p>
            </div>

            <div className=' message'>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Mike H</span>
                <p>
                    Yaa this app is amazing!!...
                </p>
            </div>
        </div>
       { chat && 
       <div className=' chatBox'>
        <div className=' top'>
        <div className='user'>
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                Nelius 
            </div>
            <span className='close' onClick={()=> setChat(null)}>
                
            </span>
        </div>
        <div className='center'>
        <div className='chatMessage'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        <div className='chatMessage own'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        <div className='chatMessage'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        <div className='chatMessage own'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        <div className='chatMessage'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        <div className='chatMessage own'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        <div className='chatMessage'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        <div className='chatMessage own'>
        <p>
            We are just started, let us knowif it is good.
            </p> 
             <span>1 hour ago</span>  
        </div>
        </div>
        <div className=' bottom'>
            <textarea ></textarea>
            <button>Send</button>
        </div>
        </div>}
        </div>
    )

}

export default Chat;