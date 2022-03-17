import React from 'react'
const Rocket = () => {
    return <h1 className="icon">🚀</h1>
}

function App() {
    return (
        <div className="App">
            <div className="box">
                <Rocket />
            </div>
            <h1 className="title">Parcel</h1>
            <h1 className="sub-title">
                To get started, edit <span>src/App.js</span> and save to
                reaload.
            </h1>
        </div>
    )
}
export default App
