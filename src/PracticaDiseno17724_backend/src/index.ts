import { Server } from 'azle';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export default Server(()=>{

    const app = express();


//app.use(app.cors());

return app.listen();


})

