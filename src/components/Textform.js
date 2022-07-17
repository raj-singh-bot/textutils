import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
    <div>
        <>
            <div className="container my-3" style={{color: props.mode=== 'light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'black':'white', color: props.mode=== 'light'?'black':'white'}} id="mybox" rows="8"></textarea>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLoClick} >Convert to Lowercase</button>
            </div>
            <div className="container my-3" style={{color: props.mode=== 'light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Enter something above to preview your text"}</p>
            </div>
        </>
    </div>
  )
}
