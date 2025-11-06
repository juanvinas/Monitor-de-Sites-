const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 3000;

let sites = [];
try {
  sites = JSON.parse(fs.readFileSync('./sites.json'));
} catch (err) {
  console.error('Erro ao carregar sites.json:', err);
}

app.get('/metrics', async (req, res) => {
  let metrics = '';

  for (const site of sites) {
    try {
      const response = await axios.get(site.url);
      const status = response.status === 200 ? 1 : 0;
      metrics += `site_status{site="${site.nome}"} ${status}\n`;
    } catch (error) {
      metrics += `site_status{site="${site.nome}"} 0\n`;
    }
  }

  res.set('Content-Type', 'text/plain');
  res.send(metrics);
});

app.listen(PORT, () => {
  console.log(`Monitor rodando na porta ${PORT}`);
});
