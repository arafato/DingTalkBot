const Parser = require('rss-parser'),
    parser = new Parser();

const dingmessage = {
    "msgtype": "text",
    "text": {
        "content": "There seems to be an error fetching the latest Alizila news."
    },
    "createAt": 1487561654123,
    "conversationType": 2,
    "conversationId": "12345",
    "conversationTitle": "钉钉群",
    "senderId": "dingtalk1235",
    "senderNick": "星星",
    "senderStaffId": "075263",
    "isAdmin": false,
    "context": "用户自定义上下文",
    "chatbotCorpId": "test",
    "chatbotUserId": "XXX"
};

const accessToken = process.env['ACCESS_TOKEN'];

module.exports.handler = function (event, context, callback) {

}