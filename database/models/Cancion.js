module.exports = (sequelize, dataTypes) => {
	let alias= 'Cancion';
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		titulo: {
			type: dataTypes.STRING(45),

		},
		duracion: {
			type: dataTypes.INTEGER,

		},
		created_at: {
			type: dataTypes.STRING(45),

		},
		updated_at: {
			type: dataTypes.STRING(45),
		},
		genero_id: {
			type: dataTypes.INTEGER,

		},

		album_id: {
			type: dataTypes.INTEGER,

		},
		artista_id: {
			type: dataTypes.INTEGER,
		},

		

	}
	const Cancion = sequelize.define(alias, cols, {tableName:'canciones', timestamps:false});

	Cancion.associate = function (models) {
		
		Cancion.belongsTo(models.Album, {
			as: "album",
			foreignKey: 'album_id',
		})
		Cancion.belongsTo(models.Artista, {
			as: "artista",
			foreignKey: 'artista_id',
		})
		Cancion.belongsTo(models.Genero, {
			as: "genero",
			foreignKey: 'genero_id',
		})

	}

	return Cancion
};