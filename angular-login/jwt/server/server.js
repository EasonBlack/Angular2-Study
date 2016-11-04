var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors')


var port = 3000;
app.set('superSecret', 'helloworld');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
app.listen(port, function () {
    console.log('connect successful');
});

var apiRoutes = express.Router();

apiRoutes.post('/authenticate', function (req, res) {
    if (req.body.name != 'eason') {
        res.json({success: false, message: 'Authentication failed. User not found.'});
        return;
    }
    if (req.body.password != 'admin') {
        res.json({success: false, message: 'Authentication failed. Wrong password.'});
        return;
    }

    let user = {
        name: req.body.name,
        password: req.body.password
    }

    var token = jwt.sign(user, app.get('superSecret'), {
        expiresIn: 1440 // expires in 24 hours
    });
    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
    });
});

// route middleware to verify a token
apiRoutes.use(function (req, res, next) {
    var token = req.body['id_token'] || req.query['id_token'] || req.headers['authorization'];
    token = token.split(' ')[1];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

apiRoutes.get('/message', function (req, res) {
    res.json({
        success: true,
        data: 'xxxxxxxxxxxxxxxxxx'
    });
})


app.use('/api', apiRoutes);
