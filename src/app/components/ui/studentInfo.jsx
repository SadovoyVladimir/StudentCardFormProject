import React from 'react'

export default function StudentInfo({ name, surname, birthDate, portfolio }) {
  const getAge = (birthDate) => {
    const today = new Date()
    const age = today.getFullYear() - birthDate
    let ageStr = ''
    if (
      age % 10 >= 5 ||
      age % 10 === 0 ||
      (Math.floor(age % 100) > 10 && Math.floor(age % 100) < 20)
    ) {
      ageStr = 'лет'
    } else if (age % 10 === 1) {
      ageStr = 'год'
    } else {
      ageStr = 'года'
    }
    return `(${age} ${ageStr})`
  }

  return (
    <div className='mt-3 mb-4'>
      <div>
        <span className='fw-bold'>Имя: </span>
        {name}
      </div>
      <div>
        <span className='fw-bold'>Фамилия: </span>
        {surname}
      </div>
      <div>
        <span className='fw-bold'>Год рождения: </span>
        {birthDate} {getAge(birthDate)}
      </div>
      <div>
        <span className='fw-bold'>Портфолио: </span>
        <a href={portfolio} target='_blank' rel='noreferrer'>
          {portfolio}
        </a>
      </div>
    </div>
  )
}
