const Joi = require('joi');

const JoiClientObject = Joi.object({
  name: Joi.string().required(),
  primaryContactName: Joi.string().required(),
  primaryContactNumber: Joi.string().required(),
  primaryContactEmail: Joi.string().required(),
  secondaryContactNumber: Joi.string().optional(),
  secondaryContactEmail: Joi.string().optional(),
  generalNotes: Joi.string().optional(),
}).required();

const JoiAddressObject = Joi.object({
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string().optional(),
  town: Joi.string().required(),
  county: Joi.string().optional(),
  postCode: Joi.string().required(),
  country: Joi.string().required(),
}).required();

module.exports = {
  JoiClientObject,
  JoiAddressObject,
};
