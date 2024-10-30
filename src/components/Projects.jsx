import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
        <div className="project-card1">
            <h2>TaskMaster</h2>
            <p>A web application designed to help users organize and manage their tasks efficiently. <br />Users can create tasks, set deadlines, assign priorities, and track their progress. The app may also include features like collaboration, notifications, and integration with other productivity tools.</p>
            <a href="#view">View Project</a>
        </div>
        <div className="project-card2">
            <h2>FitZen</h2>
            <p>A mobile app that allows users to track their fitness activities, set goals, and monitor their progress. Features may include step counting, calorie tracking, workout logging, sleep monitoring, and integration with wearable devices.</p>
            <a href="#view">View Project</a>
        </div>
    </section>
  );
};

export default Projects;