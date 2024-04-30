import { useEffect } from "react";

export default function Footer() {
    let githubLink = "https://github.com/sailendrachettri";

    useEffect(() => {
        let footerYear = document.getElementById("year");
        let date = new Date();

        footerYear.innerText = date.getFullYear();
    }, [])


    return (
        <footer>
            <div className="footer-section">
                <div className="">Developed with ❤ by <a href={githubLink} className="">Sailendra</a> </div>
                <div className="copyright">Copyright &copy; <span id="year">0000</span> All rights reserved</div>
            </div>
        </footer>
    );
}