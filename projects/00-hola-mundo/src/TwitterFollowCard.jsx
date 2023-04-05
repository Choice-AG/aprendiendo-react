export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de midudev" />    
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span
            className='tw-follorCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className='tw-follorCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}