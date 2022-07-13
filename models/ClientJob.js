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
    type: DataTypes.ENUM,
    values: ['Quote', 'In Progress', 'Complete'],
  },
  cost: {
    type: DataTypes.FLOAT,
  },
  includingVat: {
    type: DataTypes.BOOLEAN,
  },
  department: {
    type: DataTypes.ENUM,
    values: ['Web', 'Print', 'Other'],
  },
  type: {
    type: DataTypes.TEXT,
  },
});

ClientJob.sync({ force: false }).then(() => {
  console.log('[Model] [ClientJob] Synced');
});

module.exports = ClientJob;
