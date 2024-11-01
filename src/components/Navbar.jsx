// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'


export default function Navbar() {
      return (
        <div>
          <section className="header" id="header">
            <nav>
              <a href="in.html"><img src="assets/images/KTIZO studio.png" alt="Logo"/></a>
              <div data-aos="zoom-in" data-aos-duration="1000" className="nav-links" id="navLinks">
                <ul>
                  <li><a href="home.html">HOME</a></li>
                  <li><a href="about.html">ABOUT US</a></li>
                  <li><a href="gallery.html">GALLERY</a></li>
                  <li><a href="contact.html">CONTACT US</a></li>
                  <li><a href="gallery.html">STAFFS</a></li>
                  <li><a href="gallery.html">MORE</a></li>
                </ul>
              </div>
            </nav>

            <div className="text-box">
              <h1 data-aos="zoom-in">Welcome to KTIZO STUDIOS</h1>
              <p data-aos="zoom-in">Ktizo Studios is a specialist music production school and the training ground <br/>for the next generation of music producers and sound engineers.</p>
              <a data-aos="fade-up" data-aos-duration="1000" href="" className="hero-btn">Gallery</a>
            </div>
          </section>

          <div data-aos="zoom-in" data-aos-duration="1000" className="gallery">
            <img src="/images/IMG_7949.jpg" alt="" />
            <img src="/images/IMG_7955.jpg" alt="" />
            <img src="/images/IMG_7962.jpg" alt="" />
          </div>

          <div className="section flex">
            <div className="text basis-1/2" data-aos="fade-up" data-aos-duration="1000">
              <h1>RECORDING STUDIO LONDON</h1>
              <p>
                <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quos vitae non ipsam doloremque animi optio beatae <br/> tempore suscipit atque iusto distinctio voluptatum quo assumenda voluptate ab, blanditiis, consequuntur nobis.
              </p>
              <p>We specialise in music production in London and have a passionate, friendly and highly experienced music production team who are capable of catering to your every audio requirement. With extended experience in recording, production, mixing and mastering, we have the best sound engineers and producers to assist you with your projects in the very best recording studio in London.</p>
              <p>We specialise in music production in London and have a passionate, friendly and highly experienced music production team who are capable of catering to your every audio requirement. With extended experience in recording, production, mixing and mastering, we have the best sound engineers and producers to assist you with your projects in the very best recording studio in London.</p>
            </div>

            <img className="basis-1/2" data-aos="fade-up" data-aos-duration="1000" src="/images/DSC07907-Edit.jpg" alt="" />
          </div>
          {/* ABOUT THE STUDIO */}

          <div className="section">
            <img data-aos="fade-right" data-aos-duration="1000" className="second-img" src="/images/IMG_7955.jpg" alt="" />

            <div data-aos-duration="1000" data-aos="fade-up" className="text-textt">
              <h1 className="h1">RECORDING STUDIO LONDON</h1>
              <p>
                <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quos vitae non ipsam doloremque animi optio beatae <br/> tempore suscipit atque iusto distinctio voluptatum quo assumenda voluptate ab, blanditiis, consequuntur nobis.
              </p>
              <p>We specialise in music production in London and have a passionate, friendly and highly experienced music production team who are capable of catering to your every audio requirement. With extended experience in recording, production, mixing and mastering, we have the best sound engineers and producers to assist you with your projects in the very best recording studio in London.</p>
              <p>We specialise in music production in London and have a passionate, friendly and highly experienced music production team who are capable of catering to your every audio requirement. With extended experience in recording, production, mixing and mastering, we have the best sound engineers and producers to assist you with your projects in the very best recording studio in London.</p>
            </div>
          </div>

          {/* TESTIMONIES */}

          <div data-aos="fade-up" data-aos-duration="1000" className="class">
            <div className="text-circle">
              <h1>I had an incredible experience. The staff have so much to <br/> offer and cover so many different areas of music. </h1>
              <p>Luke Glazewski, Graduate 2019</p>
              {/*<a href="contact.html" className="hero-btnn">CONTACT US</a>*/}
            </div>
          </div>
        </div>
      )
}