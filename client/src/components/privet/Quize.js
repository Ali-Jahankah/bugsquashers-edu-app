import React, { useContext, useEffect } from "react";
import StudentContext from "../../context/student/StudentContext";
import "../../styles/quize.css";
import { Link } from "react-router-dom";

const Quize = () => {
  const { modules, getModulesHandler, moduleHandler, lessons, setLessons } =
    useContext(StudentContext);
  useEffect(() => {
    getModulesHandler();
  }, [setLessons]);

  console.log(lessons);
  return (
    <article className="quize_art">
      <h1 className="quize_headers">Modules</h1>
      <section className="quize_modules_sec">
        {modules.map((mod, index) => (
          <div
            onClick={() => moduleHandler(mod.id)}
            key={index}
            className="module_card"
          >
            <h3>{`Unit ${index + 1}`}</h3>
            <h2>{mod.module_name}</h2>
            <div>
              <p>{mod.module_description}</p>
            </div>
          </div>
        ))}
      </section>
      <h1 className="quize_headers">Lessons</h1>
      <section className="quize_lessons_sec">
        {lessons.length !== 0 &&
          lessons.map((lesson, index) => {
            return (
              <Link to={`lesson-${lesson.id}`} key={index}>
                <div className="lesson_card">{lesson.lesson_name}</div>
              </Link>
            );
          })}
      </section>
    </article>
  );
};

export default Quize;
