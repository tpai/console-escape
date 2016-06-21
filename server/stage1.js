module.exports = function(app){
    app
        .get('/stage1', function(req, res) {
            res.send({msg:'helloWorld'})
        })
        .get('/stage1/c2VjcmV0', function(req, res){
            res.sendfile('./server/skill.yooo.js')
        })
        .get('/stage1/loginPC/:id/:pass', function(req, res) {
            console.log(req.params)
            if (req.params.id == 'boss' && req.params.pass == '123456') {
                res.send({
                    msg:'Login success!',
                    skillText: 's(itemName, key, value); // Set state of item',
                    reward: {
                        type: 'skill',
                        dataType: 'script',
                        api: '/stage1/c2VjcmV0'
                    },
                    success: true
                })
            }else {
                res.send({msg: "Login failed!", success: false})
            }
        })
}
