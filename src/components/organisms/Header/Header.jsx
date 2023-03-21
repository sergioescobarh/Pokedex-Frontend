import {Navbar} from '../../molecules/Navbar/Navbar';

function Header () {
    return (
        <>
        <div>
            {<Navbar options={['sdfsd','dfgdg']}/>} 
        </div>
        <img className='logo' src="/images/logo2.jpg" alt='logo' />
        <div>
            {<Navbar options={['sdfsd','dfgdg']}/>} 
        </div>
        </>
    )
}
export {Header};