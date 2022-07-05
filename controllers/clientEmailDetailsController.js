const { validateUUID } = require('../lib/validation');
const EmailDetail = require('../models/EmailDetail');

const postNewClientEmailDetails = async (req, res) => {
  const { clientId } = req.params;
  const { body } = req;

  // validate id
  if (!validateUUID(clientId)) {
    return res.status(202).json({ error: 'No client found' });
  }

  // create new details
  const newEmail = await EmailDetail.create({ ...body, clientId });

  if (!newEmail) {
    return res
      .status(400)
      .json({ error: 'Unable to create email details, please try again' });
  }

  res.status(200).json(newEmail);
};

const putUpdateClientEmailDetails = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  // validate id
  if (!validateUUID(id)) {
    return res.status(404).json({ error: 'No email details found' });
  }

  // find current details
  const emailDetail = await EmailDetail.findOne({ where: { id } });

  // check if exists
  if (!emailDetail) {
    return res.status(404).json({ error: 'No email details found' });
  }

  // update details
  emailDetail.domain = body.domain;
  emailDetail.email = body.email;
  emailDetail.password = body.password;
  await emailDetail.save();

  res.status(200).json(emailDetail);
};

const deleteClientEmailDetails = async (req, res) => {
  const { id } = req.params;

  // validate id
  if (!validateUUID(id)) {
    return res.status(404).json({ error: 'No email details found' });
  }

  const emailDetail = await EmailDetail.findOne({ where: { id } });

  // check if exists
  if (!emailDetail) {
    return res.status(404).json({ error: 'No email details found' });
  }

  // delete detail
  await emailDetail.destroy();

  res.status(200).json({ success: true });
};

module.exports = {
  postNewClientEmailDetails,
  putUpdateClientEmailDetails,
  deleteClientEmailDetails,
};
