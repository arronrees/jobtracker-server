const { DataTypes, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../lib/db');

const ClientJob = db.define('clientJob', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  clientId: {
    type: UUID,
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.TEXT,
  },
  amount: {
    type: DataTypes.STRING(255),
  },
});

ClientJob.sync({ force: false }).then(() => {
  console.log('[Model] [ClientJob] Synced');
});

module.exports = ClientJob;
