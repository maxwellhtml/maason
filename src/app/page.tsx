'use client'
import Image from "next/image";
import { CountUp } from 'countup.js';

import { Col, Container, Row, Stack } from "react-bootstrap";
import Link from "next/link";
import { useState,useRef, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import RecentWork from "./components/RecentWork";
import TechnologiesWeUse from "./components/technologiesWeuse/TechnologiesWeUse";
import ResourceHire from "./components/ResourceHire";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  services?: boolean;
}
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    services: ''
  });

  const validateForm = () => {
    const updatedFormData = { ...formData, phone };
    let formErrors: FormErrors = {};

    if (!updatedFormData.name) formErrors.name = true;
    if (!updatedFormData.email || !/\S+@\S+\.\S+/.test(updatedFormData.email)) {
      formErrors.email = true;
    }
    if (!updatedFormData.phone || updatedFormData.phone.length < 10) {
      formErrors.phone = true;
    }
    if (!updatedFormData.services) formErrors.services = true;

    setError(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!validateForm()) return; // Only proceed if the form is valid

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return; // Only proceed if the form is valid

    setLoading(true);

    // Prepare the updated form data
    const updatedFormData = { ...formData, phone };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      if (response.ok) {
        setFormData({
            name: '',
            email: '',
            phone: '',
            services: ''
        });
        setPhone(''); // Clear the phone input here
    } else {
        // Handle the error response if necessary
    }
    console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Ensure loading is false on completion
    }
  };


  // counter function
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        animateCounters();
        setHasAnimated(true); // Ensure the animation only happens once
      }
    }, { threshold: 0.3 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach((counter) => {
      const endValue = counter.getAttribute('data-value') ?? '0';
      const countUp = new CountUp(counter as HTMLElement, parseInt(endValue));
      countUp.start();
    });
  };


  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LuChevronLeft />,
    nextArrow: <LuChevronRight />,
  };

  // service list
  const services = [
    {
      title: "Application Services",
      description: "Streamline operations, enhance user experience, and optimize performance with our tailored application services for your business needs.",
      list: ['Application Development', 'Application Maintenance & Security', 'Software Product Engineering', 'Enterprise App Integration', 'QA & Testing', 'Frontend Development', 'Backend Development'],
      image: '/images/application.jpg',
      alt: 'aplication'
    },
    {
      title: "Technology Advisory",
      description: "Stay ahead of the curve with our expert technology advisory services, leading you through innovation and strategic implementation.",
      list: ['Microsoft', 'AWS', 'SAAS', 'Mobile Solutions', 'Cyber Security'],
      image: '/images/technology-advisory.jpg',
      alt: 'aplication'
    },
    {
      title: "Data Engineering",
      description: "Strengthen your data infrastructure with our expert data engineering solutions, enabling efficient processing for actionable insights and strategic decision-making.",
      list: ['Business Consulting', 'Data Analytics Consulting', 'Big Data Solutions'],
      image: '/images/data-engineering.jpg',
      alt: 'Data Engineering'
    },
    {
      title: "Managed IT Services",
      description: "Maximize operational efficiency with our Managed IT Services, offering comprehensive support and solutions tailored to your business's unique needs.",
      list: ['Ecommerce Website Development', 'Healthcare App Development', 'Cloud Technologies', 'DevOps Tools & Technologies', 'Internet of Things', 'Block Chain', 'AR/VR'],
      image: '/images/managed-services.jpg',
      alt: 'Managed IT Services'
    },

  ];
  return (
    <>
      <section className="main-banner">
        <Container fluid>
          <Row className="align-items-center gx-md-5 justify-content-between gy-4">
            <Col lg={6}>
              <div className="banner-item">
                <div>
                  <h1 className="fs-2xl">Your Partner for Business Growth!</h1>
                  <p className="fs-md fw-medium">Web Design | Development | Marketing</p>

                </div>  <p className="fs-base">
                  Shelf empowers teams to effortlessly track, manage, reserve, and optimize assets. From office equipment to heavy machinery, gain control of your inventory in minutes.
                </p>
                <Link href="/" className='btns btn_primary_outline '>Start Project</Link>
              </div>
            </Col>
            <Col xl={5} lg={6}>
              <div className="banner-from gray-300-bg">
                <h3 className="mb-4 text-center">Start Growing Your Business With Us</h3>
                <form onSubmit={handleSubmit} className="w-100">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className={`form-control ${error.name ? 'is-invalid' : ''}`}
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {error.name && <div className="invalid-feedback">Name is required</div>}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className={`form-control ${error.email ? 'is-invalid' : ''}`}
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {error.email && <div className="invalid-feedback">Invalid email address</div>}
                  </div>

                  <div className="form-group mb-3">
                    <PhoneInput style={{fontSize:'1rem'}}
                        // country='IN' 
                      defaultCountry="in"
                      className={`form-control align-items-center ${error.phone ? 'is-invalid' : ''}`}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                    {error.phone && <div className="invalid-feedback">Invalid phone number</div>}
                  </div>

                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className={`form-control ${error.services ? 'is-invalid' : ''}`}
                      placeholder="Services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                    />
                    {error.services && <div className="invalid-feedback">Service is required</div>}
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btns btn_primary mx-auto text-center">
                      {loading ? 'Sending' : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </Col>


          </Row>

        </Container>
      </section>
      {/* counter */}
      {/* <div className="container-xl ">
        <div className="stats-container">
          <div className="row text-center align-items-center gy-4">
            <div className="col-md-3 col-6">
              <h2 className="stat-number">16+</h2>
              <p className="stat-desc">Years of Experience</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="stat-number">50+</h2>
              <p className="stat-desc">Completed Projects</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="stat-number">150+</h2>
              <p className="stat-desc">Professionals</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="stat-number">4+</h2>
              <p className="stat-desc">Countries Served</p>
            </div>
          </div>
        </div>
      </div> */}

<div className="container-xl ">
      <div className="stats-container" ref={statsRef}>
        <div className="row text-center align-items-center gy-4">
          <div className="col-md-3 col-6">
            <div className="d-flex justify-content-center align-items-center">
            <h2 className="stat-number" data-value="16">0</h2>
            <div className="stat-sign">+</div>

            </div>
            <p className="stat-desc">Years of Experience</p>

          </div>
          <div className="col-md-3 col-6">
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="stat-number" data-value="50">0</h2>
            <div className="stat-sign">+</div>
            </div>
            <p className="stat-desc">Completed Projects</p>
          </div>
          <div className="col-md-3 col-6">
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="stat-number" data-value="150">0</h2>
            <div className="stat-sign">+</div>
            </div>
            <p className="stat-desc">Professionals</p>
          </div>
          <div className="col-md-3 col-6">
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="stat-number" data-value="4">0</h2>
            <div className="stat-sign">+</div>
            </div>
            <p className="stat-desc">Countries Served</p>
          </div>
        </div>
      </div>
    </div>
      {/*  growing business*/}
      <section className="growing-business">
        <Container className="xl">
          <Row>
            <Col xl={9} md={10} className="mx-auto text-center">
              <h2 className="section-title ">
                Growing Businesses Since 2008
              </h2>
              <p>We offer website design, development and digital marketing services that meet your unique needs. Our eight-year experience helps us to provide high quality time-tested service for our clients. We work closely with our clients to understand their goals and then create custom strategies to achieve their objectives.</p>
              <p>We work hard to create a design that is both visually appealing and easy to use. Our responsive web design offers a superior user experience on any device. Our main goal is to create a world of possibilities for our clients by creating websites that get you noticed by customers.</p>

              <Stack direction="horizontal" gap={0} className="justify-content-center mt-xl-4 mt-4 pt-md-1">
                <Link href="/" className='btns  btn_primary_outline'>Read More</Link>
                <Link href="/" className='btns  btn_primary'>Our Services</Link>
              </Stack>
            </Col>

          </Row>

        </Container>
      </section>

      {/* services */}

      <section className="service pt-0">
        <div className="container-xl">
          <Row className="justify-content-center">
            <Col xl={9} md={10} className="mx-auto text-center">
              <h2 className="section-title mb-lg-3 mb-mb-3">
                Our Services
              </h2>
              <p>Transformative software development services, uniquely designed to match your specific requirements and powered by AI to deliver intelligent solutions.</p>

            </Col>
            <Col xl={12} md={12} className="mx-auto">
              {/* <Stack direction="horizontal" gap={20}> */}
              <Slider {...settings}>
                {services.map((item, index) => (
                  <div className="pb-xl-5 px-xl-5 pt-0">
                    <div className="service-wrapper row  justify-content-between" key={index}>
                      <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="service-content">

                          <h3>{item.title}</h3>
                          <p className="description">{item.description}</p>
                          <ul className="gap-lg-3 gap-2 d-flex flex-column pt-md-3 pb-sm-3 pb-5">
                            {item.list.map((listing, i) => (
                              <li key={i}><FaCircleCheck style={{ color: '#0CA55B', width: '14px' }} />          {listing}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="service-img">

                          <Image src={item.image} alt={item.alt} width={408} height={388} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* </Stack> */}

            </Col>
          </Row>

        </div>
      </section>


      <RecentWork />
      <TechnologiesWeUse />
      <ResourceHire />
    </>
  );
}
