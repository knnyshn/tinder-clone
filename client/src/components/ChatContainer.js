import React, { useState } from 'react'
import ChatDisplay from './ChatDisplay'
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'

function ChatContainer({ user }) {
  const [ clickedUser, setClickedUser ] = useState(null)
  return (
      <div className='chat-container'>
      <ChatHeader user={user} />
          <div>
              <button className='option'>Matches</button>
              <button className='option'>Chat</button>
          </div>

      <MatchesDisplay matches={ user.matches } setClickedUser={setClickedUser} />

          <ChatDisplay />
    </div>
  )
}

export default ChatContainer