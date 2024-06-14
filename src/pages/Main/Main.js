import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {

    let navigate = useNavigate();

  return (
    <div>
      <div className='mainWrap'>
        <div className='container'>
            <div className='mainTitle'>
                <h1>TODOLIST</h1>
            </div>
            <div className='mainDesc'>
                <p>투두리스트를 작성하고 싶다면 아래 버튼을 눌러주세요.</p>
            </div>
            <button onClick={()=>{navigate('/todo')}}>등록하러가기😆</button>
        </div>
      </div>
    </div>
  )
}

export default Main
