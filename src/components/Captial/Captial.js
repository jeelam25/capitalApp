import React, { useState } from 'react'

import './styles.css'

const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]

let initialActiveId = countryAndCapitalsList[0].id

const Captial = () => {
    const [activeCaptialId, setActiveCaptialId] = useState(initialActiveId)

    

    const onChangeCaptial = (event) => {
        setActiveCaptialId(event.target.value)
    }

    const getCountry = (id) => {
        const activeCountryAndCaptial = countryAndCapitalsList.find(
            eachCaptial => eachCaptial.id === id
        )
        return activeCountryAndCaptial.country
    }
    

  return (
    <>
      <div className="app-container">
        <div className='capitals-container'>
            <h1 className='heading'>Coutries And Captials</h1>
            <div className='question-container'>
                <select className='capital-select' onChange = {onChangeCaptial} value={activeCaptialId}>{
                    countryAndCapitalsList.map(eachCaptial =>
                        <option key = {eachCaptial.id} value = {eachCaptial.id} className='option'>{eachCaptial.capitalDisplayText}</option>)
                }</select>
                <p className='question'>is capital of which country?</p>                
            </div>
            <p className='country'>{getCountry(activeCaptialId)}</p>
        </div>
      </div>
    </>
  )
}

export default Captial
