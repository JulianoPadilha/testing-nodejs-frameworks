const express = require('express');
const app = express();
const port = 3000;

// Para servir arquivos estáticos, como imagens, arquivos CSS, arquivos JavaScript e HTML, use a função de middleware integrada express.static no Express.
// O argumento root especifica o diretório raiz a partir do qual servir ativos estáticos
app.use(express.static('public'));
// Agora você pode carregar os arquivos que estão no diretório público:
// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/images/bg.png
// http://localhost:3000/hello.html

// O Express procura os arquivos relativos ao diretório estático, portanto, o nome do diretório estático não faz parte da URL.

// Para usar vários diretórios de ativos estáticos, chame a função de middleware express.static várias vezes:
app.use(express.static('assets'));
// O Express procura os arquivos na ordem em que você define os diretórios estáticos com a função de middleware express.static.

// Para criar um prefixo de caminho virtual (onde o caminho não existe realmente no sistema de arquivos) para arquivos que são servidos pela função express.static, especifique um caminho de montagem para o diretório estático, conforme mostrado abaixo:
app.use('/static', express.static('public'));
// http://localhost:3000/static/teste.txt

app.get('/hello', (req, res) => {
  res.send('Hellow World!');
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});