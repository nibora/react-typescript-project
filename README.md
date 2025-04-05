
# ⚛️ Projekt - Typescript und React

Willkommen zu unserem Projekt! Dieses Repository enthält eine grundlegende React-Typescript App für eine moderne Webanwendung, die mit Vite entwickelt wurde. Wir verwenden eine Pipeline, um die Entwicklung zu optimieren, und stellen das Projekt über eine Docker-Registry als Image bereit, um es nahtlos in einer Live-Umgebung zu deployen.

## 🛠️ Verwendete Technologien

- **Vite** - Ein super schnelles Build-Tool für moderne Webanwendungen.
- **TypeScript** - Für statische Typisierung und eine sichere Code-Basis.
- **Docker** - Containerisiert die Anwendung, um die lokale Entwicklungsumgebung zu vereinheitlichen.
  
## 🚀 Installation

### Voraussetzungen

- **Node.js** (>=v16)
- **Docker** (optional, falls du die Anwendung in einem Container ausführen möchtest)

### Schritte zur Einrichtung

1. **Klonen des Repositories:**
   ```bash
   git clone https://github.com/nibora/react-typescript-project.git
   ```

2. **Abhängigkeiten installieren:**
   Navigiere in das Projektverzeichnis und installiere alle benötigten Abhängigkeiten:
   ```bash
   cd react-typescript-project
   npm install
   ```

3. **Entwicklungsumgebung starten:**
   Starte die Anwendung im Entwicklungsmodus:
   ```bash
   npm run dev
   ```

   Der Server läuft nun auf [http://localhost:3000](http://localhost:3000).


## 🌐 Live-Demo & Docker Image

Es gibt auch eine **aktuelle Online-Version** der Anwendung, die unter [https://robinsandbox.dev](https://robinsandbox.dev) erreichbar ist.

Falls du die Anwendung direkt aus einer Registry verwenden möchtest, kannst du das Docker-Image einfach herunterladen und ausführen:

```bash
docker pull rockerdock/react-app
docker run -p 3000:3000 rockerdock/react-app:latest
```
