module.exports = (sequelize, dataTypes) => {
	let alias= 'Genero';
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		name: {
			type: dataTypes.STRING(45),

		},
	    

		

	}
	const Genero = sequelize.define(alias, cols,{tableName:'generos',timestamps:false});

	
	return Genero
};