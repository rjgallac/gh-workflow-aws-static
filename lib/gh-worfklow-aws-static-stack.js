const { Stack, Duration } = require('aws-cdk-lib');
const {Bucket, BucketAccessControl} = require("aws-cdk-lib/aws-s3");
const {BucketDeployment, Source} = require("aws-cdk-lib/aws-s3-deployment");
// const sqs = require('aws-cdk-lib/aws-sqs');
const path = require("path");

class GhWorfklowAwsStaticStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);


    const bucket = new Bucket(this, 'Bucket', {
      bucketName: 'test-bucket-gh-workflow-21345',
      accessControl: BucketAccessControl.PRIVATE,
    })

    new BucketDeployment(this, 'BucketDeployment', {
      destinationBucket: bucket,
      sources: [Source.asset(path.resolve(__dirname, '../src'))]
    })

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'GhWorfklowAwsStaticQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { GhWorfklowAwsStaticStack }
