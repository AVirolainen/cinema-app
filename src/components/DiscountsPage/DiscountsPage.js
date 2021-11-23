import "./DiscountsPage.css"
import cinema from "./assets/cinema.jpg"
import MetaTags from 'react-meta-tags';

const DiscountsPage = ()=>{
    return(
        <div className="discountsPage">
            
            <MetaTags>
                <title>Акции в Kinolove</title>
                <meta id="meta-description" name="description" content="Акции в кинотеатре Kinolove" />
                <meta name="keywords" content="недорогой кинотеатр в Киеве, недорогой кинотеатр, продажи билетов" />
                <meta id="og-title" property="og:title" content="О нас" />
            </MetaTags>

            <div className="textDiv">
                <div className="textHeader">
                    Специальные тарифы школьникам, студентам и пенсионерам!
                </div>

                <div className="textInfo">
                    <h1 style={{color: "white", marginBottom: "50px"}}>Kinolove - недорогой кинотеатр в Киеве</h1>
                    <h2>Kinolove - недорогой кинотеатр в Киеве</h2>
                    <p>ПРАВИЛА ПРОДАЖИ БИЛЕТОВ ПО СПЕЦИАЛЬНЫМ ТАРИФАМ ДЛЯ ДЕТЕЙ, СТУДЕНТОВ ШКОЛЬНИКОВ И ПЕНСИОНЕРОВ  (сектор GOOD*) </p>

                    <p>СТОИМОСТЬ БИЛЕТОВ**:</p>

                    <p>Поскольку Kinolove - недорогой кинотеатр, тарифы для дошкольников/школьников/студентов - это скидка в размере 10 грн от стандартной стоимости билета на сеансы и действуют только на места сектора GOOD. Тарифы действуют после первого уикенда проката фильма и не суммируются с другими акциями.</p>
                    <p>Специальный тариф предоставляется студентам только стационарной формы обучения, и только при наличии оригинального студенческого билета, выданного вузов Украины (1 студенческий билет = 1 билет в кино со скидкой).</p>
                   

                    </div>
            </div>

            <div className="imageDiv">
                <img src={cinema} className="cinemaImage"/>
            </div>
>        </div>
    )
}

export default DiscountsPage