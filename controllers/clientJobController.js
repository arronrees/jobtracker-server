const { validateUUID } = require('../lib/validation');
const ClientJob = require('../models/ClientJob');

const postNewClientJob = async (req, res) => {
  const { clientId } = req.params;
  const { body } = req;

  // validate id
  if (!validateUUID(clientId)) {
    return res.status(404).json({ success: false, error: 'No client found' });
  }

  const newJob = await ClientJob.create({
    ...body,
    amount: parseFloat(body.amount),
    clientId,
  });

  // check if job created successfully
  if (!newJob) {
    return res.status(400).json({
      success: false,
      error: 'Unable to create client job, please try again',
    });
  }

  res.status(200).json({ success: true });
};

module.exports = {
  postNewClientJob,
};
