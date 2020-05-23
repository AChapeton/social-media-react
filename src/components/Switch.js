import React, {useRef} from 'react'
import './styles/Switch.css'

function Switch(){

    const ref = useRef(null)

    function handleChange(){
        console.log(ref.current.checked)
        if(ref.current.checked){
            document.body.classList.remove('is-light-mode');
            document.body.classList.add('is-dark-mode');
        }
        else{
            document.body.classList.remove('is-dark-mode');
            document.body.classList.add('is-light-mode');
        }
    }

    return(
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange} type="checkbox" name="" className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    )
}

export default Switch