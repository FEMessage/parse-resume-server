function getPhone(str = '') {
  const reg = /1\d{10}|1\d{2}-\d{4}-\d{4}/
  const matches = str.match(reg)
  const result = matches ? matches[0] : ''

  return result.includes('-') ? result.replace(/-/g, '') : result
}

function getEmail(str) {
  let reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  const matches = str.match(reg)
  return matches ? matches[0] : ''
}

function getName(str) {
  let splitDotArray = str.split('.')
  let filename = splitDotArray[splitDotArray.length - 2]
  let splitDashArray = filename.replace(/\.|\_|\s|】/g, '-').split('-')

  let result = splitDashArray.pop()

  if (/\d{13}/.test(result)) result = splitDashArray.pop()
  if (result.includes('拉勾')) result = splitDashArray.pop()
  if (result.includes('年')) result = splitDashArray.pop()

  return result
}

module.exports = {
  getPhone,
  getEmail,
  getName
}
