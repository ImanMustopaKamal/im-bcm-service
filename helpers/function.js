const isNull = (value) => {
  if(value == undefined || value == null || value === "" || value === "null") return true

  else return false
}

module.exports = {
  isNull,
}