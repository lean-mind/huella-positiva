# Huella Positiva

---

## 📜 Table of contents

- [🐳 Installation](#-installation)
- [🐛 Common issues](#-common-issues)

## 🐳 Installation

### Prerequisites

Before you start, make sure you have installed and configured:

* [Make](https://www.gnu.org/software/make/)
* [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/)

⚠️ Docker Desktop has given us some trouble, changing the id of the internal docker container user (on Linux).
Installing and using docker just from the CLI works just fine instead.

[*Only Windows*] If you have Windows OS, you must be follow these steps:

1.Follow [this guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10#:~:text=Update%20to%20WSL%202,-To%20update%20to&text=Check%20your%20Windows%20version%20by,Get%20Windows%20Update%20Assistant.)
for install Windows Subsystem Linux (WSL)
2. Install Windows Terminal from Microsoft Store, for a better experience and integration of WSL.
3. Open Windows Terminal and choose the Linux distribution that you downloaded in step one.
4. Proceed to install Huella Positiva like you will have Linux OS [First time install](#first-time-install)

   Considered read [this common issue](#standard_init_linuxgo211-exec-very-probably-on-windows-os), because it's very
   probably that you get it.

### First time install

- Clone this repo anywhere: `git clone git@github.com:lean-mind/huella-positiva.git`
- Build container images, start containers databases, install node-modules dependencies and up the backend: `make install`
- Now the databases and API is running, whe need now run the frontend `make frontend-up`

[⬆Go top](#-table-of-contents)

## Run the project locally

![running application locally gif](.github/docs/assets/running-application-locally.gif)

- Run `make database-up` to provide the database/localstack dependencies

⚠️ **Before running the backend locally, whe need up the databases** ⚠️

- In the same terminal window run `make backend-up` to up the API application
    > Go to `http://localhost:8080/actuator/health`. Expect to see `{"status","up"}`.

- In **new terminal** window run `make frontend-up` to up the WEB GUI application


[⬆Go top](#-table-of-contents)

## 🐛 Common issues

#### standard_init_linux.go:211: exec (very probably on Windows OS)

If you get "standard_init_linux.go:211: exec" error, you can fix it by executing these commands:

``for i in $(find . -name "*.sh"); do dos2unix $i; done``

``for i in $(find . -name "docker-*"); do dos2unix $i; done``

``for i in $(find . -name "Dockerfile"); do dos2unix $i; done``

[⬆Go top](#-table-of-contents)
