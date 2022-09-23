const UserModel = (sequelize, DataTypes) => {
  const UserSchema = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    display_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false, 
    underscored: true, 
    tableName: 'Users'
  });

  return UserSchema;
};

module.exports = UserModel;
