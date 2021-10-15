import "./AboutPage.css"
import movies from "./assets/movies.jpg"

const AboutPage = ()=>{
    return(
        <div className="aboutPage">
            <div className="aboutImage">
                <img src={movies} className="moviesImage"/>
            </div>
            <div className="aboutText">
                <div className="aboutHeader">
                    Kinolove
                </div>

                <div className="aboutInfo">
                    <p>Kinolove – это самая большая сеть кинотеатров в Украине основанная в 2004 году.</p>
                    <p>Kinolove - это 28 кинотеатров и 141 кинозал в самых больших городах Украины.</p>
                    <p>Согласно лучшим мировым практикам корпоративного управления, в августе 2018 года был сформован высший орган управления компанией Kinolove – борд, в состав которого вошли влиятельные украинские предприниматели, управленцы и лидеры общественного мнения.
                    Kinolove активно поддерживает и инвестирует в развитие украинского кинематографа.</p>
                </div>

                <div className="aboutBox">
                    <div className="boxItem">
                        <div className="boxImage">
                            <img src="https://img.icons8.com/material-outlined/48/ffffff/collectibles.png"/>
                        </div>
                        <div className="boxText">
                            Возврат билетов
                        </div>
                    </div>

                    <div className="boxItem">
                        <div className="boxImage">
                            <img src="https://img.icons8.com/material-outlined/48/ffffff/bonds.png"/>
                        </div>
                        <div className="boxText">
                            Карьера
                        </div>
                    </div>

                    <div className="boxItem">
                        <div className="boxImage">
                            <img src="https://img.icons8.com/material-outlined/48/ffffff/collectibles.png"/>
                        </div>
                        <div className="boxText">
                            Поддержка
                        </div>
                    </div>

                    <div className="boxItem">
                        <div className="boxImage">
                            <img src="https://img.icons8.com/material-outlined/48/ffffff/dividends.png"/>
                        </div>
                        <div className="boxText">
                            Реклама
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage