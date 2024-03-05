import './contact.css';

export default () => {
    return (
        <div id="Contact">
            <h2 className="sub-title">CONTACT ME</h2>
            <div className="row">
                <div className="contact-left">
                    <p><i className="fa-solid fa-envelope"></i>chaithunani5@gmail.com</p>
                    <p><i className="fa-solid fa-square-phone"></i>8790699260</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/chaithanya.kumar.94402?sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank" id='fbook'><i className="fa-brands fa-facebook-f" ></i></a>
                        <a href="https://x.com/Chaithu2609?t=L29aH3MmxLjJWl73Pt3_fQ&s=08" target="_blank" id='xtwitter'><i className="fa-brands fa-x-twitter" ></i></a>
                        <a href="https://www.instagram.com/chaithu2609?igsh=anpqczVyZXV5aG5o" target="_blank" id='instagram'><i className="fa-brands fa-instagram" id='instagram'></i></a>
                        <a href="https://github.com/annemchaitanyakumar" target="_blank" id='git'><i className="fa-brands fa-github" ></i></a>
                        <a href="https://www.linkedin.com/in/chaitanya-kumar-123a38183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" id='linkedin'><i className="fa-brands fa-linkedin-in" id='linkedin'></i></a>
                    </div>
                    <div class="tooltip-container">
                        {/* <a href='#Navbar' class='scrolltip' title='Go Home'><i class="fa-solid fa-angles-up" id='arrow'></i></a> */}
                        <a href='#Navbar' class='scrolltip' title='Go Home'><i class="fa-solid fa-angles-up bounce" id='arrow'></i></a>

                        <div class="tooltip">Go To Home</div>
                    </div>


                    

                </div>
            </div>
            
        </div>
    );
};
