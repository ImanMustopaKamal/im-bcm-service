const moment = require('moment');

const successWithDataCount = (res, dataCount, data, message, code) => {
  res.status(200).send({
    meta: {
      code: code || 200,
      message,
      data_count : dataCount,
      response_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    data,
  });
}

const success = (res, data, message, code) => {
  res.status(200).send({
    meta: {
      code: code || 200,
      message,
      response_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    data,
  });
}

const error = (res, data = null, message, code) => {
  res.status(200).send({
    meta: {
      code,
      message,
      response_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    data,
  });
}

const forbidden = (res, data = null, message, code) => {
  res.status(200).send({
    meta: {
      code,
      message,
      response_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    data,
  });
}

const notFound = (res, data = null, message, code) => {
  res.status(200).send({
    meta: {
      code,
      message,
      response_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    data,
  });
}

const badRequest = (res, data = null, message, code) => {
  res.status(200).send({
    meta: {
      code,
      message,
      response_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    data,
  });
}

module.exports = {
  success,
  error,
  forbidden,
  notFound,
  badRequest,
  successWithDataCount
};