import React from 'react';
import './SuccessStories.css';
import personOne from '../Images/Illustrations/person_1.jpg.webp';
import $ from 'jquery';

function SuccessStories() {

  


  return (
    <section className="achievements">
    <div className="achievements-wrapper container-fluid">
      <div className="row">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <h4 className="mb-5 text-center">Successful Stories</h4>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel owl-two owl-theme">
                <div className="item">
                  <div className="row">
                    <div className="col-12 col-md-6 p-0">
                      <div>
                        <img
                          className="achi-img"
                          src={personOne}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 p-0">
                      <div className="achi-text d-flex flex-column justify-content-center p-md-3 p-lg-5">
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odit fuga omnis iste, sunt porro atque at
                          assumenda aut eaque harum, sequi optio amet minima
                          itaque modi esse, dicta praesentium debitis? Lorem ipsum
                          dolor sit amet consectetur adipisicing elit. Iusto
                          fugiat voluptate nulla cupiditate, placeat eveniet
                          molestiae deleniti officiis earum quo molestias beatae,
                          non ullam ipsam quaerat maxime architecto maiores a.
                        </p>
                        <h6 className="mt-5 mb-3">Full name</h6>
                        <p>designation</p>
                      </div>
                    </div>
                  </div>
                </div>


                
                <div className="item">
                  <div className="row">
                    <div className="col-12 col-md-6 p-0">
                      <div>
                        <img
                          className="achi-img"
                          src={personOne}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 p-0">
                      <div className="achi-text d-flex flex-column justify-content-center p-md-3 p-lg-5">
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odit fuga omnis iste, sunt porro atque at
                          assumenda aut eaque harum, sequi optio amet minima
                          itaque modi esse, dicta praesentium debitis? Lorem ipsum
                          dolor sit amet consectetur adipisicing elit. Iusto
                          fugiat voluptate nulla cupiditate, placeat eveniet
                          molestiae deleniti officiis earum quo molestias beatae,
                          non ullam ipsam quaerat maxime architecto maiores a.
                        </p>
                        <h6 className="mt-5 mb-3">Full name</h6>
                        <p>designation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-12 col-md-6 p-0">
                      <div>
                        <img
                          className="achi-img"
                          src={personOne}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 p-0">
                      <div className="achi-text d-flex flex-column justify-content-center p-md-3 p-lg-5">
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odit fuga omnis iste, sunt porro atque at
                          assumenda aut eaque harum, sequi optio amet minima
                          itaque modi esse, dicta praesentium debitis? Lorem ipsum
                          dolor sit amet consectetur adipisicing elit. Iusto
                          fugiat voluptate nulla cupiditate, placeat eveniet
                          molestiae deleniti officiis earum quo molestias beatae,
                          non ullam ipsam quaerat maxime architecto maiores a.
                        </p>
                        <h6 className="mt-5 mb-3">Full name</h6>
                        <p>designation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default SuccessStories
