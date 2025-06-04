

import React from "react";

const HisCitiTimeline = () => {
  const events = [
    { title: "EVOLUTION", description: "These cities evolved over a few centuries and retain glimpses of their past.", position: "top" },
    { title: "EVOLUTION", description: "These cities evolved over a few centuries and retain glimpses of their past.", position: "bottom" },
    { title: "EVOLUTION", description: "These cities evolved over a few centuries and retain glimpses of their past.", position: "top" },
    { title: "BUILD HERITAGE", description: "There are heritage structures and monuments within these cities that continue to be major landmarks today.", position: "bottom" },
    { title: "EVOLUTION", description: "These cities evolved over a few centuries and retain glimpses of their past.", position: "top" },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-event ${event.position}`}>
            <div className="event-box">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HisCitiTimeline;

