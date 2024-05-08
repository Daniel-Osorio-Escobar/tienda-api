import React from 'react'
import { Header } from '../Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { ContainerCard } from '../../ContainerCard/ContainerCard'
export const Home = () => {
  return (
    <>
    <Header/>

    <Main>
      <ContainerCard/>
    </Main>

    </>
  )
}
