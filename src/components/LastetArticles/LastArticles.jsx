import './lastarticles.css'
import React from 'react'
import imagecurrenci from './../../assets/images/image-currency.jpg'
import imagerestaurant from './../../assets/images/image-restaurant.jpg'
import imageplane from './../../assets/images/image-plane.jpg'
import imageconfetti from './../../assets/images/image-confetti.jpg'

const LastArticles = () => {
  return (
    <div className='containerarticle'>
        <h1 className='titlecontainer'>Latest Articles</h1>
        <div className='containerarticles'>
            <div className='Article'>
                <img className='ArticleImg' src={imagecurrenci} />
                <div className='articlecontent'>
                    
                    <p className='ArticleSpan'>By Claire Robinson</p>
                    <h2 className='ArticleTitle'>Receive money in any currency with no fees</h2>
                    <p className='ArticleP'>Receive money in any currency with no fees
                    The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …</p>
                </div>
            </div>
            <div className='Article'>
                <img className='ArticleImg' src={imagerestaurant} />
                <div className='articlecontent'>
                    
                    <p className='ArticleSpan'>By Wilson Hutton</p>
                    <h2 className='ArticleTitle'>Treat yourself without worrying about money</h2>
                    <p className='ArticleP'>Treat yourself without worrying about money
                    Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …</p>
                </div>
            </div>
            <div className='Article'>
                <img className='ArticleImg' src={imageplane} />
                <div className='articlecontent'>
                    
                    <p className='ArticleSpan'>By Wilson Hutton</p>
                    <h2 className='ArticleTitle'>Take your Easybank card wherever you go</h2>
                    <p className='ArticleP'>Take your Easybank card wherever you go
                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …</p>
                </div>
            </div>
            <div className='Article'>
                <img className='ArticleImg' src={imageconfetti} />
                <div className='articlecontent'>
                    
                    <p className='ArticleSpan'>By Claire Robinson</p>
                    <h2 className='ArticleTitle'>Our invite-only Beta accounts are now live!</h2>
                    <p className='ArticleP'>Our invite-only Beta accounts are now live!
                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LastArticles