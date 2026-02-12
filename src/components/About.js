import React, {useState} from 'react'

export default function About() {
    const [mystyle, setMystyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    });
    const [btntext, setBtntext] = useState("Enable Light Mode");

    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            });
            setBtntext("Enable Light Mode");
        } else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtntext("Enable Dark Mode");
        }
    }








  return (
    <div className="container" style={mystyle}>
   <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
    </div>
  )
}