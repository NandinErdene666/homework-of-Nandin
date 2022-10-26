import React from "react"
import FirstSection from '../components/firstSection'
import backgroundImage from '../assets/bg.png';
import Image from "next/image";

export default function Home() {
  return (
    <section style={{ width: '100%' }}>
      <FirstSection title="Global - English" />
      <section className="bg-image" >
        <div style={{ paddingTop: 30 }}>
          <FirstSection title="Global - English" />
        </div>
      </section>
    </section>
  )
}
