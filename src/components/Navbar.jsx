import ReactIconSmall from "/dist/assets/react-icon-small.png"

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img 
                    className="nav-img" 
                    src={ReactIconSmall} 
                    alt="reactlogo"/>
                <h3>ReactFacts</h3>
                <h4>React Project 1</h4>
            </nav>
        </header>
    )
}
