
const aws = require("aws-sdk");
const accessKey = "AKIAIGR7DEOSD3FAIUMA";
const secretKey = "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";
aws.config.update({
  region: 'ap-northeast-1',
  accessKeyId: accessKey,
  secretAccessKey: secretKey, 
});
const dynamodb = new aws.DynamoDB();
const TableName = "koppy_users"

export function registerUser(ethAdd, credentials) {
  // 本来は署名してから格納すべきだが時間ないので
  const params = {
    TableName: TableName,
    Item:{
      "uport_id": {
        S: credentials.address
      },
      "eth_add": {
        S: ethAdd
      },
      "name": {
        S: credentials.name
      },
      "url": {
        S: credentials.avatar.uri
      },
      "country": {
        S: credentials.country
      }
    }
  };
  dynamodb.putItem(params, (err, data) => {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
    }
  });
}

export function getUsers() {
  return new Promise(function(resolve, reject) {
    const params = {
      TableName: TableName,
    };
    dynamodb.scan(params, (err, data) => {
      if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        resolve(JSON.stringify(data, null, 2))
      }
    });
  });
}
