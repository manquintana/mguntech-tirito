Para levantar el proyecto:
1. Levantar el servidor Mongo.
	Corre en docker, mongo:lastest
2. Levantar el servidor MySql local
3. Levantar el servidor Node.
	node-api > node index.js
4. Deshabilitar Firewall de Windows.
5. Levantar kafka.
	Virtualbox > linux vm_ubuntu_kafka
	Correr el docker con la configuracion de kafka
	Correr el consumer
	Correr el publisher
6. Levantar el proyecto Reactnative.
	reactnative-fps > expo start
	Correr Android Studio y levantar el simulador
7. Correr en servidor web local "Simulador_Tiros_v2" O BIEN A TRAVES DE INTERNET
	c:wamp/www/tirito
	Acceder localhost:8080
8. Hacer tiros de prueba desde celular y desde web
9. Una vez se tengan datos suficientes, correr Reconocer_Balas_v3
10. Correr Tableau