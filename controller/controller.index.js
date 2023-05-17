const { forkJoin, of, pipe, throwError, zip } = require("rxjs");
const  { mergeMap } =  require("rxjs/operators");
const moment = require('moment');

const { createController } = require("./helper");
const { AsyncAction } = require("rxjs/internal/scheduler/AsyncAction");



const data = {
    process: createController({
        request_mapper: (req, res, next) => {
            return req.body;
        },
        processor: pipe(
            mergeMap(async (props) => {  
                return 'test'
            })
        ),
        response_mapper: (req, res) =>  (base64String) => {
            res.send({
                success: true, 
                data: []
            });
        },
        error_handler: (_req, res) => (err) => {

            let status = 200
            console.log(err);

            if(err.message == "invalid city"){
                err.message = err.message
            }
    
            else if(err.message == "user already exist"){
                err.message = err.message
            }
            else if (err.message === 'UNAUTHORIZED') {
                status = 403;
            } 
            else {
                err.message = 'Something went wrong';
            }
    
            res.status(status).json({
                success: false,
                code: status,
                status: "failed",
                message: err.message
            })
        }
    }),

}


module.exports = data;