import React from 'react';
import './Content.css'; // Import CSS for styling

function Content() {
  return (
    <>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
        <img src="healthcare 1.png" alt="Main Image" className="img8" />Medico</a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="Content.js">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Health Checkup</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Doctors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Departments</a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn">Appointment</a>
          </li>
        </ul>
      </nav>
      <div className="main-image-container">
        {/* Background Image */}
        <img src="Rectangle.png" alt="Background Image" className="background-image" />

        {/* Foreground Image */}
        <img src="image.png" alt="Main Image" className="main-image" />
        
        {/* Text */}
        <div className="text-sideways">
            <p className=" h1">Your Journey to </p>
            <p className='h1'>Better Health </p>
            <p className='h1'>Starts Here</p> 
        </div>
      </div>
      <button className='btn-1'>
        Discover More
      </button>
      <div className='Text'>
            <h1 className='Text-h1'> Dedicated to provide best treatment. </h1> 
            <br></br>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
        </div>
        <div className="image-container">
           <ul>
            <li>
            <img src="image1.png" className="image1" alt="..." />
            </li>
            <li>
            <img src="image2.png" className="image1" alt="..." />
            </li>
            <li>
            <img src="image1.png" className="image1" alt="..." />
            </li>
            </ul>
        </div>
        <button className='btn-2'>
        Discover More
      </button>
      <button className='btn-3'>
        Discover More
      </button>
      <button className='btn-4'>
        Discover More
      </button>
    </>
  );
}

export default Content;
