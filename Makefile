ENV := dev
DOCKER_CONTAINER := huella-positiva
NETWORK := huella-positiva_network
PROJECT_NAME := Huella_Positiva
SERVICES :=

# Output colors
NORMAL := \033[0m
CYAN   := \033[36m
YELLOW := \033[33m
BLUE   := \033[34m
RED    := \033[31m

# Detect docker executable and when called inside container
DOCKER :=
DOCKER_OPTIONS = --user $(USER)
DOCKER_EXEC := "$(shell which docker docker.exe | head -n1)"
ifneq ($(DOCKER_EXEC),"")
	DOCKER = $(DOCKER_EXEC) exec $(DOCKER_OPTIONS) $(DOCKER_CONTAINER)
endif

.DEFAULT_GOAL = help
.SUFFIXES:
ifndef VERBOSE
.SILENT:
endif

MSG_SEPARATOR := "*********************************************************************"
MSG_IDENT := "    "

.PHONY: help
help: ## Show command list
	echo ""
	echo " > \033[1;37m$(PROJECT_NAME)\033[0m commands"
	echo ""
	echo You can use the following commands:
	# Parses current makefile looking for targets
	# Comments after the command are used as description
	grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN { FS = ":.*?## " }; { printf " - \033[1;36m%s:\033[0m %s\n", $$1, $$2 }'
	echo

######################################################################
########################   BASIC    #################################
######################################################################
.PHONY: build
build: ## Build application .Jar
	mvn -f backend/pom.xml clean package -Dmaven.test.skip=true -Dmaven.javadoc.skip=true

.PHONY: up
up: ## Start the application
	docker-compose up -t0 -d $(SERVICES)
	cd frontend && npm run start

.PHONY: down
down: ## Stop database
	docker-compose down -t0 $(SERVICES)

.PHONY: update-backend
api-update: build ## Build the .jar and restart the Backend
	docker-compose build --no-cache huellapositiva_backend
	docker-compose up -t0 -d
	$(MAKE) .api-running-message

.PHONY: up
api-up: ## Start the Backend
	docker-compose up -t0 -d $(SERVICES)
	$(MAKE) .api-running-message

.api-running-message:
	echo "\n\n${MSG_SEPARATOR}\n\n Running the 🤘 BACKEND.\n\n"
	echo "Go to http://localhost:8080/actuator/health. Expect to see {\"status\",\"up\"}.\n\n"
	echo "Go to http://localhost:8080/swagger-ui. To see the documentation API.\n\n${MSG_SEPARATOR}\n\n"

.PHONY: .ensure-network
.ensure-network:
	[ -z "$(shell $(DOCKER_EXEC) network ls -q -f name=$(NETWORK))" ] && $(DOCKER_EXEC) network create $(NETWORK) || true

.PHONY: install
install: node-modules build up  ## First time install

node-modules: ./frontend/package.json ./frontend/package-lock.json
	echo "\n\n${MSG_SEPARATOR}\n\n Installing 📦 node-modules.\n\n${MSG_SEPARATOR}\n\n"
	cd ./frontend && npm install --force
