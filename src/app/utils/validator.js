export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired': {
        if (typeof data === 'boolean') {
          statusValidate = !data
        } else {
          statusValidate = data.trim() === ''
        }
        break
      }
      case 'isUrl': {
        const urlRegExp = /^(https:\/\/)[a-zA-Z0-9]+\.[a-zA-Z]{2,5}/g
        statusValidate = !urlRegExp.test(data)
        break
      }
      case 'isValidYear': {
        const today = new Date()
        const year = today.getFullYear()
        statusValidate = data < 1900 || data > year
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
