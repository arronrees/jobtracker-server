const Client = require('../models/Client');
const Address = require('../models/Address');
const { validateUUID } = require('../lib/validation');
const FtpDetail = require('../models/ftpDetail');

const getAllClients = async (req, res) => {
  // find all clients
  const clients = await Client.findAll({});

  res.status(200).json(clients);
};

const getSingleClient = async (req, res) => {
  const { id } = req.params;

  // validate id
  if (!validateUUID(id)) {
    return res.status(404).json({ error: 'No Client Found' });
  }

  // find client
  const client = await Client.findOne({ raw: true, where: { id } });

  // check if client exists
  if (!client) {
    return res.status(404).json({ error: 'No Client Found' });
  }

  // find relevant client details
  const address = await Address.findOne({
    raw: true,
    where: { id: client.address },
  });

  const ftpDetails = await FtpDetail.findAll({
    raw: true,
    where: { clientId: id },
  });

  // client to show to user
  const fullClient = { ...client, address, ftpDetails };

  res.status(200).json(fullClient);
};

const postNewClient = async (req, res) => {
  const { address, client } = req.body;

  const newAddress = await Address.create(address, { raw: true });

  const newClient = await Client.create(
    {
      ...client,
      address: newAddress.id,
    },
    { raw: true }
  );

  // check if client created successfully
  if (!newClient) {
    return res
      .status(400)
      .json({ error: 'Unable to create client, please try again' });
  }

  // client to show to user
  const fullNewClient = { ...newClient, address: newAddress };

  res.status(200).json(fullNewClient);
};

const putUpdateClient = async (req, res) => {
  const { id } = req.params;
  const { address, client } = req.body;

  // validate id
  if (!validateUUID(id)) {
    return res.status(404).json({ error: 'No Client Found' });
  }

  const foundClient = await Client.findOne({ where: { id } });
  const foundAddress = await Address.findOne({
    where: { id: foundClient.address },
  });

  // check if client or address not found
  if (!foundAddress || !foundClient) {
    return res
      .status(400)
      .json({ error: 'Unable to update client, please try again' });
  }

  // update address
  foundAddress.addressLine1 = address.addressLine1;
  foundAddress.addressLine2 = address.addressLine2;
  foundAddress.town = address.town;
  foundAddress.county = address.county;
  foundAddress.postCode = address.postCode;
  foundAddress.country = address.country;
  await foundAddress.save();

  // then update client
  foundClient.name = client.name;
  foundClient.primaryContactNumber = client.primaryContactNumber;
  foundClient.primaryContactEmail = client.primaryContactEmail;
  foundClient.secondaryContactNumber = client.secondaryContactNumber;
  foundClient.secondaryContactEmail = client.secondaryContactEmail;
  foundClient.generalNotes = client.generalNotes;
  await foundClient.save();

  // client to show to user
  const fullClient = { ...foundClient.dataValues, address: foundAddress };

  res.status(200).json(fullClient);
};

const deleteClient = async (req, res) => {
  const { id } = req.params;

  // validate id
  if (!validateUUID(id)) {
    return res.status(404).json({ error: 'No Client Found' });
  }

  // find client
  const client = await Client.findOne({ where: { id } });

  // then find address
  const address = await Address.findOne({ where: { id: client.address } });

  // check if client or address exists
  if (!client || !address) {
    return res
      .status(400)
      .json({ error: 'Unable to delete client, please try again' });
  }

  await client.destroy();
  await address.destroy();

  res.status(200).json({ success: true });
};

module.exports = {
  getAllClients,
  getSingleClient,
  postNewClient,
  putUpdateClient,
  deleteClient,
};
