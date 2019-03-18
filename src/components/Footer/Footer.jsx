import React, { Component } from "react";

const Footer = () => {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Information
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Feuchers</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Ressources
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Monitoring Grader </a>
                </li>
                <li>
                  <a href="">Video Tutorial</a>
                </li>
                <li>
                  <a href="">Term &amp; Service</a>
                </li>
                <li>
                  <a href="">Zeeko API</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Help</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Sign Up </a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Terms of Services</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Contact Us
              </h6>
              <p className="contact-info mt-4">
                Contact us if need help withanything
              </p>
              <p className="contact-info">+01 123-456-7890</p>
              <div className="mt-5">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab facebook footer-social-icon fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab twitter footer-social-icon fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab google footer-social-icon fa-google" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab apple footer-social-icon fa-apple" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
