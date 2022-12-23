#FROM openjdk:11-jre-slim
FROM eclipse-temurin:11-jre-alpine
COPY /backend/target/backend-huellapositiva-1.0.jar /usr/src/app/app.jar
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]


# *********************************************************************************************************
# Esto es para mejorar el el dockerfile y que no pese tanto la aplicación final - ahora mismo presenta problemas.
# *********************************************************************************************************
#FROM public.ecr.aws/docker/library/maven:3.8.4-amazoncorretto-11 as builder
#
#COPY backend/src /usr/src/app/src
#COPY backend/pom.xml /usr/src/app
#WORKDIR /usr/src/app
#
##RUN mvn -f /usr/src/app/pom.xml clean -Dmaven.test.skip=true package
#RUN mvn clean -Dmaven.test.skip=true package
#
#FROM public.ecr.aws/compose-x/amazoncorretto:11.alpine-amd64
#
#COPY --from=builder /usr/src/app/target/backend-huellapositiva-1.0.jar /usr/app/backend-huellapositiva-1.0.jar
#WORKDIR /usr/src/app
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "backend-huellapositiva-1.0.jar"]
