import { ErrorHandler } from '../utils/ErrorHandler.js';

export const errorHandlerMiddleware = (err, req, res, next) => {
  err.message = err.message || 'Internal Server Error';
  err.statusCode = err.statusCode || 500;
  err.status(err.statusCode).json({ success: false, error: err.message });
};

// handling hanadleUncaughtError Rejection
export const hanadleUncaughtError = () => {
  process.on('uncaughtException', (err) => {
    console.log(`Error: ${err}`);
    console.log('shutting down server bcz of uncaughtException');
  });
};
