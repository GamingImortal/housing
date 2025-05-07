import { List } from '@mui/material';
import './profilePage.scss';
import Chat from '../../components/chat/chat';
function ProfilePage(){
    return (
        <div className='profilepage'>
        <div className='details'>
            <div className='wrapper'>
            <div className='title'>
                    <h1>User Information</h1>
                    <button> Update Profile</button>
                </div>
                <div className='info'>
                    <span>Avatar: <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
                    </span>
                    <span>Username: <b>Hove Nelius</b></span>
                    <span>E-mail: <b>nellyhove@gmail.com</b></span>

                </div>
                <List/>
                <div className='title'>
                    <h1>My List</h1>
                    <button> Create New List</button>
                </div>

                <List/>
                <div className='title'>
                    <h1>Saved List</h1>
                    
                </div>


            </div>
        </div>
        <div className='chatContainer'>
            <div className='wrapper'></div>
            <Chat/>
        </div>
        </div>
    )

}

export default ProfilePage;