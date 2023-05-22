var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('file_name', '上传test.pdf');
data.append('parent_type', 'explorer');
data.append('parent_node', 'Beoifye2flJ5ZSd3UQHcuXpOnLP');
data.append('size', '78537');
data.append('file', fs.createReadStream('src/附件8：逾期申请审批表.pdf'));

var config = {
  method: 'post',
  url: 'https://open.feishu.cn/open-apis/drive/v1/files/upload_all',
  headers: { 
    'Content-Type': 'multipart/form-data', 
    'Authorization': 'Bearer t-g1045n2UWKDJAWZ2RZMRDZTPJNTAYU2TUH4RMR5I', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});