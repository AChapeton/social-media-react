import React from 'react'
import CardSmall from './CardSmall'
import './styles/Overview.css'

const cardSmallList = [
    {
        key: 1,
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 3
    },
    {
        key: 2,
        icon: 'images/icon-twitter.svg',
        pageViews: '52',
        growth: 2
    },
    {
        key: 3,
        icon: 'images/icon-instagram.svg',
        pageViews: '5462',
        growth: 2257
    },
    {
        key: 4,
        icon: 'images/icon-youtube.svg',
        pageViews: '117',
        growth: 1375
    }
]

function Overview(){
    return(
        <section className="overview">
        <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">
                {
                    cardSmallList.map(cardSmall => <CardSmall
                        key={cardSmall.key}
                        icon={cardSmall.icon}
                        pageViews={cardSmall.pageViews}
                        growth={cardSmall.growth}
                    />)
                }
                
                {/*
                <div className="card-small">
                    <p class="card-small-views">Likes</p>
                    <p class="card-small-icon">
                        <img src="images/icon-facebook.svg" alt="">
                    </p>
                    <p class="card-small-number">52</p>
                    <p class="card-small-up is-negative">
                        <span>
                            <img src="images/icon-down.svg" alt="">
                            2%
                        </span>
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Likes</p>
                    <p class="card-small-icon">
                        <img src="images/icon-instagram.svg" alt="">
                    </p>
                    <p class="card-small-number">5462</p>
                    <p class="card-small-up">
                        <span>
                            <img src="images/icon-up.svg" alt="">
                            2257%
                        </span>
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Profile Views</p>
                    <p class="card-small-icon">
                        <img src="images/icon-instagram.svg" alt="">
                    </p>
                    <p class="card-small-number">52k</p>
                    <p class="card-small-up">
                        <span>
                            <img src="images/icon-up.svg" alt="">
                            1375%
                        </span>
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Retweets</p>
                    <p class="card-small-icon">
                        <img src="images/icon-twitter.svg" alt="">
                    </p>
                    <p class="card-small-number">117</p>
                    <p class="card-small-up">
                        <span>
                            <img src="images/icon-up.svg" alt="">
                            303%
                        </span>
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Likes</p>
                    <p class="card-small-icon">
                        <img src="images/icon-twitter.svg" alt="">
                    </p>
                    <p class="card-small-number">507</p>
                    <p class="card-small-up">
                        <span>
                            <img src="images/icon-up.svg" alt="">
                            553%
                        </span>
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Likes</p>
                    <p class="card-small-icon">
                        <img src="images/icon-youtube.svg" alt="">
                    </p>
                    <p class="card-small-number">107</p>
                    <p class="card-small-up is-negative">
                        <span>
                            <img src="images/icon-down.svg" alt="">
                            19%
                        </span>
                    </p>
                </div>
                <div class="card-small">
                    <p class="card-small-views">Total Views</p>
                    <p class="card-small-icon">
                        <img src="images/icon-youtube.svg" alt="">
                    </p>
                    <p class="card-small-number">1407</p>
                    <p class="card-small-up is-negative">
                        <span>
                            <img src="images/icon-down.svg" alt="">
                            12%
                        </span>
                    </p>
                </div>
                */}
            </div>
        </div>
    </section>
    )
}

export default Overview