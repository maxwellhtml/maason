"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
const TechnologiesWeUse = () => {
  const technologyTab = [
    { id: 'Programming', title: 'Programming Languages' },
    { id: 'Frameworks', title: 'Frameworks and Libraries' },
    { id: 'CloudPlatforms', title: 'Cloud Platforms' },
    { id: 'Database', title: 'Database Technologies' },
    { id: 'DevOpsTools', title: 'DevOps Tools' },
    { id: 'MobileDevelopment', title: 'Mobile Development' },
    { id: 'FrontendTechnologies', title: 'Frontend Technologies' },
    { id: 'BackendTechnologies', title: 'Backend Technologies' },
    { id: 'AIML', title: 'AI and ML' },
    { id: 'BlockchainPlatforms', title: 'Blockchain Platforms' },
  ];

  const technologyTabContent = [
    {
      id: 'Programming',
      imageUrl: '/images/technologies/java.png',
      alt: 'java',
      title: 'Java',
      link: {
        url: '/hire-java-developers',
      },
    },
    {
      id: 'Programming',
      imageUrl: '/images/technologies/python.png',
      alt: 'Python',
      title: 'Python',
      link: {
        url: '/python-web-development',
      },
    },
    {
      id: 'Programming',
      imageUrl: '/images/technologies/javascript.png',
      alt: 'Javascript',
      title: 'Javascript',
    },
    {
      id: 'Programming',
      imageUrl: '/images/technologies/c-shap.png',
      alt: 'C#',
      title: 'C#',
    },
    {
      id: 'Frameworks',
      imageUrl: '/images/technologies/react.png',
      alt: 'react',
      title: 'React',
      link: {
        url: '/hire-reactjs-developers',
      },
    },
    {
      id: 'Frameworks',
      imageUrl: '/images/technologies/angular.png',
      alt: 'Angular',
      title: 'Angular',
      link: {
        url: '/hire-angularjs-developers',
      },
    },
    {
      id: 'Frameworks',
      imageUrl: '/images/technologies/spring-boot.png',
      alt: 'Spring Boot',
      title: 'Spring Boot',
    },
    {
      id: 'Frameworks',
      imageUrl: '/images/technologies/django.png',
      alt: 'Django',
      title: 'Django',
      link: {
        url: '/hire-django-developers',
      },
    },
    {
      id: 'Frameworks',
      imageUrl: '/images/technologies/tensorflow.png',
      alt: 'TensorFlow',
      title: 'TensorFlow',
    },
    {
      id: 'CloudPlatforms',
      imageUrl: '/images/technologies/aws.png',
      alt: 'aws',
      title: 'Amazon Web Services (AWS)',
    },
    {
      id: 'CloudPlatforms',
      imageUrl: '/images/technologies/microsoft-azure.png',
      alt: 'Microsoft Azure',
      title: 'Microsoft Azure',
    },
    {
      id: 'CloudPlatforms',
      imageUrl: '/images/technologies/gcp.png',
      alt: 'Google Cloud Platform (GCP)',
      title: 'Google Cloud Platform (GCP)',
    },
    {
      id: 'Database',
      imageUrl: '/images/technologies/mysql.png',
      alt: 'MySQL',
      title: 'MySQL',
    },

    {
      id: 'Database',
      imageUrl: '/images/technologies/postgreSQL.png',
      alt: 'PostgreSQL',
      title: 'PostgreSQL',
    },
    {
      id: 'Database',
      imageUrl: '/images/technologies/Mongodb.png',
      alt: 'MongoDB',
      title: 'MongoDB',
      link: {
        url: '/mongodb-development-company',
      },
    },
    {
      id: 'Database',
      imageUrl: '/images/technologies/redis.png',
      alt: 'redis',
      title: 'Redis',
    },

    {
      id: 'DevOpsTools',
      imageUrl: '/images/technologies/docker.png',
      alt: 'Docker',
      title: 'Docker',
      link: {
        url: '/docker-golang-development',
      },
    },
    {
      id: 'DevOpsTools',
      imageUrl: '/images/technologies/kubernetes.png',
      alt: 'Kubernetes',
      title: 'Kubernetes',
    },
    {
      id: 'DevOpsTools',
      imageUrl: '/images/technologies/jenkins.png',
      alt: 'Jenkins',
      title: 'Jenkins',
    },
    {
      id: 'DevOpsTools',
      imageUrl: '/images/technologies/gitlab-ci-cd.png',
      alt: 'GitLab CI/CD',
      title: 'GitLab CI/CD',
    },
    {
      id: 'MobileDevelopment',
      imageUrl: '/images/technologies/android.png',
      alt: 'Android',
      title: 'Android',
      link: {
        url: '/hire-android-app-developers',
      },
    },
    {
      id: 'MobileDevelopment',
      imageUrl: '/images/technologies/ios.png',
      alt: 'iOS',
      title: 'iOS',
      link: {
        url: '/hire-iphone-app-developers',
      },
    },
    {
      id: 'MobileDevelopment',
      imageUrl: '/images/technologies/react-native.png',
      alt: 'React Native',
      title: 'React Native',
      link: {
        url: '/hire-react-native-developers',
      },
    },
    {
      id: 'MobileDevelopment',
      imageUrl: '/images/technologies/flutter.png',
      alt: 'Flutter',
      title: 'Flutter',
      link: {
        url: '/hire-flutter-developers',
      },
    },
    {
      id: 'FrontendTechnologies',
      imageUrl: '/images/technologies/html.png',
      alt: 'HTML/CSS',
      title: 'HTML/CSS',
    },
    {
      id: 'FrontendTechnologies',
      imageUrl: '/images/technologies/bootstrap.png',
      alt: 'Bootstrap',
      title: 'Bootstrap',
    },
    {
      id: 'FrontendTechnologies',
      imageUrl: '/images/technologies/vue-js.png',
      alt: 'Vue.js',
      title: 'Vue.js',
      link: {
        url: '/hire-vuejs-developers',
      },
    },
    {
      id: 'BackendTechnologies',
      imageUrl: '/images/technologies/node-js.png',
      alt: 'Node.js',
      title: 'Node.js',
      link: {
        url: '/hire-nodejs-developers',
      },
    },
    {
      id: 'BackendTechnologies',
      imageUrl: '/images/technologies/asp-net.png',
      alt: 'ASP.NET',
      title: 'ASP.NET',
    },
    {
      id: 'BackendTechnologies',
      imageUrl: '/images/technologies/flask.png',
      alt: 'Flask',
      title: 'Flask',
    },
    {
      id: 'BackendTechnologies',
      imageUrl: '/images/technologies/express-js.png',
      alt: 'Express.js',
      title: 'Express.js',
    },
    {
      id: 'AIML',
      imageUrl: '/images/technologies/tensorflow.png',
      alt: 'TensorFlow',
      title: 'TensorFlow',
    },
    {
      id: 'AIML',
      imageUrl: '/images/technologies/Py-torch.png',
      alt: 'Py-torch',
      title: 'PyTorch',
    },
    {
      id: 'AIML',
      imageUrl: '/images/technologies/scikit-learn.png',
      alt: 'scikit-learn',
      title: 'Scikit-learn',
    },
    {
      id: 'BlockchainPlatforms',
      imageUrl: '/images/technologies/ethereum.png',
      alt: 'Ethereum',
      title: 'Ethereum',
      link: {
        url: '/ethereum-dapp-development-company',
      },
    },
    {
      id: 'BlockchainPlatforms',
      imageUrl: '/images/technologies/hyperledger-fabric.png',
      alt: 'hyperledger-fabric',
      title: 'Hyperledger Fabric',
    },
  ];

  const [activeTab, setActiveTab] = useState(technologyTab[0].id);
  return (
    <section className='technologies-use light-blue-bg py-100 navbordertab slick-nav-none py-2 py-md-3 py-lg-5'>
      <div className='container'>
        <div className='row'>
          <h2 className='sec-title'>Technologies and Platforms We Use</h2>
          <div className='col-12'>
            <div className=' technologies-use-ul'>
              {/* <ul className="nav nav-tabs" id="technologies-tab" role="tablist"> */}
              <ul className='technology-ul'>
                  {technologyTab.map((tab) => (
                    <li className='nav-item' role='presentation' key={tab.id}>
                      <h3
                        className={`mb-0 nav-link ${
                          activeTab === tab.id ? 'active' : ''
                        }`}
                        id={`${tab.id}-tab`}
                        onClick={() => setActiveTab(tab.id)}
                        role={tab.title}
                        aria-controls={tab.id}
                        aria-selected={activeTab === tab.id}
                      >
                        {tab.title}
                      </h3>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className='col-12'>
            <div className='tab-content' id='technologies-tabContent'>
              {technologyTab.map((tab) => (
                <div
                  className={`tab-pane fade ${
                    activeTab === tab.id ? 'show active' : ''
                  }`}
                  id={tab.id}
                  role='tabpanel'
                  aria-labelledby={`${tab.id}-tab`}
                  key={tab.id}
                >
                  <ul>
                    {technologyTabContent
                      .filter((content) => content.id === tab.id)
                      .map((content) => (
                        <li>
                          {content.link ? (
                            <Link href={content.link.url} target='_blank'>
                              {' '}
                              <Image
                                width={120}
                                height={120}
                                priority={false}
                                src={content.imageUrl}
                                alt={content.title}
                              />
                              <h4>{content.title}</h4>
                            </Link>
                          ) : (
                            <>
                              {' '}
                              <Image
                                width={120}
                                height={120}
                                priority={false}
                                src={content.imageUrl}
                                alt={content.alt}
                              />
                              <h4>{content.title}</h4>
                            </>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesWeUse;
