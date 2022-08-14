const { 
    allProduct,
    newProduct,
    delProduct,
    editProduct
} = require('./model')

module.exports = {
    GET: async (req, res) => {
        try {
            const { id } = req.params
            const user_tests = await allProduct(id)
            res.send(user_tests)
        } catch (err) {
            console.log(err.message)
        }
    },
    POST: async (req, res) => {
        try {
            const {
                img, label, guarantee, started_date, using_date, company_name
            } = req.body
            await newProduct(
                img, label, guarantee, started_date, using_date, company_name
            )
            res.sendStatus(201)
        } catch (err) {
            console.log(err.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const {
                id
            } = req.params
            await delProduct(
                id
            )
            res.sendStatus(200)
        } catch (err) {
            console.log(err.message)
        }
    },
    UPDATE: async (req, res) => {
        try {
            const {
                img, label, guarantee, started_date, using_date, company_name
            } = req.body
            const {
                id
            } = req.params
            await editProduct(
                img, label, guarantee, started_date, using_date, company_name, id
            )
            res.sendStatus(200)
        } catch (err) {
            console.log(err.message)
        }
    }
}