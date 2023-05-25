import React from 'react'

function ChatContainer() {
  return (
      <div className='chat-container'>
          <ChatHeader />
          <div>
              <button className='option'>Matches</button>
              <button className='option'>Chats</button>
          </div>
          <MatchesDisplay />
    </div>
  )
}

export default ChatContainer