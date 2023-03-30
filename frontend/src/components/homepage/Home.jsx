import React from "react";
import "./home.scss";

export default function Home() {
    return (
        <div className="hom">
            <h1 className="start">Willkommen in unsere Webseite</h1>

            <main className="beschreib">
                <div className="beschreib_text">
                    <h2 className="beschreib_h2">Über uns</h2>
                    <span className="beschreib_span">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. <br /> Placeat soluta explicabo dolor corporis
                        illo voluptates qui iure et, neque esse! <br />{" "}
                        Reprehenderit exercitationem magnam enim quasi nam
                        reiciendis perferendis voluptatibus mollitia!
                    </span>
                </div>
              
            </main>
            <div>
                    <img
                        className="beschreib_img"
                        src="https://www.frevvo.com/blog/wp-content/uploads/2021/12/image5-3.png"
                        alt=""
                    />
                </div>
                <main className="beschreib">
                <div className="beschreib_text">
                    <h2 className="beschreib_h2">Was wir bieten</h2>
                    <span className="beschreib_span">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. <br /> Placeat soluta explicabo dolor corporis
                        illo voluptates qui iure et, neque esse! <br />{" "}
                        Reprehenderit exercitationem magnam enim quasi nam
                        reiciendis perferendis voluptatibus mollitia!
                    </span>
                </div>
              
            </main>
            <section className="beschrei">
             
                <div className="notiz-todo-kalender">
                   
                    <img
                        className="beschreib_imges"
                        src="https://as2.ftcdn.net/v2/jpg/00/21/99/83/1000_F_21998361_jnNu0OQi46xnhdFw0pPPWpGAQo1Qg7iG.jpg"
                        alt=""
                    />
                       <img
                        className="beschreib_imges"
                        src="https://static.vecteezy.com/ti/gratis-vektor/p1/4718992-komplette-to-do-liste-erledigen-projekt-planen-oder-fertigstellen-aufgaben-im-zeitplan-hilfe-das-geschaftsziel-und-ziel-erledigt-geschaftsfrau-aufsteigen-todo-liste-to-hakchen-beendetes-arbeiten-projekt-aufgaben-checkbox-vektor.jpg"
                        alt=""
                    />
                       <img
                        className="beschreib_imges"
                        src="https://werner-zenk.de/archiv/img/event-kalender_sqlite.png"
                        alt=""
                    />
                </div>
            </section>
            
            
        </div>
    );
}
