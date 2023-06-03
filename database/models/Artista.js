module.exports = (sequelize, dataTypes) => {
	let alias= 'Artista';
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		nombre: {
			type: dataTypes.STRING(45),

		},
	    apellido: {
			type: dataTypes.STRING(45),

		},
		

		

	}
	const Artista = sequelize.define(alias, cols,{tableName:'artistas',timestamps:false});

	
	return Artista
};