"use client"
import React from 'react'
import Footer from '../components/partials/Footer'
import ResourceHire from '../components/ResourceHire'
import TechnologiesWeUse from '../components/technologiesWeuse/TechnologiesWeUse'
import RecentWork from '../components/RecentWork'

const page = () => {
  return (
    <div>
        <RecentWork />
        <TechnologiesWeUse />
        <div className='container-fluid section-color'>
        <ResourceHire />
        </div>
      <Footer />
    </div>
  )
}

export default page
