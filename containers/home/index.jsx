import BasındaBiz from '@/components/BasındaBiz'
import Etkinlikler from '@/components/Etkinlikler'
import Hakkında from '@/components/Hakkında'
import KriptoAlımSatım from '@/components/KriptoAlımSatım'
import KriptoPiyasalarındaBugün from '@/components/KriptoPiyasalarındaBugün'
import KriptoYasamTarzi from '@/components/KriptoYasamTarzi'
import Topluluk from '@/components/KriptoYasamTarzi/topluluk'
import NasılBaslanır from '@/components/NasılBaslanır'
import Section1 from '@/components/section1'
import Section2 from '@/components/section2'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Section1/>
      <KriptoPiyasalarındaBugün/>
      <Etkinlikler/>
      <NasılBaslanır/>
      <KriptoYasamTarzi/>
      <Topluluk/>
      <BasındaBiz/>
      <KriptoAlımSatım/>
      <Hakkında/>
      <Section2/>
    </div>
  )
}

export default Home