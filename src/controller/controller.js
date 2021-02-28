const { authService } = require('../service/td/auth/auth')

const controller = {
	testEndpoint: async (req, res) => {
		const authToken = await authService.getBearerToken()

		res.send(authToken)
	}
}

module.exports = controller
