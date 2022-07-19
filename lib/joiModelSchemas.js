const Joi = require('joi');

const JoiClientObject = Joi.object({
  name: Joi.string()
    .required()
    .error(new Error('Client name is required and must be a string')),
  primaryContactName: Joi.string()
    .required()
    .error(new Error('Primary contact name is required and must be a string')),
  primaryContactNumber: Joi.string()
    .required()
    .error(
      new Error('Primary contact number is required and must be a string')
    ),
  primaryContactEmail: Joi.string()
    .required()
    .error(new Error('Primary contact email is required and must be a string')),
  secondaryContactNumber: Joi.string()
    .allow(null)
    .error(new Error('Secondary contact number must be a string or null')),
  secondaryContactEmail: Joi.string()
    .allow(null)
    .error(new Error('Secondary contact email must be a string or null')),
  generalNotes: Joi.string()
    .allow(null)
    .error(new Error('General notes must be a string or null')),
}).required();

const JoiAddressObject = Joi.object({
  addressLine1: Joi.string()
    .required()
    .error(new Error('Address line 1 is required and must be a string')),
  addressLine2: Joi.string()
    .allow(null)
    .error(new Error('Address line 2 must be a string or null')),
  town: Joi.string()
    .required()
    .error(new Error('Town is required and must be a string')),
  county: Joi.string()
    .allow(null)
    .error(new Error('County must be a string or null')),
  postCode: Joi.string()
    .required()
    .error(new Error('Postcode is required and must be a string')),
  country: Joi.string()
    .required()
    .error(new Error('Country is required and must be a string')),
}).required();

const JoiFtpDetailObject = Joi.object({
  url: Joi.string()
    .required()
    .error(new Error('URL is required and must be a string')),
  ftpAddress: Joi.string()
    .required()
    .error(new Error('FTP Address is required and must be a string')),
  hostDirectory: Joi.string()
    .required()
    .error(new Error('Host directory is required and must be a string')),
  login: Joi.string()
    .required()
    .error(new Error('Login is required and must be a string')),
  password: Joi.string()
    .required()
    .error(new Error('Password is required and must be a string')),
}).required();

const JoiDatabaseDetailObject = Joi.object({
  url: Joi.string()
    .required()
    .error(new Error('URL is required and must be a string')),
  databaseName: Joi.string()
    .required()
    .error(new Error('Database name is required and must be a string')),
  username: Joi.string()
    .required()
    .error(new Error('Username is required and must be a string')),
  password: Joi.string()
    .required()
    .error(new Error('Password is required and must be a string')),
}).required();

const JoiCmsDetailObject = Joi.object({
  url: Joi.string()
    .required()
    .error(new Error('URL is required and must be a string')),
  email: Joi.string()
    .required()
    .error(new Error('Email is required and must be a string')),
  username: Joi.string()
    .allow(null)
    .error(new Error('Username must be a string or null')),
  password: Joi.string()
    .required()
    .error(new Error('Password is required and must be a string')),
}).required();

const JoiEmailDetailObject = Joi.object({
  domain: Joi.string()
    .required()
    .error(new Error('Domain is required and must be a string')),
  email: Joi.string()
    .required()
    .error(new Error('Email is required and must be a string')),
  password: Joi.string()
    .required()
    .error(new Error('Password is required and must be a string')),
}).required();

const JoiOtherAccountDetailObject = Joi.object({
  name: Joi.string()
    .required()
    .error(new Error('Name is required and must be a string')),
  username: Joi.string()
    .required()
    .error(new Error('Username is required and must be a string')),
  email: Joi.string()
    .allow(null)
    .error(new Error('Email must be string or null')),
  password: Joi.string()
    .required()
    .error(new Error('Password is required and must be a string')),
  notes: Joi.string()
    .allow(null)
    .error(new Error('Notes must be a string or null')),
}).required();

module.exports = {
  JoiClientObject,
  JoiAddressObject,
  JoiFtpDetailObject,
  JoiDatabaseDetailObject,
  JoiCmsDetailObject,
  JoiEmailDetailObject,
  JoiOtherAccountDetailObject,
};
