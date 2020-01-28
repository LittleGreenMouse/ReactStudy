export default {
    'get /ds/list': function (request, response) {
        response.json({
            data: [1,2,3],
            maxNum: 3
        })
    }
}