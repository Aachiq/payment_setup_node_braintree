const braintree = require('braintree');

require('dotenv').config()

const braintreeConfig = {
 environment : braintree.Environment.Sandbox,
 merchandId : process.env.BRAINTREE_MERCHAND_ID,
 publickey : process.env.BRAINTREE_PUBLIC_KEY,
 privatekey : process.env.BRAINTREE_PRIVATE_KEY,
}

const gateway = new braintree.BraintreeGateway(braintreeConfig)

const generateToken = (req, res) => {
    gateway.clientToken.generate({}, (err, responseGenerateToken) => {
        if(err){
            res.status(500).json({error : err })
        }
        res.json({ token : responseGenerateToken.clientToken})

    })
}

module.exports = {
    generateToken
}