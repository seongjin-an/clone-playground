import express, { Application } from 'express';
import session from "express-session";
import cors from 'cors'

import sequelize from "./sequelize";
import routes from './routes'
import socket from "./socket";

const FileStore = require('session-file-store')(session)

const app: Application = express();

const sessionMiddleware = session({
    secret: 'kakao',//쿠키를  임의로 설정 방지
    saveUninitialized: true,//세션 저장 전에 uninitialized
    cookie: { secure: false },
    resave: false,//
    store: new FileStore()
})

app.use(sessionMiddleware)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

sequelize.sync({force: true})
app.use('/', routes)

const server = app.listen(8000, () => {
    console.log('start')
})

socket(server, app, sessionMiddleware)