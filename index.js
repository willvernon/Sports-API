const app = require('express')()
const port = 8080

app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt: '👕',
		size: 'large',
	})
})
app.listen(port, () => console.log(`Server is running on port ${port}`))
