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
    type: DataTypes.STRING(255),
  },
  cost: {
    type: DataTypes.FLOAT,
  },
  includingVat: {
    type: DataTypes.BOOLEAN,
  },
  department: {
    type: DataTypes.STRING(255),
  },
  type: {
    type: DataTypes.TEXT,
  },
  completedDate: {
    type: DataTypes.DATEONLY,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
  },
});

ClientJob.sync({ force: false }).then(() => {
  console.log('[Model] [ClientJob] Synced');
});

module.exports = ClientJob;
