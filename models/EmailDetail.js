const { DataTypes, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../lib/db');

const EmailDetail = db.define('emailDetail', {
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
  domain: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  login: {
    type: DataTypes.TEXT,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

EmailDetail.sync({ force: false }).then(() => {
  console.log('[Model] [EmailDetail] Synced');
});

module.exports = EmailDetail;
