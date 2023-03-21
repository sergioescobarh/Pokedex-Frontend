import './Navbar.css';

function Navbar (props) {
    return(
        <>
            <ul>
            {props.options.map((option) => (<li>{option}</li>))}
            </ul>
            
        </>
    )

}

export {Navbar};