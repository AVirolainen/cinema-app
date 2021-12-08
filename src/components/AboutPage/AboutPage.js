import "./AboutPage.css"
import movies from "./assets/movies.jpg"
import MetaTags from 'react-meta-tags';

const AboutPage = () => {
    return (
        <div className="aboutPage">

            <MetaTags>
                <title>Лучший кинотеатр Киева</title>
                <meta id="meta-description" name="description" content="Кинотеатр Kinolove - самая большая сеть кинотеатров в Украине" />
                <meta name="keywords" content="кинотеатр в Киеве, лучший кинотеатр Киев, кинотеатр Kinolove" />
                <meta id="og-title" property="og:title" content="О нас" />
                <meta name="author" content="Stanislav Rudenko" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>

            <div className="aboutImage">
                <img src={movies} className="moviesImage" />
            </div>
            <div className="aboutText">
                <h1 className="aboutHeader" style={{color: "white"}}>
                    Kinolove
                </h1>

                <div className="aboutInfo">
                    <p>Kinolove - лучший кинотеатр в Киеве</p>
                    <p>Kinolove – это самая большая сеть кинотеатров в Киеве основанная в 2004 году.</p>
                    <p>Kinolove - это 28 кинотеатров и 141 кинозал в Киеве</p>
                    <p>Согласно лучшим мировым практикам корпоративного управления, в августе 2018 года был сформован высший орган управления 
                    компанией Kinolove – борд, в состав которого вошли влиятельные украинские предприниматели, управленцы и лидеры общественного 
                    мнения.Kinolove активно поддерживает и инвестирует в развитие украинского кинематографа.</p>
                </div>

            </div>
        </div>
    )
}

export default AboutPage