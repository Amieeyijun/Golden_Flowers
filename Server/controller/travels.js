const express = require('express');
const router = express.Router();

router.post("/addTravels", (req, res) => {
    console.log(req.body);
    let travels = [
        req.body.travels.user,
        req.body.travels.title,
        req.body.travels.info,
        req.body.content
    ]
    let sql = 'INSERT INTO travels VALUES (?,?,?,?,100,null)';
    mydb.query(sql, travels, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        res.send("添加成功")
    });
})
router.get("/getTravels", (req, res) => {
    let sql = `
        select * from travels limit 0,6;
        select * from travels limit 6,6;
        select * from travels limit 12,6`;
    mydb.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result)
    });
})
router.get("/getDetail", (req, res) => {
    if (req.query.title) {
        let sql = 'select * from travels where title = ' + `'${req.query.title}'`;
        mydb.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            res.send(result)

        });
        return;
    }
    if (req.query.infoid && req.query.publisher) {
        let sql = `
        select * from travels where tid = ${req.query.infoid};
        select * from travels where publisher = '${req.query.publisher}'`
        mydb.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            res.send(result);

        });
        return;
    }

    if (req.query.keywords) {
        let sql = `Select * from travels where title Like '%${req.query.keywords}%' `;
        mydb.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            res.send(result);

        });
        return;

    }
})



module.exports = router;
