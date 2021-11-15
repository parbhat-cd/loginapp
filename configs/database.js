module.exports = function(mongoose) {

    var dbURI = (process.env.ENV=="production") ? 'mongodb://10.0.0.80:27017/geoAd' : 'mongodb://127.0.0.1:27017/geoAd';
    var connection = mongoose.createConnection(dbURI,{ server: { poolSize: 5 } });

    // When successfully connected
    connection.on('connected', function () {
        console.log('Mongoose connection open to ' + dbURI);
    });

    // If the connection throws an error
    connection.on('error',function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

    return connection;
}
