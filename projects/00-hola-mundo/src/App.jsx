import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return (
    <>
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán"/>
      <TwitterFollowCard userName="choiice_" name="Goi 'Choice'"/>
      <TwitterFollowCard userName="elonmusk" name="Elon Musk'"/>
    </>
  )
}