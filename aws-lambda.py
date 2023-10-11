import json

enableCORS = {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        }
    
def lambda_handler(event, context):
    try:
        # Extract the query parameters from the event
        query_parameters = event["queryStringParameters"]

        # Check if the 'param' query parameter exists
        if query_parameters and 'param' in query_parameters:
            # Define the expected string value
            expected_value = "admin"

            # Compare the provided parameter with the expected value
            if query_parameters['param'] == expected_value:
                # Authentication successful
                return {
                    'statusCode': 200,
                    'headers': enableCORS,
                    'body': json.dumps("Authentication successful")
                }
        # Authentication failed
        return {
            'statusCode': 401,
            'headers': enableCORS,
            'body': json.dumps("Authentication failed")
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': enableCORS,
            'body': json.dumps(str(e))
        }
