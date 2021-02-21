/*
npm은 패키지 관리자이다. python의 pip와 같은 역할
npm init을 통해 패키지를 관리하는 package.json 파일을 생성한다.

npm install (pakage name) --save 를 하는 이유는 옵션을 설정하기 위함. 기본 디폴트는 -p이다.

*/

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port,()=> console.log(`Example app listening on port ${port}!`))