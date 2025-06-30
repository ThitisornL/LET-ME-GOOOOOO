import React from "react";

const About = () => {
  return (
    <div className="page">
      <h1>About the Card List</h1>
      <p>
        The <strong>Vanguard Card List</strong> showcases a curated selection of powerful and
        popular units from the <em>Cardfight!! Vanguard</em> trading card game. Each card entry
        includes:
      </p>
      <ul style={{ marginTop: "20px", lineHeight: "1.6", paddingLeft: "20px" }}>
        <li><strong>Name</strong> – The official title of the unit.</li>
        <li><strong>Description</strong> – A brief summary or opinion about the card.</li>
        <li><strong>Artwork</strong> – A full-size image of the card so you can see the detail and style.</li>
      </ul>
      <p style={{ marginTop: "20px" }}>
        Whether you're a seasoned fighter looking to build your next deck or a newcomer interested in
        the art and strategy, this card list offers a glimpse into the vibrant world of Vanguard. 
        Stay tuned for more additions and updates as new sets are released!
      </p>
    </div>
  );
};

export default About;
