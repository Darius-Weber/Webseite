function Footer(){

    return(
        <section id="footer">
            <div className="container footer_end">
                <div className="socialmedia">
                    <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                </div>

        
                {/*<div>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#">Impressum</a>
                        </li>
                    </ul>
                </div>*/}


                <p id="copyright">&copy; Copyright 2022 Darius Weber</p>
                

                <a href="#top"><i class="fas fa-chevron-up"></i></a>
            </div>
        </section>
    );

}

export default Footer;