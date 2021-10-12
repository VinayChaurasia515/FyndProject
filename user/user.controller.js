const Userservice = require('./user.service')
const AuthService = require('../auth.service')
const Mailservice = require('../mail.service')

exports.register = function (req, res) {
    console.log('data received  :: ', req.body)
    Userservice.addUser(req.body).then(() => {
        AuthService.createToken({ email: req.body.email }, function (error, token) {
            if (error) {
                //remove the user from database and send internal server error
                Userservice.deleteUser()
                res.status(500).send()
                //   res.send("user already exist")
            }
            else {
                console.log('data received to controller')
                //create the url
                console.log("Email             ::: ", req.body.email)
                console.log("req.protocol      ::: ", req.protocol)  // http
                console.log("req.hostname      ::: ", req.hostname)  //localhost
                console.log("req.originalUrl   ::: ", req.originalUrl)// /user/register
                console.log("token             ::: ", token)       // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmE1czFzZWRzMGRycmZkQGdtYWlsLmNvbSIsImlhdCI6MTYzMTQ1NDY2OCwiZXhwIjoxNjMxNDU4MjY4fQ.iruUj4xXAA9jYjpA2_Os8y5nYe85jDsTPWNY5Htwf2c


                var url = req.protocol + "://" + req.hostname + "/user/verify?token=" + token

                var hardcodedurl = "http://localhost:9000/user/verify?token=" + token
                console.log('url   :::  ', hardcodedurl)  // http://localhost:9000/user/verify?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmF5Y2hhdXJhc2lhcm9jazk5OUBnbWFpbC5jb20iLCJpYXQiOjE2MzE0NTYzOTEsImV4cCI6MTYzMTQ1OTk5MX0.xSRJ9yUhaKXNaxaOWoTZmg2yx1VCZffbGUFKPrg1EY4

                Mailservice.sendVerificationMail(req.body.email, hardcodedurl).then(function (result) {
                    res.send({
                        message: ">>>>>>> Please check your mail"
                    })
                }).catch(function () {
                    Userservice.deleteUser()
                    res.status(500).send()
                })
                console.log("mail sended")
            }

        })
    }, function (error) {
        if (error == 'Duplicate') {
            //  res.send("user already exist") 
            res.status(500).send({
                error: " Already User Exists"
            })
        }
        else {
            res.status(500).send()
            console.log("Show 500  Error   :::   ", error)
        }
    })
}

exports.login = function (req, res) {
    console.log('data received for login :: ', req.body)
    Userservice.findUser(req.body).then(function (result) {
        if (result) {
            var payload = {
                email: result.email,
                role: result.role
            }
            AuthService.createToken(payload, function (error, token) {
                // AuthService.findUser({email:req.body.email})
                res.set("authtoken", token)
                res.send({
                    message: "login done"
                })
            })
        }
        else {
            res.send({
                message: "Invalid Credencials"
            })
        }
    }, (error) => {
        console.log("Show 500  Error   :::   ", error)
        res.status(500).send({
            error: "Internal Servers Error"
        })
    })
}

exports.verify = function (req, res) {
    var token = req.query.token
    //retrive email from token
    AuthService.verifyToken(token, function (error, result) {
        if (error) {
            res.status(500).send()
        }
        else {
            Userservice.verifyUser(result.email).then(function () {
                res.send({
                    message: "user verified"
                })
            }), function () {
                res.status(500).send()
            }
        }
    })
    Userservice.verifyUser(token)
}