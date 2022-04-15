class Hero {
	constructor({ id, name, age, power }) {
		this.id = Math.floor(Math.random() * 1000) + Date.now()
		this.name = name 
		this.age = age
		this.power = power
	}

	isValid() {
		const propertyNames = Object.getOwnPropertyNames(this)
		const amoungInvalid = propertyNames
			.map(property => (!!this[property]) ? null : `${property} is missing`)
			.filter(item => !!item)

		return {
			valid: amoungInvalid.length === 0,
			error: amoungInvalid
		}
	}
}

module.exports = Hero

