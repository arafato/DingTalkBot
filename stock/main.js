const axios = require('axios');

const dingmessage = {
    "msgtype": "text",
    "text": {
        "content": "There seems to be an error fetching the latest stock information."
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
    axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=baba&types=quote&range=1m&last=5')
        .then((stockRes) => {
            const quote = stockRes.data.BABA.quote;
            let msg = '*** Alibaba Stock Update ***\n';
            msg += 'Yesterdays closing price: USD ' + quote.close + ' (' + quote.changePercent * 100 + '%)\n';
            if (quote.change <= 0) {
                msg += "Work harder, smarter and faster!!";
            } else {
                msg += "Great job!";
            }
            dingmessage.text.content = msg;
            dingmessage_stringified = JSON.stringify(dingmessage);
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                data: dingmessage_stringified,
                url: `https://oapi.dingtalk.com/robot/send?access_token=${accessToken}`
            };
            return axios(options);
        })
        .then(() => {
            callback(null, true);
        })
        .catch((error) => {
            callback(error);
        });
}