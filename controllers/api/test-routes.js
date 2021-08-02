const router = require('express').Router();
const testResponse = {
    test: "this is a test response from test-routes.js"
}
console.log(testResponse)
router.get('/', (req, res) => {
    res.render('testView', {
        testView: "This is a testView.handlebars response from test-routes.js"
    })
});

module.exports = router