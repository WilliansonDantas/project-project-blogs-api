const UserModel = (sequelize, DataTypes) => {
  const UserSchema = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
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
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false, 
    underscored: true, 
    tableName: 'users',
  });

  UserSchema.associate = (models) => {
    UserSchema.hasMany(models.BlogPost, {
    as: 'blog_posts',
    foreignKey: 'userId',
  });
}

  return UserSchema;
};

module.exports = UserModel;
