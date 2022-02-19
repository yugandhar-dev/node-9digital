# node-9digital

Steps to run:

The package.json file consists of two scripts: node server.js and nodemon server.js.

To run the app in development - npm run server
To run the app in production - npm run start

In the postman app, post json data, from the list of shows in the request payload, the shows are filtered with DRM enabled (drm: true) and at least one episode (episodeCount > 0).

The returned JSON have a response key with an array of shows. Each element have the following fields from the request:

{
  image - corresponding to image/showImage from the request payload
  slug
  title
}

Also, the invalid json is handled in the app. If we try to send invalid JSON, it will return a JSON response with HTTP status 400 Bad Request, and with a `error` key containing the string Could not decode request.

{
    "error": "Could not decode request: JSON parsing failed"
}
