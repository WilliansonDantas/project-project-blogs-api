const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategorySchema = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.STRING,
  },
  {
    timestamps: false, 
    underscored: true, 
    tableName: 'posts_categories'
  });

  PostCategorySchema.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategorySchema,
          foreignKey: 'categoryId',
          otherKey: 'postId'
      });

      models.Category.belongsToMany(models.BlogPost, {
          as: 'blogPosts',
          through: PostCategorySchema,
          foreignKey: 'postId',
          otherKey: 'categoryId'
      });
  }
  return PostCategorySchema;
};

module.exports = PostCategoryModel;

