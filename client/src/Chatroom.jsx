import React from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import {tokenUrl, instanceLocator} from './config';

class Chatroom extends React.Component {

constructor() {
    super()
    this.state = {
        messages: []
    }
}




    componentDidMount () {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'perborgen',
            tokenProvider: new Chatkit.TokenProvider ({
                url: tokenUrl
            })

        })
        chatManager.connect ()
        .then(currentUser => {
            currentUser.subscribeToRoom ({
                roomId:19375478,
                hooks : {
                    onNewMessage: message => {
                
                        this.setState({
                         messages: [...this.state.messages,message]
                        })
                    }
                }
            })
        })
    }

    render () {
        return (
            <div className ="chatroom">
            <RoomList />
            <MessageList />
            <SendMessageForm />
            <NewRoomForm />
            </div>
        );
    }
}
export default Chatroom;