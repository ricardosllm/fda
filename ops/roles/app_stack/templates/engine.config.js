var config = {};

config.s3Burl = "https://s3-{{ aws.region }}.amazonaws.com/{{ MainBucket }}/";

module.exports = config;
