const Title = () =>{
    <img className="logo"
         alt="logo"
         src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw"/>
         
};

const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li> Home</li>
                    <li>Log In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;