import { useEffect } from "react";
import {Link} from 'react-router-dom'

export default function Footer() {
    let footerLink = "https://sailendra.onrender.com";

    useEffect(() => {
        let footerYear = document.getElementById("year");
        let date = new Date();

        footerYear.innerText = date.getFullYear();
    }, [])


    return (
        <footer>
            <div className="footer-section">
                <div>Developed with ❤ by <a href={footerLink} className="">Sailendra</a> </div>
                <div className="copyright">Copyright &copy; <span id="year">0000</span> All rights reserved</div>
                <div className="bug-report">
                    <Link to="mailto:sailendra9083@gmail.com">Report a Bug 🐞</Link> | 
                    <Link to="mailto:sailendra9083@gmail.com">Contact Developer</Link>
                    </div>
            </div>
        </footer>
    );
}