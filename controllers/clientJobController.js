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

const putUpdateClientJob = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  // validate id
  if (!validateUUID(id)) {
    return res.status(404).json({ success: false, error: 'No job found' });
  }

  // find job
  const job = await ClientJob.findOne({ where: { id } });

  // check exists
  if (!job) {
    return res.status(404).json({ success: false, error: 'No job found' });
  }

  // update details
  job.title = body.title;
  job.status = body.status;
  job.amount = body.amount;
  await job.save();

  res.status(200).json({ success: true, data: job });
};

module.exports = {
  postNewClientJob,
  putUpdateClientJob,
};
