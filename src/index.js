import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("++++++")
        return () => {
            console.log('----------')
        }
    }, [count])

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>+++</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

