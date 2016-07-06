var config = {};

config.s3Burl = "https://s3-{{ aws.region }}.amazonaws.com/{{ MainBucket }}/";
config.resourcesCounterDBName = "fda-{{ app_name }}-{{ db_resources_counter }}";
config.snapshotDBName = "fda-{{ app_name }}-{{ db_snapshot }}";

module.exports = config;
