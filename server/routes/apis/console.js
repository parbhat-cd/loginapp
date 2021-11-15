module.exports = function ( ) {
    const winston = require('winston');
    const DailyRotateFile = require('winston-daily-rotate-file');
    const { format } = require('logform');
    
    const logger = winston.createLogger({
      level: 'info',
      json:false,
      format: format.combine(
          winston.format.colorize(),
          winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
          winston.format.align(),
          winston.format.printf(
            info  => `[${info.timestamp}]${info.message}`
          ),
      ),
        
      transports: [
    
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.DailyRotateFile({
                filename: './logs/geo-logs-%DATE%.log',
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                maxSize: '20m',
                maxFiles: '14d'
            }), 
      ]
    });

    function formatArrayParam(param){
        param = param.map(function(e){
                return (typeof arg == "object")?JSON.stringify(e):e
            });
            
        param = param.join(" ");
        // param= param.substring(1, param.length-1);
        return param;
    }

	return {
		log: function(...params) {
            var requestParam= [...params];
            var param=requestParam.map((arg) => {return (typeof arg == "object")?JSON.stringify(arg):arg});
            logger.info(formatArrayParam(param));
        },
        trace: function(...params) {
            var requestParam= [...params];
            var param=requestParam.map((arg) => {return (typeof arg == "object")?JSON.stringify(arg):arg});
            logger.info(formatArrayParam(param));
        }
	}
}