import React, { useEffect, useState } from 'react'
import TextField from '../../common/form/textField'
import { validator } from '../../../utils/validator'
import { useHistory } from 'react-router-dom'

export default function EditCardPage() {
  const [data, setData] = useState({
    name: '',
    surname: '',
    birthDate: '',
    portfolio: ''
  })
  const history = useHistory()

  const [errors, setErrors] = useState({})

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('studentCardInfo')))
  }, [])

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    name: {
      isRequired: { message: "Поле 'Имя' обязательно для заполнения" }
    },
    surname: {
      isRequired: { message: "Поле 'Фамилия' обязательно для заполнения" }
    },
    birthDate: {
      isRequired: { message: "Поле 'Год рождения' обязательно для заполнения" },
      isValidYear: { message: "Поле 'Год рождения' не корректно" }
    },
    portfolio: {
      isRequired: { message: "Поле 'Портфолио' обязательно для заполнения" },
      isUrl: { message: "Поле 'Портфолио' должно быть ссылкой" }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return !Object.keys(errors).length
  }

  const isValid = !Object.keys(errors).length

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    localStorage.setItem('studentCardInfo', JSON.stringify(data))
    history.replace('/')
  }

  const handleGoBack = () => {
    history.replace('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Редактировать</h1>
      <TextField
        label='Имя'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label='Фамилия'
        name='surname'
        value={data.surname}
        onChange={handleChange}
        error={errors.surname}
      />
      <TextField
        label='Год рождения'
        name='birthDate'
        type='number'
        value={data.birthDate}
        onChange={handleChange}
        error={errors.birthDate}
      />
      <TextField
        label='Портфолио'
        name='portfolio'
        value={data.portfolio}
        onChange={handleChange}
        error={errors.portfolio}
      />
      <button
        type='button'
        onClick={handleGoBack}
        className='btn btn-secondary'
      >
        Назад
      </button>
      <button disabled={!isValid} className='btn btn-primary'>
        Обновить
      </button>
    </form>
  )
}
