import React from 'react'

function App() {
    let re='<b>React</b>'
    let rn = 'React Native'
    const el=(
        <div>
            Create Web & Mobile Apps<br/>
            wiht <span dangerouslySetInnerHTML={{__html:re}}/> & {rn}
        </div>
    )
    return el
}

export default App;