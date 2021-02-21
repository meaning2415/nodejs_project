/*
npm은 패키지 관리자이다. python의 pip와 같은 역할
npm init을 통해 패키지를 관리하는 package.json 파일을 생성한다.

npm install (pakage name) --save 를 하는 이유는 옵션을 설정하기 위함. 기본 디폴트는 -p이다.

*/

const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/User")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jimin:qwer1234@meaning.bm8ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
// 몽고 디비 설치과정에서 에러가 발생하였는데
// npm install mongoose@5.11.15로 재설치하였더니 해결됨.



app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register',(req, res) => {
    const user = new User(req.body)
    console.log("req.body:",req.body)
    console.log("User:",user)
    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            
            success : true
        })
    })
})



app.listen(port,()=> console.log(`Example app listening on port ${port}!`))