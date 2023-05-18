import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'choiice_',
    name: 'Goi "Choice"',
    isFollowing: true
  },
  {
    userName: 'AlvaroNear',
    name: 'Alvaro "Near"',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Duran',
    isFollowing: true
  },
  {
    userName: 'Cynox336',
    name: 'Cynox',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}