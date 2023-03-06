import React from "react";
import './home.scss'

export default function Home() {
    return (
     <div className="hom">
    <h1 className="start">Willkommen in unsere Webseite</h1>

  <main className="beschreib">
  <div>

<h2 className="beschreib_h2">Über uns</h2>
    <span className="beschreib_span">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Placeat soluta explicabo dolor corporis illo voluptates qui iure et, neque esse! <br /> Reprehenderit exercitationem magnam enim quasi nam reiciendis perferendis voluptatibus mollitia!</span>
</div>
<div>
<img className="beschreib_img" src="https://img.freepik.com/free-vector/project-management-goal-completion-list-questionnaire-survey-answering-business-organization-tool_335657-3289.jpg" alt="" />
</div>
  </main>
<section className="beschreib">
    <div>
    <h2 className="beschreib_h2">Was wir anbieten</h2>
  <span className="beschreib_span">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Placeat soluta explicabo dolor corporis illo voluptates qui iure et, neque esse! <br /> Reprehenderit exercitationem magnam enim quasi nam reiciendis perferendis voluptatibus mollitia!</span>
    </div>
  <div>  <img className="beschreib_img" src="https://www.ntaskmanager.com/wp-content/uploads/2021/02/Task-management-vs-project-management.jpg" alt="" /></div>
</section>
     </div>
    
    
    );
}
