define([], function(){

  var c = {
    AWS : {
      identityPoolId: "{{ ExistingIdentityPoolId.stdout }}",
      region: "{{ aws.region }}",
      s3RawBucket : "{{ MainBucket }}"

    },
    defaultCameraId : "{{ app_name }}-camera-id",
    defaultCameraName : "{{ camera_name }}",
    durationBtwSnap : 5400
  };
  return c;
});
