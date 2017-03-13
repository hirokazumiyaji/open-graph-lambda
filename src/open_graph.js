'use strict';

var http = require('cheerio-httpcli');

module.exports.handler = (event, context, callback) => {
  http.fetch('', (err, $, res) => {
    if (err) {
      callback(err);
      return;
    }

    const title = $('meta[property="og:title"]').attr('content');
    const type = $('meta[property="og:type"]').attr('content');
    const url = $('meta[property="og:url"]').attr('content');
    const image = $('meta[property="og:image"]').attr('content');
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        title: title,
        type: type,
        url: url,
        image: image
      }),
    };

    callback(null, response);
  });
};
