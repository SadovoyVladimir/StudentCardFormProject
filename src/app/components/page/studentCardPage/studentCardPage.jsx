import React from 'react'
import { useHistory } from 'react-router-dom'
import StudentInfo from '../../ui/studentInfo'

export default function StudentCardPage() {
  const info = JSON.parse(localStorage.getItem('studentCardInfo'))
  const history = useHistory()

  const handleClick = (domain) => {
    history.push(`/${domain}`)
  }

  return (
    <>
      <h1>Карточка студента</h1>
      {info ? <StudentInfo {...info} /> : <p>Нет данных</p>}
      <button
        onClick={() => handleClick(info ? 'editCard' : 'createCard')}
        className='btn btn-primary'
      >
        {info ? 'Редактировать' : 'Добавить'}
      </button>
    </>
  )
}
