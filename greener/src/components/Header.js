import logo from '../img/logo.png';

function Header () {
    return (
        <header>
        <div class="topHead">
            <div class="logo"><img src={logo} alt="Lampung Gardening Logo"  /></div>
            <div class="searchCart">
                <form action="">
                    <input type="text" placeholder="Search Plants..." />
                    <button class="search">
                        
                    </button>
                </form>
                <a href="" class="cartButton"></a>
            </div>
        </div>
        <nav>
            <div class="mainNav">                                
                <a href="#">Home</a>
                <a href="#">Plant</a>
                <a href="#">Plant Collection</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div class="profileDrop">
                <span>Hi, Moin</span>
                <div class="dropDown">
                    <a href="">Account</a>
                    <a href="">Setting</a>
                    <a href="">Log Out</a>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Header;