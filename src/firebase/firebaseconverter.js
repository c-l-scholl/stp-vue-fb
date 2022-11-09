class SongData {
	constructor (artistName, id, trackName, 
		acousticness, danceability, duration, energy, 
		instrumentalness, liveness, loudness, mode, 
		speechiness, tempo, valence, popularity, inFour) {
			this.artistName = artistName
			this.id = id
			this.trackName = trackName
			this.acousticness = acousticness
			this.danceability = danceability
			this.duration = duration
			this.energy = energy
			this.instrumentalness = instrumentalness
			this.liveness = liveness
			this.loudness = loudness
			this.mode = mode
			this.speechiness = speechiness
			this.tempo = tempo
			this.valence = valence
			this.popularity = popularity
			this.inFour = inFour
		}
}

const songDataConverter = {
	toFirestore: (song) => {
		return {
			artist_name: song.artistName,
			track_id: song.id,
			track_name: song.trackName,
			acousticness: song.acousticness,
			danceability: song.danceability,
			duration_ms: song.duration,
			energy: song.energy,
			instrumentalness: song.instrumentalness,
			liveness: song.liveness,
			mode: song.mode,
			speechiness: song.speechiness,
			tempo: song.tempo,
			valence: song.valence,
			popularity: song.popularity,
			timer_signature_4: inFour
		}
	},
	fromFirebase: (snapshot, options) => {
		const data = snapshot.data(options)
		return new SongData(
			data.artist_name,
			data.track_id,			
			data.track_name,
			data.acousticness,
			data.danceability,
			data.duration_ms,
			data.energy,
			data.instrumentalness,
			data.liveness,
			data.mode,
			data.speechiness,
			data.tempo,
			data.valence,
			data.popularity,
			data.timer_signature_4)
	}
}

export default { SongData, songDataConverter }