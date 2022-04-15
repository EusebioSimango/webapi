const HeroRepository = require('./../repositories/heroRepository')
const HeroService = require('./../services/heroService')

const { join } = require('path')
const filename = join(__dirname, '../../database', 'data.json')
console.log(filename)


const generateRepository = () => {
	const heroRepository = new HeroRepository({
		file: filename
	})

	const heroService = new HeroService ({
		heroRepository
	})

	return heroService

}

module.exports = { generateRepository }

generateRepository().find(1).then(console.log)