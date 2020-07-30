// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "198rdm7ei42hp5cb0kp42jr7bu",     // CognitoClientID
  "api_base_url": "https://iemz1hpclf.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-travis-todo2.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12xup3869m8nr.amplifyapp.com"                                      // AmplifyURL
};

export default config;
