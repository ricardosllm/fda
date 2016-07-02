define([], function(){

  var c = {
    AWS : {
      identityPoolId: "{{ ExistingIdentityPoolId.stdout }}",
      region: "{{ aws.region }}",
      s3Bucket : "{{ MainBucket }}"

    },
    defaultCameraId : "{{ app_name }}-camera-id",
    durationBtwSnap : 5400
  };
  return c;
});
