import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="hom">
<div className="backgroundClass">
<h1 className="start">Erfolgreiche Projekte beginnen mit einer für alle transparenten Planung
</h1>

      <main className="beschreib ">
        <div className="beschreib_text">
          <h2 className="beschreib_h2">Alle Funktionen der Projektplanung verbinden</h2>
          <span className="beschreib_span1">
          Planen und managen Sie Ihre Projekte an einem zentralen Ort. Definieren Sie wichtige Kontroll­punkte Ihrer Projekte und weisen Sie den Team­mitgliedern Arbeitspakete zu. Identifizieren Sie Risiken und Engpässe und beziehen Sie Team­mitglieder und Stakeholder in alle Schritte mit ein.
          </span>
        </div>
      </main>
</div>
   <div className="backimag">
   <div className="img1">
        <img
          className="beschreib_img"
          src="https://softwareauggest-blogimages.s3.ca-central-1.amazonaws.com/blog/wp-content/uploads/2022/02/11113825/team-management-software.jpg"
          alt=""
        />
      </div>
      <main className="beschreib">
        <div className="beschreib_text">
          <h2 className="beschreib_h2">Zentralisierung und Zusammenarbeit

</h2>
          <span className="beschreib_span">
          Fördern Sie die effiziente Zusammenarbeit über die Grenzen von Silos hinweg durch eine zentrale Infor­mationsquelle für Ihre Projekte. Halten Sie die gesamte Orga­nisation auf Kurs und liefern Sie Ergeb­nisse ab, auf die Sie und Ihr Team stolz sein können.


          </span>
        </div>
      </main>
      <section className="beschrei">
        <div className="notiz-todo-kalender">
          <img
            className="beschreib_imges"
            src="https://www.klartext.media/wp-content/uploads/2021/04/notizen-am-besprechungstisch.jpg"
            alt=""
          />
          <img
            className="beschreib_imges"
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn-aekfi.nitrocdn.com%2FBhHUnZmQXkWPzBaLMaTftVhEvszyNTtP%2Fassets%2Fimages%2Fsource%2Frev-b9d4954%2Fblog%2Fimages%2F2020%2F10%2Ftask-list-template-1170x658.jpg.webp"
            alt=""
          />
            <img
          className="beschreib_imges"
            src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/project-management-skills.jpg.webp?itok=rN-QQPq6"
            alt=""
          />
          <img
          className="beschreib_imges"
            src="https://blog.hubspot.de/hubfs/%5BSPANISH%5D-Blog-photos/Offers/Editorial_Calendar/Blog_Post_Editorial_Calendar-222708-edited-638992-edited.jpg"
            alt=""
          />

        </div>
      </section>
   </div>
    </div>
  );
}
