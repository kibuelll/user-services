# USERS API

- USER SERVICE API :
  /sign-up (create user)
  /login (login user)
  /auth-request (request authentication from other service NECESSARY)
  /my-profile (view profile detail)

1. CREATE USER :
   request :

   - body :

   ```json
   {
     "name": "string",
     "email": "string",
     "gender": "string",
     "password": "string"
   }
   ```

   response :

   1. success - 201

   ```json
   {
     "name": "string",
     "email": "string"
   }
   ```

   2. error :
   status - 400

   ```json
   {
     "message": "Please input required field"
   }
   ```

2. LOGIN USER
   request :
   - body :

   ```json
   {
    "email": "string",
     "password": "string",
   }
   ```

  response :
    sucess - 200:
    ```json
    {
      "acess_token" : "string",
      "name" : "string",
      "email" : "string"
    }

```
    error :
    400 - bad request
    ```json
    {
      "message" : "Email and Password is required"
    }
    ```

    401 - Unauthorized 
    ``` json
    {
      "message" : "Invalid Email or Password"
    } 
    ``` 

3. My-Profile
   request :
   headers :

   ```json
   {
    "acess_token" : "string"
   }
   ```

   response :
   sucess - 200

    ```json
    {
      "id": "integer",
    "email": "string",
    "name": "string",
    "gender": "string",
    "createdAt": "string",
    "updatedAt": "string"
    }
    ```

4. AUTH-REQUEST
   request :
   - body

   ```json
   {
    "access_token" : "String"
   }
   ```

   response : sucess :

   ```json
   {
    "id" : "integer",
    "email" : "string",
    "name" : "string"
   }
   ```

   error :
   401 - Unauthorized_User

   ```json
   {
    "messaage" : "Please Login First"
   }
   ```
