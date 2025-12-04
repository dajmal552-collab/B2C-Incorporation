"use client"
import React from 'react'
import { Navbar } from '../navbar/Navbar'
import Footer from '../Footer'

export const DashboardLayout: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <Footer />
        </div>
    )
}
