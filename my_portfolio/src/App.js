import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", lineHeight: "1.6" }}>
      {/* Om mig */}
      <section style={{ marginBottom: "40px" }}>
        <h1>Hej!  Jag heter Abdilhakim</h1>
        <p>
          Jag är Javautvecklare student som bor i Uppsala och brinner för systemutveckling.
          Jag gillar att bygga backend i Java och frontend i React. 
          Just nu lär jag mig mer om molnlösningar i Azure.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Skills</h2>
        <ul>
          <li>Spring Boot – Backendutveckling med Java</li>
          <li>Databaser – SQL & NoSQL (ex. MongoDB)</li>
          <li>React – Frontendutveckling</li>
          <li>Backend – REST API & serverlogik</li>
          <li>Frontend –  API och komponenter</li>
        </ul>
      </section>

      {/* Projekt */}
      <section style={{ marginBottom: "40px" }}>
        <h2> Mina projekt</h2>
        <ul>
          <li>
            <a 
              href="https://github.com/Hakke77/HTML" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               Projektuppgift – HTML portfolio
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/Hakke77/Projektuppgift" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               Projektuppgift – Java
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/Hakke77/Projektuppgift_react" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               Projektuppgift  – Frontend/React 
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
