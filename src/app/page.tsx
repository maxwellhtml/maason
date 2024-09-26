'use client'
import Image from "next/image";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";




export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here (API call, etc.)
    console.log(formData);
  };

  var settings = {
    dots: false,
    arrows:true,
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
      alt:'aplication'
    },
    {
      title: "Technology Advisory",
      description: "Stay ahead of the curve with our expert technology advisory services, leading you through innovation and strategic implementation.",
      list: ['Microsoft', 'AWS', 'SAAS', 'Mobile Solutions', 'Cyber Security'],
      image: '/images/technology-advisory.jpg',
      alt:'aplication'
    },
    {
      title: "Data Engineering",
      description: "Strengthen your data infrastructure with our expert data engineering solutions, enabling efficient processing for actionable insights and strategic decision-making.",
      list: ['Business Consulting', 'Data Analytics Consulting', 'Big Data Solutions'],
      image: '/images/data-engineering.jpg',
      alt:'Data Engineering'
    },
    {
      title: "Managed IT Services",
      description: "Maximize operational efficiency with our Managed IT Services, offering comprehensive support and solutions tailored to your business's unique needs.",
      list: ['Ecommerce Website Development', 'Healthcare App Development', 'Cloud Technologies', 'DevOps Tools & Technologies', 'Internet of Things', 'Block Chain', 'AR/VR'],
      image: '/images/managed-services.jpg',
      alt:'Managed IT Services'
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
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btns btn_primary mx-auto text-center">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </Col>

          </Row>

        </Container>
      </section>
      {/* counter */}
      <div className="container-xl ">
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
      </div>
      {/*  growing business*/}
      <section className="growing-business">
        <Container className="xl">
          <Row>
            <Col xl={9} md={10} className="mx-auto text-center">
              <h2 className="section-title">
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
              <h2 className="section-title mb-0">
              Our Services
              </h2>
              <p>Transformative software development services, uniquely designed to match your specific requirements and powered by AI to deliver intelligent solutions.</p>

            </Col>
            <Col xl={12} md={12} className="mx-auto">
{/* <Stack direction="horizontal" gap={20}> */}
<Slider {...settings}>
{services.map((item, index) => (
  <div className="pb-xl-5 px-xl-5 pt-0">
  <div  className="service-wrapper row  justify-content-between" key={index}>
    <div className="col-xl-5 col-lg-6 col-md-6">
    <div className="service-content">

      <h3>{item.title}</h3>
      <p className="description">{item.description}</p>
      <ul className="gap-lg-3 gap-2 d-flex flex-column pt-md-3 pb-sm-3 pb-5">
        {item.list.map((listing, i) => (
          <li key={i}><FaCircleCheck style={{color:'#0CA55B', width:'14px'}} />          {listing}</li>
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
    </>
  );
}
