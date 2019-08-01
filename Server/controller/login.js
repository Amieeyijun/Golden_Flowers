const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    let sql = 'SELECT * FROM user WHERE username = ? LIMIT 1';
    mydb.query(sql, [req.body.name], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ msg: 'err' });
            return;
        }
        // 检查账号是否存在  []  {}  ==>  true
        if (result.length == 0) {
            res.json({ msg: 'name-not-exist' });
            return;
        }
        //检查密码是否正确  用户输入的密码 不等于 数据库里面的密码
        if (req.body.passwd != result[0].passwd) {
            res.json({ msg: 'passwd-err' });
            return;
        }

    });
});
router.post("/Registe", function (req, res) {
	console.log(req.body)
	var sql = "select * from user where 1 ";
	if (req.body.nickname) {
		sql += " AND username= '" + req.body.nickname + "'";
	}
	mydb.query(sql, function (err, results) {
		if (results.length > 0) {
			res.json({
				msg: "username_already_exist"
			})
		} else {
			let newsql = `insert into user(username,password,email,live,phonenumber) values ("${req.body.nickname}","${req.body.password}","${req.body.email}","${req.body.residence.join('/')}","+${req.body.prefix}${req.body.phone}")`;
			console.log(newsql)
			mydb.query(newsql, (err, results) => {
				if (err) {
					console.log(err);
					return;
				} else {
					res.json({
						msg: "reg_success"
					})
				}
			})
		}

	})
});
module.exports = router;