FROM openjdk:11-jre-slim
COPY /backend/target/backend-huellapositiva-1.0.jar /usr/src/app/
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["java", "-jar", "backend-huellapositiva-1.0.jar"]
