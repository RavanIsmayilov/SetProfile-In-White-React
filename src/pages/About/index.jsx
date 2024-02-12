import image from "../assets/Vectorgithub.svg"
import image2 from "../assets/simple-line-icons_social-twitter.png"
import image3 from "../assets/Vectordribble.svg"
import person from "../assets/Rectangle 2RiyadImg.jpg"
import "./style.css"


export default function About(){
    return(
        <>        
        
        <div className="about_info">
        <div className="about_personal">
        <h2>Hello , I’m Riyad</h2>
        <p>Graphic Designer, UI/UX <br/>Designer , Web Designer</p>
        <button className="about_btn">Get In Touch !</button>
        </div>
        

        <div className="about_icons">
        <img src={image} alt="git" />
        <img src={image2} alt="twitter" />
        <img src={image3} alt="dribble" />
        </div>
        </div>

        <div>
        <img className="person_image" src={person} alt="person" />
        </div>


        </>

    )
}