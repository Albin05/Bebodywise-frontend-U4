function navbar(){
    return `    <div id="nav_body">
    <button onclick="window.location.href='index.html'"><img src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1606295435/staging/Home/Images/bodywise-logo.png" alt="beBodywise"></Button>
</div>
<div id="nav_mid">
<div id="nav_txt">
    <a href="bookAppointment.html">Book Doctor Consultation</a>
</div>
<div id="nav_txt">
    <a href="assessment.html">Take Wellness Assessment</a>
</div>
<div>
    <select id="nav_opt">
        <option value="">Chose Concern</option>
        <option value="">Hair</option>
        <option value="">Skin</option>
        <option value="">Nutrition</option>
        <option value="">PCOS</option>
        <option value="">Intimate Care</option>
    </select>
</div>
<div id="nav_txt">
    <a href="products.html">All Products</a>
</div>
<div id="nav_txt">
    <a href="refer.html">Refer & Earn</a>
</div>
</div>
<div id="nav_right">
<div id="nav_search">
    <button><img src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_48/v1603950724/staging/Home/Images/u_search.svg" alt=""></button>
</div>
<div id="nav_btn">
    <button onclick="window.location.href='login.html'"><img src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_48/v1603950724/staging/Home/Images/u_user.svg" alt=""></button>
</div>
<div id="nav_btn">
    <button><a href="https://wa.me/917710096671?text=Hey%21+I+would+like+to+know+more+about+Bodywise." target="_blank"><img src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_48/v1603950724/staging/Home/Images/WhastApp.svg" alt=""></a></button>
</div>
<div id="nav_btn">
    <button onclick="window.location.href='cart.html'"><img src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1603950724/staging/Home/Images/u_shopping-bag.svg" alt=""></button>
</div>
</div>`;
}


function footer(){
    return ` <div class="footer_container">
                <div class="footer-section">
                    <div class="details">
                        <div>
                            <img class="image" style="width:30%" src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1606295435/staging/Home/Images/bodywise-logo.png"  alt="">
                        </div>
                        <ul class="prod" class="ul">
                            <li  class="li">
                                <a href="#">Hair</a>
                            </li>
                            <li  class="li">
                                <a href="#">Skin</a>
                            </li>
                            <li  class="li">
                                <a href="#">Nutrition</a>
                            </li>
                        </ul>
                        <ul class="prod1" class="ul">
                            <li class="li">
                                <a href="#">PCOS</a>
                            </li>
                            <li class="li">
                                <a href="#">Intimate Care</a>
                            </li>
                            <li class="li">
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div class="contact">
                        <ul  class="ul">
                            <li class="li">
                                <a href="#">Contact Us</a>
                            </li>
                            <li class="li">
                                <a href="#">About Us</a>
                            </li>
                        </ul>
                        <ul  class="ul">
                            <li class="li">
                                <a href="#">FAQs</a>
                            </li>
                            <li class="li">
                                <a href="#">Returns&Refunds</a>
                            </li>
                        </ul>
                    </div>
                    <div class="adve">
                        <div class="adve1">
                            <ul class="f1"  class="ul">
                                <li  class="li">
                                <a href="#">
                                    <img class="image" src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_50,c_limit/v1603435299/staging/Home/Images/insta.png" alt="">
                                </a>
                                </li>
                                <li  class="li">
                                    <a href="#">
                                        <img class="image" src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_50,c_limit/v1603435299/staging/Home/Images/fb.png" alt="">
                                </a>
                                </li>
                                <li  class="li">
                                    <a href="#">
                                        <img  class="image" src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_50,c_limit/v1603435299/staging/Home/Images/youtube.png" alt="">
                                </a>
                                </li>
                            </ul>
                        </div>
                        <ul class="side"  class="ul">
                            <li class="li">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li class="li"><a href="#">Join Community</a></li>
                        </ul>
                        <p>Copyright © 2022 BeBodywise. All rights reserved</p>
                    </div>
                </div>
            </div>`
}

export {navbar, footer};
