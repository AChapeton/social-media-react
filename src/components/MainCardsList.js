import React from 'react'
import Card from './Card'
import './styles/MainCardsList.css'

const cardListData = [
    {
        id: 1,
        icon: 'images/icon-facebook.svg',
        username: 'AndresChapeton',
        followers: '1987',
        todayFollowers: 12,
        name: 'facebook'
    },
    {
        id: 2,
        icon: 'images/icon-twitter.svg',
        username: 'AndresChapeton',
        followers: '28k',
        todayFollowers: 30,
        name: 'twitter'
    },
    {
        id: 3,
        icon: 'images/icon-instagram.svg',
        username: 'AndresChapeton',
        followers: '6k',
        todayFollowers: 24,
        name: 'instagram',
    },
    {
        id: 4,
        icon: 'images/icon-youtube.svg',
        username: 'AndresChapeton',
        followers: '12k',
        todayFollowers: -50,
        name: 'youtube'
    }
]

function MainCardsList(){
    return(
        <section className="main-cards">
        <div className="wrapper">
            <div className="grid">
                {cardListData.map((card) => 
                    <Card 
                        key={card.id} 
                        icon={card.icon}
                        username={card.username}
                        followers={card.followers}
                        todayFollowers={card.todayFollowers}
                        name={card.name}
                    />)}
                {/* <article className="card twitter">
                    <p className="card-title">
                        <img src="images/icon-twitter.svg" alt=""/>
                        @ajchape
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">28k</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/>
                        12 Today
                    </p>
                </article>
                <article className="card instagram">
                    <p className="card-title">
                        <img src="images/icon-instagram.svg" alt=""/>
                        @ajchape
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">6k</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/>
                        12 Today
                    </p>
                </article>
                <article className="card youtube">
                    <p className="card-title">
                        <img src="images/icon-youtube.svg" alt=""/>
                        @ajchape
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">12k</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/>
                        12 Today
                    </p>
                </article>                 */}
            </div>
        </div>
    </section>
    )
}

export default MainCardsList