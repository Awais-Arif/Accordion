import "./index.css";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
import React, {useState} from "react";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((q) => {
            return <SingleQuestion key={q.id} {...q} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
