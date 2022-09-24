import React from 'react'
import './whychooseeasybank.css'
import Online from './../../assets/images/icon-online.svg'
import budgeting from './../../assets/images/icon-budgeting.svg'
import onBoarding from './../../assets/images/icon-onboarding.svg'
import OpenApi from './../../assets/images/icon-api.svg'

const WhyChooseEasyBank = () => {
  return (
    <div className='ContainerWhyChoose'>
        <div className='containercontent'>
            
            <h1 className='TitleWhyChoose'>Why choose Easybank?</h1>
            <p className='PWhyChoose'>
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.
            </p>

            <div className='ContainerEasyBank'>
                <div className='ItemEasyBank'>
                    <img className='ItemImg' src={Online} />
                    <h2 className='ItemTitle'>Online Banking</h2>
                    <p className='ItemP'>
                        Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.
                    </p>
                </div>
                <div  className='ItemEasyBank'>
                    <img className='ItemImg' src={budgeting} />
                    <h2 className='ItemTitle'>Simple Budgeting</h2>
                    <p className='ItemP'>
                        See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.
                    </p>
                </div>
                <div  className='ItemEasyBank'>
                <img className='ItemImg' src={onBoarding} />
                    <h2 className='ItemTitle'>Fast Onboarding</h2>
                    <p className='ItemP'>
                        We don’t do branches. Open your account in minutes online and start taking control 
                        of your finances right away.
                    </p>
                </div>
                <div  className='ItemEasyBank'>
                <img className='ItemImg' src={OpenApi} />
                    <h2 className='ItemTitle'>Open API</h2>
                    <p className='ItemP'>
                        Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseEasyBank