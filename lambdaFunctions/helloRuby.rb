require 'json'

def lambda_handler(event:, context:)
    { statusCode: 200, body: JSON.generate('Hello from Lambda!') }
end

#lambda_function.lambda_handler