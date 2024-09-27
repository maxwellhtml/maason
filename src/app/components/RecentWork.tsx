// components/RecentWork.tsx
import Image from 'next/image';
import React from 'react';

const RecentWork: React.FC = () => {
  return (
    <section className="recent-work  pt-0 pt-md-0 pt-lg-0  py-2 py-md-3 py-lg-4 ">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Recent Work</h2>
          <p>Take a look at some of the projects we have worked on.</p>
        </div>
        <div className="row justify-content-center mt-2 mt-md-3 mt-lg-5">
          <div className="col-lg-12">
            <div className="work-display">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="e-book-app">
                    <Image
                      src="/images/recent-work-image.png"
                      alt="E-Book App"
                      width={1200}
                      height={566}
                      className="img-fluid d-none d-sm-block"
                    />
                    <Image
                      src="/images/mobile-recent-image.png"
                      alt="E-Book App"
                      width={575}
                      height={350}
                      className="img-fluid d-sm-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center recent-work-boxes mx-0 mt-5">
          <div className="col-md-4">
            <h5>Beat the Competition</h5>
            <p>
              We craft visually stunning websites that convert your visitors into customers, giving your business a competitive edge.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Boost Online Sales</h5>
            <p>
              We carefully research and plan before creating your website, leading to a large boost in your sales.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Credibility and Trust</h5>
            <p>
              Our website design services will enhance your business's credibility, fostering market trust and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
