const { JoiClientObject, JoiAddressObject } = require('../lib/joiModelSchemas');

const validateClientAndAddressObject = async (req, res, next) => {
  try {
    const validC = await JoiClientObject.validateAsync(req.body.client);
    const validA = await JoiAddressObject.validateAsync(req.body.address);

    next();
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = { validateClientAndAddressObject };
