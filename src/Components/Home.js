import React from 'react';
import './home.css'; // Import the associated CSS file

function Home() {
  return (
    <div>
      {/* Title */}
      <h1 className="title">Welcome to My Educational Website</h1>
      <center>
      <img src='https://themewagon.com/wp-content/uploads/2019/09/34-education-template-1.jpg'></img>
      </center>
<br>
</br>
<br></br>
      {/* Cards */}
      <div className="card-container">
        <div className="card">
          <h2>Subject 1</h2>
          <p>Description of subject 1
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris dui, tincidunt ut egestas vel, porttitor in justo. Praesent porttitor ipsum at mauris tincidunt malesuada. Cras ex nisl, consectetur quis diam et, semper dignissim ipsum. Sed at aliquet sem. Vivamus at eros eget risus interdum fermentum sit amet eu erat. Nam faucibus ipsum id sem venenatis dignissim vel in justo. Cras congue bibendum augue non posuere. Phasellus ornare diam id ipsum maximus sollicitudin. Cras faucibus fermentum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur augue nulla, in maximus diam vulputate vitae. Phasellus ultricies enim vel enim viverra lacinia. Duis rutrum turpis sed porttitor elementum
         <center> 
         <button class="btn btn-success">Click me</button></center></p>
        </div>

        <div className="card">
          <h2>Subject 2</h2>
          <p>Description of subject 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris dui, tincidunt ut egestas vel, porttitor in justo. Praesent porttitor ipsum at mauris tincidunt malesuada. Cras ex nisl, consectetur quis diam et, semper dignissim ipsum. Sed at aliquet sem. Vivamus at eros eget risus interdum fermentum sit amet eu erat. Nam faucibus ipsum id sem venenatis dignissim vel in justo. Cras congue bibendum augue non posuere. Phasellus ornare diam id ipsum maximus sollicitudin. Cras faucibus fermentum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur augue nulla, in maximus diam vulputate vitae. Phasellus ultricies enim vel enim viverra lacinia. Duis rutrum turpis sed porttitor elementum
            <br></br>
        <center> < button class="btn btn-success">Click me</button> </center></p>
        </div>

        <div className="card">
          <h2>Subject 3</h2>
          <p>Description of subject 3.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris dui, tincidunt ut egestas vel, porttitor in justo. Praesent porttitor ipsum at mauris tincidunt malesuada. Cras ex nisl, consectetur quis diam et, semper dignissim ipsum. Sed at aliquet sem. Vivamus at eros eget risus interdum fermentum sit amet eu erat. Nam faucibus ipsum id sem venenatis dignissim vel in justo. Cras congue bibendum augue non posuere. Phasellus ornare diam id ipsum maximus sollicitudin. Cras faucibus fermentum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur augue nulla, in maximus diam vulputate vitae. Phasellus ultricies enim vel enim viverra lacinia. Duis rutrum turpis sed porttitor elementum
        <center>  < button class="btn btn-success">Click me</button> </center></p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 My Educational Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
