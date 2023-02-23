import { DataTypes } from "sequelize";

const Post = (db) => {
	return db.define("post", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		type: DataTypes.STRING,
		age: DataTypes.TEXT,
        describedAs: DataTypes.STRING,
        userID: DataTypes.INTEGER,
	});
};

export default Post;
