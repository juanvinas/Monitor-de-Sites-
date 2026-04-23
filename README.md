# 📊 Monitoramento de Sites e Serviços (Prometheus + Grafana)

Este projeto demonstra a implementação de uma infraestrutura de observabilidade moderna, utilizando containers Docker para monitorar a disponibilidade e performance de aplicações web e ativos de rede.

## 🚀 Live Demo (Acesso Público)

O dashboard está configurado com **Acesso Anônimo (Viewer)** e modo **Kiosk**, permitindo que qualquer pessoa visualize as métricas em tempo real sem a necessidade de login.

> 🌐 **[Clique aqui para visualizar o Dashboard ao Vivo](http://34.148.238.34:3001/d/ad8rxn2/monitor-teste?orgId=1&from=now-6h&to=now&timezone=browser&kiosk)**

---

## 🛠️ Stack Tecnológica

* **Grafana:** Visualização de dados e dashboards dinâmicos.
* **Prometheus:** Coleta e armazenamento de métricas de série temporal.
* **Blackbox Exporter:** Realiza sondagens (probes) via HTTP, ICMP (Ping) e TCP.
* **Alertmanager:** Gerenciamento de incidentes e envio de alertas via SMTP (Gmail).
* **Docker & Docker Compose:** Orquestração e padronização do ambiente.
* **Google Cloud Platform (GCP):** Hospedagem da infraestrutura em instância Linux (Ubuntu).

---

## 📈 Funcionalidades de SRE Implementadas

### 1. Disponibilidade em Tempo Real (Uptime)
Utilização do **State Timeline** para visualizar o histórico de status dos serviços. Diferente de um simples indicador "online/offline", esta visualização permite identificar instabilidades intermitentes ao longo das últimas horas.

### 2. Monitoramento de Performance (Latência)
Acompanhamento do tempo de resposta dos endpoints para garantir que o **SLA (Service Level Agreement)** de performance seja mantido.

### 3. Alertas Inteligentes
Configuração de regras no Prometheus para detectar quedas e notificar automaticamente via e-mail, garantindo um tempo de resposta (MTTR) reduzido em caso de falhas.


---

## 📦 Como rodar este projeto

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/juanvinas/Monitor-de-Sites-.git](https://github.com/juanvinas/Monitor-de-Sites-.git)
    ```
2.  Configure o seu arquivo `grafana.ini` (use o `grafana.ini.example` como base).
3.  Suba a stack via Docker Compose:
    ```bash
    docker-compose up -d
    ```

---
💡 *Este projeto faz parte da minha transição de carreira para SRE/DevOps, focando em automação e confiabilidade de sistemas.*
