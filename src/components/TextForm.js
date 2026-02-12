import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
         }

    const handleOnchange = (event) => { 
        console.log("On change");
        setText(event.target.value);
    }
    const handleOnchangelower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclear = () => {
        let newText = '';
        setText(newText);
    }
    
     return (
    <div>
     <div className="container mb-3">
        <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
    <textarea value={text} onChange={handleOnchange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    </div>
    <div className="container">
    <button onClick={handleUpClick} className="btn btn-primary mx-3">Convert to uppercase</button>
    <button onClick={handleOnchangelower} className="btn btn-primary mx-3">Convert to lowercase</button>
    <button  type="button" className="btn btn-primary mx-3" onClick={handleclear}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
       </div>  
     )
}