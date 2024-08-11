const Footer = () => {
    return(
        <div id="footer" className="w-full bg-transparent absolute bottom-0">
            <ul className="w-full mr-1 py-6 text-md font-light flex justify-evenly">
                <div className="flex flex-col justify-center">
                    <li className="w-auto mx-4"><a href="https://www.linkedin.com/in/gazishahi/" target="blank">Gazi Shahi</a></li>
                    <li className="w-auto mx-4"><a href="https://www.linkedin.com/in/rezwan-sheikh-68085a25b/" target="blank">Rezwan Sheikh</a></li>
                    <li className="w-auto mx-4"><a href="https://www.linkedin.com/in/rashislam/" target="blank">Rashadul Islam</a></li>
                    <li className="w-auto mx-4"><a href="https://www.linkedin.com/in/wahid-kamruddin/" target="blank">Wahid Kamruddin</a></li>
                </div>
                <li className="w-auto mx-4"><a href="mailto:wahidkamruddin101@gmail.com" target="_blank">Contact</a></li>
            </ul>
        </div>
    )
}

export default Footer;