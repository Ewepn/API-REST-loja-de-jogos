import app from "./src/app.js";
//usa a porta 4002 se não existir uma preconfiguração de porta
const port = process.env.PORT || 4002;

app.listen(port, () => {
	console.log(`O servidor está rodando na porta http://localhost:${port}`);
});
