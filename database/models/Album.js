module.exports = (sequelize, dataTypes) => {
	let alias= 'Album';
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		nombre: {
			type: dataTypes.STRING(45),

		},
	    duracion: {
			type: dataTypes.INTEGER,

		},
		

		

	}
	const Album = sequelize.define(alias, cols,{tableName:'albumes',timestamps:false});

	
	return Album
};