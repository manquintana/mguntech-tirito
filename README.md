# tirito

"tirito" was developed as the final project for the Data Science Diploma at UADE in 2020. It is an image recognizer programmed in Python which detects the impacts made on an "International shooting target", consuming the input through a live streaming process that involves multiple technologies.

## Architecture Diagram

![Architecture Diagram](images/architecture-diagram.jpg)
---
## Setup and Usage

1. **Start the Mongo server**
   > Run in Docker: `mongo:latest`

2. **Start the local MySQL server**

3. **Start the Node server**
   > `node-api > node index.js`

4. **If using Windows → Disable Windows Firewall**

5. **Run Kafka**
   > VirtualBox → Linux VM `vm_ubuntu_kafka`  
   > Run the Docker container with the Kafka configuration  
   > Run the consumer  
   > Run the publisher  

6. **Run the React Native project**
   > `reactnative-fps > expo start`  
   - Open Android Studio and launch the simulator

7. **Run the web project "Simulador_Tiros_v2"**
   > Path: `c:\wamp\www\tirito`  
   > Access: `http://localhost:8080`

8. **Perform test shots**
   - From the mobile app  
   - From the web  

9. **Once sufficient data is collected**
   > Run `Reconocer_Balas_v3`

10. **Run Tableau**

