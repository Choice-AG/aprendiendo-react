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
    name: 'Álvaro "Near"',
    isFollowing: false
  },
  {
    userName: 'cynox336',
    name: 'Cynox',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
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
