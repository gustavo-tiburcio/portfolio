import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
        <h1>Logo</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/contact" >Contact</Link>
        </nav>
        </>
    )
}

export default Navbar