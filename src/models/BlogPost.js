const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPostSchema = sequelize.define("BlogPost", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false, 
      underscored: true, 
      tableName: 'blog_posts'
    });

    BlogPostSchema.associate = (models) => {
        BlogPostSchema.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'userId',
        });
    }
  
    return BlogPostSchema;
  };
  
  module.exports = BlogPostModel;
  
  