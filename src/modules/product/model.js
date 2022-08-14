const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_PRODUCT = `
    SELECT
        *
    FROM
        product
`
const NEW_PRODUCT = `
    INSERT INTO product(img, label, guarantee, started_date, using_date, company_name) VALUES ($1, $2, $3, $4, $5, $6)
`

const DELETE_PRODUCT = `
    DELETE FROM product WHERE id = $1
`

const UPDATE_PRODUCT = `
    UPDATE product SET img = $1, label = $2, guarantee = $3, started_date = $4, using_date =$5, company_name = $6 WHERE id = $7
`


const allProduct = (id) => fetchAll(ALL_PRODUCT)
const newProduct = (img, label, guarantee, started_date, using_date, company_name) => fetchAll(NEW_PRODUCT, img, label, guarantee, started_date, using_date, company_name)
const delProduct = (id) => fetchAll(DELETE_PRODUCT, id)
const editProduct = (img, label, guarantee, started_date, using_date, company_name, id) => fetchAll(UPDATE_PRODUCT, img, label, guarantee, started_date, using_date, company_name, id)

module.exports = {
    allProduct,
    newProduct,
    delProduct,
    editProduct
}