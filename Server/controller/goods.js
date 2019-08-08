const express = require('express');
const router = express.Router();
router.get('/getitems', (req, res) => {
        let sql = `SELECT * FROM goods`
        mydb.query(sql, (err, result) => {
            if (!err) {
                res.send(result)
            }
        })

    })
    // 商品加入购物车
router.get('/addCart', (req, res) => {

    let sql = `SELECT * FROM goods WHERE id = ?`
    mydb.query(sql, req.query.id, (err, result) => {
        console.log(req.query.id)
        if (err) {
            console.log(err)
        }
        res.send(result)
    })

})
module.exports = router