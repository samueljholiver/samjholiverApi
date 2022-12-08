import app from './src/app.js'

const port = process.env.PORT || 8021;

app.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost:${port}`);
})