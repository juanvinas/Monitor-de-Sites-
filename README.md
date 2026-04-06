# Monitor de Sites/IP

Este projeto tem como objetivo monitorar a disponibilidade de sites e endereços IP utilizando **Prometheus**, **Grafana** e **Alertmanager**.  
Ele foi desenvolvido para facilitar a observação de serviços críticos e gerar alertas em caso de falhas.

---

## 🚀 Tecnologias utilizadas
- **Prometheus** → coleta e armazenamento de métricas
- **Grafana** → visualização dos dados em dashboards
- **Alertmanager** → gerenciamento de alertas
- **Docker Compose** → orquestração dos serviços

---

## 📂 Estrutura do projeto
- `.github/workflows` → automações e CI/CD
- `grafana/config` → configuração dos dashboards
- `monitor/sites.json` → lista de sites/IP monitorados
- `prometheus/prometheus.yml` → configuração do Prometheus
- `alertmanager/` → configuração de alertas
- `docker-compose.yml` → definição dos serviços

---

## ⚙️ Como executar
1. Clone o repositório:
   ```bash
   git clone git@github.com:juanvinas/Monitor-de-Sites-.git
   cd Monitor-de-Sites-
