import React from 'react'

const head = () => {
    return (
            
        <div id="joinPage" class="card-panel" >
            <form id="join-room-form" >
                <input name="nickname" type="text" placeholder="Nickname"/>
                <input name="roomId" type="text" placeholder="Room ID"/>
                <button class="btn" >Join Room</button>
            </form>
        </div>

    )

}
export default head
