import React, { Component } from 'react';
import { View, Text, Picker, Button, StyleSheet, TextInput, Alert } from 'react-native'
import { Slider } from 'react-native-elements';

const data =  [
   {"Country": "Seleccione pais", "Code": "" },
   {"Country": "Afghanistan", "Code": "AFG" },
   {"Country": "Albania", "Code": "ALB" },
   {"Country": "Algeria", "Code": "DZA" },
   {"Country": "American Samoa", "Code": "ASM" },
   {"Country": "Andorra", "Code": "AND" },
   {"Country": "Angola", "Code": "AGO" },
   {"Country": "Anguilla", "Code": "AIA" },
   {"Country": "Antarctica", "Code": "ATA" },
   {"Country": "Antigua and Barbuda", "Code": "ATG" },
   {"Country": "Argentina", "Code": "ARG" },
   {"Country": "Armenia", "Code": "ARM" },
   {"Country": "Aruba", "Code": "ABW" },
   {"Country": "Australia", "Code": "AUS" },
   {"Country": "Austria", "Code": "AUT" },
   {"Country": "Azerbaijan", "Code": "AZE" },
   {"Country": "Bahamas", "Code": "BHS" },
   {"Country": "Bahrain", "Code": "BHR" },
   {"Country": "Bangladesh", "Code": "BGD" },
   {"Country": "Barbados", "Code": "BRB" },
   {"Country": "Belarus", "Code": "BLR" },
   {"Country": "Belgium", "Code": "BEL" },
   {"Country": "Belize", "Code": "BLZ" },
   {"Country": "Benin", "Code": "BEN" },
   {"Country": "Bermuda", "Code": "BMU" },
   {"Country": "Bhutan", "Code": "BTN" },
   {"Country": "Bolivia, Plurinational State of", "Code": "BOL" },
   {"Country": "Bolivia", "Code": "BOL" },
   {"Country": "Bosnia and Herzegovina", "Code": "BIH" },
   {"Country": "Botswana", "Code": "BWA" },
   {"Country": "Bouvet Island", "Code": "BVT" },
   {"Country": "Brazil", "Code": "BRA" },
   {"Country": "British Indian Ocean Territory", "Code": "IOT" },
   {"Country": "Brunei Darussalam", "Code": "BRN" },
   {"Country": "Brunei", "Code": "BRN" },
   {"Country": "Bulgaria", "Code": "BGR" },
   {"Country": "Burkina Faso", "Code": "BFA" },
   {"Country": "Burundi", "Code": "BDI" },
   {"Country": "Cambodia", "Code": "KHM" },
   {"Country": "Cameroon", "Code": "CMR" },
   {"Country": "Canada", "Code": "CAN" },
   {"Country": "Cape Verde", "Code": "CPV" },
   {"Country": "Cayman Islands", "Code": "CYM" },
   {"Country": "Central African Republic", "Code": "CAF" },
   {"Country": "Chad", "Code": "TCD" },
   {"Country": "Chile", "Code": "CHL" },
   {"Country": "China", "Code": "CHN" },
   {"Country": "Christmas Island", "Code": "CXR" },
   {"Country": "Cocos (Keeling) Islands", "Code": "CCK" },
   {"Country": "Colombia", "Code": "COL" },
   {"Country": "Comoros", "Code": "COM" },
   {"Country": "Congo", "Code": "COG" },
   {"Country": "Congo, the Democratic Republic of the", "Code": "COD" },
   {"Country": "Cook Islands", "Code": "COK" },
   {"Country": "Costa Rica", "Code": "CRI" },
   {"Country": "Côte d'Ivoire", "Code": "CIV" },
   {"Country": "Ivory Coast", "Code": "CIV" },
   {"Country": "Croatia", "Code": "HRV" },
   {"Country": "Cuba", "Code": "CUB" },
   {"Country": "Cyprus", "Code": "CYP" },
   {"Country": "Czech Republic", "Code": "CZE" },
   {"Country": "Denmark", "Code": "DNK" },
   {"Country": "Djibouti", "Code": "DJI" },
   {"Country": "Dominica", "Code": "DMA" },
   {"Country": "Dominican Republic", "Code": "DOM" },
   {"Country": "Ecuador", "Code": "ECU" },
   {"Country": "Egypt", "Code": "EGY" },
   {"Country": "El Salvador", "Code": "SLV" },
   {"Country": "Equatorial Guinea", "Code": "GNQ" },
   {"Country": "Eritrea", "Code": "ERI" },
   {"Country": "Estonia", "Code": "EST" },
   {"Country": "Ethiopia", "Code": "ETH" },
   {"Country": "Falkland Islands (Malvinas)", "Code": "FLK" },
   {"Country": "Faroe Islands", "Code": "FRO" },
   {"Country": "Fiji", "Code": "FJI" },
   {"Country": "Finland", "Code": "FIN" },
   {"Country": "France", "Code": "FRA" },
   {"Country": "French Guiana", "Code": "GUF" },
   {"Country": "French Polynesia", "Code": "PYF" },
   {"Country": "French Southern Territories", "Code": "ATF" },
   {"Country": "Gabon", "Code": "GAB" },
   {"Country": "Gambia", "Code": "GMB" },
   {"Country": "Georgia", "Code": "GEO" },
   {"Country": "Germany", "Code": "DEU" },
   {"Country": "Ghana", "Code": "GHA" },
   {"Country": "Gibraltar", "Code": "GIB" },
   {"Country": "Greece", "Code": "GRC" },
   {"Country": "Greenland", "Code": "GRL" },
   {"Country": "Grenada", "Code": "GRD" },
   {"Country": "Guadeloupe", "Code": "GLP" },
   {"Country": "Guam", "Code": "GUM" },
   {"Country": "Guatemala", "Code": "GTM" },
   {"Country": "Guernsey", "Code": "GGY" },
   {"Country": "Guinea", "Code": "GIN" },
   {"Country": "Guinea-Bissau", "Code": "GNB" },
   {"Country": "Guyana", "Code": "GUY" },
   {"Country": "Haiti", "Code": "HTI" },
   {"Country": "Heard Island and McDonald Islands", "Code": "HMD" },
   {"Country": "Holy See (Vatican City State)", "Code": "VAT" },
   {"Country": "Honduras", "Code": "HND" },
   {"Country": "Hong Kong", "Code": "HKG" },
   {"Country": "Hungary", "Code": "HUN" },
   {"Country": "Iceland", "Code": "ISL" },
   {"Country": "India", "Code": "IND" },
   {"Country": "Indonesia", "Code": "IDN" },
   {"Country": "Iran, Islamic Republic of", "Code": "IRN" },
   {"Country": "Iraq", "Code": "IRQ" },
   {"Country": "Ireland", "Code": "IRL" },
   {"Country": "Isle of Man", "Code": "IMN" },
   {"Country": "Israel", "Code": "ISR" },
   {"Country": "Italy", "Code": "ITA" },
   {"Country": "Jamaica", "Code": "JAM" },
   {"Country": "Japan", "Code": "JPN" },
   {"Country": "Jersey", "Code": "JEY" },
   {"Country": "Jordan", "Code": "JOR" },
   {"Country": "Kazakhstan", "Code": "KAZ" },
   {"Country": "Kenya", "Code": "KEN" },
   {"Country": "Kiribati", "Code": "KIR" },
   {"Country": "Korea, Democratic People's Republic of", "Code": "PRK" },
   {"Country": "Korea, Republic of", "Code": "KOR" },
   {"Country": "South Korea", "Code": "KOR" },
   {"Country": "Kuwait", "Code": "KWT" },
   {"Country": "Kyrgyzstan", "Code": "KGZ" },
   {"Country": "Lao People's Democratic Republic", "Code": "LAO" },
   {"Country": "Latvia", "Code": "LVA" },
   {"Country": "Lebanon", "Code": "LBN" },
   {"Country": "Lesotho", "Code": "LSO" },
   {"Country": "Liberia", "Code": "LBR" },
   {"Country": "Libyan Arab Jamahiriya", "Code": "LBY" },
   {"Country": "Libya", "Code": "LBY" },
   {"Country": "Liechtenstein", "Code": "LIE" },
   {"Country": "Lithuania", "Code": "LTU" },
   {"Country": "Luxembourg", "Code": "LUX" },
   {"Country": "Macao", "Code": "MAC" },
   {"Country": "Macedonia, the former Yugoslav Republic of", "Code": "MKD" },
   {"Country": "Madagascar", "Code": "MDG" },
   {"Country": "Malawi", "Code": "MWI" },
   {"Country": "Malaysia", "Code": "MYS" },
   {"Country": "Maldives", "Code": "MDV" },
   {"Country": "Mali", "Code": "MLI" },
   {"Country": "Malta", "Code": "MLT" },
   {"Country": "Marshall Islands", "Code": "MHL" },
   {"Country": "Martinique", "Code": "MTQ" },
   {"Country": "Mauritania", "Code": "MRT" },
   {"Country": "Mauritius", "Code": "MUS" },
   {"Country": "Mayotte", "Code": "MYT" },
   {"Country": "Mexico", "Code": "MEX" },
   {"Country": "Micronesia, Federated States of", "Code": "FSM" },
   {"Country": "Moldova, Republic of", "Code": "MDA" },
   {"Country": "Monaco", "Code": "MCO" },
   {"Country": "Mongolia", "Code": "MNG" },
   {"Country": "Montenegro", "Code": "MNE" },
   {"Country": "Montserrat", "Code": "MSR" },
   {"Country": "Morocco", "Code": "MAR" },
   {"Country": "Mozambique", "Code": "MOZ" },
   {"Country": "Myanmar", "Code": "MMR" },
   {"Country": "Burma", "Code": "MMR" },
   {"Country": "Namibia", "Code": "NAM" },
   {"Country": "Nauru", "Code": "NRU" },
   {"Country": "Nepal", "Code": "NPL" },
   {"Country": "Netherlands", "Code": "NLD" },
   {"Country": "Netherlands Antilles", "Code": "ANT" },
   {"Country": "New Caledonia", "Code": "NCL" },
   {"Country": "New Zealand", "Code": "NZL" },
   {"Country": "Nicaragua", "Code": "NIC" },
   {"Country": "Niger", "Code": "NER" },
   {"Country": "Nigeria", "Code": "NGA" },
   {"Country": "Niue", "Code": "NIU" },
   {"Country": "Norfolk Island", "Code": "NFK" },
   {"Country": "Northern Mariana Islands", "Code": "MNP" },
   {"Country": "Norway", "Code": "NOR" },
   {"Country": "Oman", "Code": "OMN" },
   {"Country": "Pakistan", "Code": "PAK" },
   {"Country": "Palau", "Code": "PLW" },
   {"Country": "Palestinian Territory, Occupied", "Code": "PSE" },
   {"Country": "Panama", "Code": "PAN" },
   {"Country": "Papua New Guinea", "Code": "PNG" },
   {"Country": "Paraguay", "Code": "PRY" },
   {"Country": "Peru", "Code": "PER" },
   {"Country": "Philippines", "Code": "PHL" },
   {"Country": "Pitcairn", "Code": "PCN" },
   {"Country": "Poland", "Code": "POL" },
   {"Country": "Portugal", "Code": "PRT" },
   {"Country": "Puerto Rico", "Code": "PRI" },
   {"Country": "Qatar", "Code": "QAT" },
   {"Country": "Réunion", "Code": "REU" },
   {"Country": "Romania", "Code": "ROU" },
   {"Country": "Russian Federation", "Code": "RUS" },
   {"Country": "Russia", "Code": "RUS" },
   {"Country": "Rwanda", "Code": "RWA" },
   {"Country": "Saint Helena, Ascension and Tristan da Cunha", "Code": "SHN" },
   {"Country": "Saint Kitts and Nevis", "Code": "KNA" },
   {"Country": "Saint Lucia", "Code": "LCA" },
   {"Country": "Saint Pierre and Miquelon", "Code": "SPM" },
   {"Country": "Saint Vincent and the Grenadines", "Code": "VCT" },
   {"Country": "Saint Vincent & the Grenadines", "Code": "VCT" },
   {"Country": "St. Vincent and the Grenadines", "Code": "VCT" },
   {"Country": "Samoa", "Code": "WSM" },
   {"Country": "San Marino", "Code": "SMR" },
   {"Country": "Sao Tome and Principe", "Code": "STP" },
   {"Country": "Saudi Arabia", "Code": "SAU" },
   {"Country": "Senegal", "Code": "SEN" },
   {"Country": "Serbia", "Code": "SRB" },
   {"Country": "Seychelles", "Code": "SYC" },
   {"Country": "Sierra Leone", "Code": "SLE" },
   {"Country": "Singapore", "Code": "SGP" },
   {"Country": "Slovakia", "Code": "SVK" },
   {"Country": "Slovenia", "Code": "SVN" },
   {"Country": "Solomon Islands", "Code": "SLB" },
   {"Country": "Somalia", "Code": "SOM" },
   {"Country": "South Africa", "Code": "ZAF" },
   {"Country": "South Georgia and the South Sandwich Islands", "Code": "SGS" },
   {"Country": "South Sudan", "Code": "SSD" },
   {"Country": "Spain", "Code": "ESP" },
   {"Country": "Sri Lanka", "Code": "LKA" },
   {"Country": "Sudan", "Code": "SDN" },
   {"Country": "Suriname", "Code": "SUR" },
   {"Country": "Svalbard and Jan Mayen", "Code": "SJM" },
   {"Country": "Swaziland", "Code": "SWZ" },
   {"Country": "Sweden", "Code": "SWE" },
   {"Country": "Switzerland", "Code": "CHE" },
   {"Country": "Syrian Arab Republic", "Code": "SYR" },
   {"Country": "Taiwan, Province of China", "Code": "TWN" },
   {"Country": "Taiwan", "Code": "TWN" },
   {"Country": "Tajikistan", "Code": "TJK" },
   {"Country": "Tanzania, United Republic of", "Code": "TZA" },
   {"Country": "Thailand", "Code": "THA" },
   {"Country": "Timor-Leste", "Code": "TLS" },
   {"Country": "Togo", "Code": "TGO" },
   {"Country": "Tokelau", "Code": "TKL" },
   {"Country": "Tonga", "Code": "TON" },
   {"Country": "Trinidad and Tobago", "Code": "TTO" },
   {"Country": "Tunisia", "Code": "TUN" },
   {"Country": "Turkey", "Code": "TUR" },
   {"Country": "Turkmenistan", "Code": "TKM" },
   {"Country": "Turks and Caicos Islands", "Code": "TCA" },
   {"Country": "Tuvalu", "Code": "TUV" },
   {"Country": "Uganda", "Code": "UGA" },
   {"Country": "Ukraine", "Code": "UKR" },
   {"Country": "United Arab Emirates", "Code": "ARE" },
   {"Country": "United Kingdom", "Code": "GBR" },
   {"Country": "United States", "Code": "USA" },
   {"Country": "United States Minor Outlying Islands", "Code": "UMI" },
   {"Country": "Uruguay", "Code": "URY" },
   {"Country": "Uzbekistan", "Code": "UZB" },
   {"Country": "Vanuatu", "Code": "VUT" },
   {"Country": "Venezuela, Bolivarian Republic of", "Code": "VEN" },
   {"Country": "Venezuela", "Code": "VEN" },
   {"Country": "Viet Nam", "Code": "VNM" },
   {"Country": "Vietnam", "Code": "VNM" },
   {"Country": "Virgin Islands, British", "Code": "VGB" },
   {"Country": "Virgin Islands, U.S.", "Code": "VIR" },
   {"Country": "Wallis and Futuna", "Code": "WLF" },
   {"Country": "Western Sahara", "Code": "ESH" },
   {"Country": "Yemen", "Code": "YEM" },
   {"Country": "Zambia", "Code": "ZMB" },
   {"Country": "Zimbabwe", "Code": "ZWE" }
]

class LoadPointsScreen extends Component {

   state = {
      user: '',
      country: '',
      point1: 0,
      point2: 0,
      point3: 0,
      point4: 0,
      point5: 0,
      responseBody: ''
   }

   updateUser = (user) => {
      this.setState({ user: user })
   }
   updateCountry = (country) => {
      this.setState({ country: country })
   }
   updatePoint1 = (point1) => {
      this.setState({ point1: point1 })
   }
   updatePoint2 = (point2) => {
      this.setState({ point2: point2 })
   }
   updatePoint3 = (point3) => {
      this.setState({ point3: point3 })
   }
   updatePoint4 = (point4) => {
      this.setState({ point4: point4 })
   }
   updatePoint5 = (point5) => {
      this.setState({ point5: point5 })
   }

   cargarDatos(){
      //console.log(this.state.user);
      var customBody= {
         id: this.state.user, 
         pais: this.state.country,
         punto1:this.state.point1,
         punto2:this.state.point2,
         punto3:this.state.point3,
         punto4:this.state.point4,
         punto5:this.state.point5
      };
      if ((customBody.id == '') || (customBody.pais == '')){
         alert("No puede dejar campos sin completar")
      }
      else
      {
         var bodyJson = JSON.stringify(customBody);
         //POST request
         fetch('http://192.168.0.27:3000/cargarPuntos', {
            method: 'POST', //Request Type
            body: bodyJson, //post body
            headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            },
         })
         .then((response) => response.json())
         //If response is in json then in success
         .then((responseJson) => {
           //alert(JSON.stringify(responseJson));
           alert("Puntaje ingresado con éxito!");
           console.log(responseJson);
         })
         //If response is not in json then in error
         .catch((error) => {
           //alert(JSON.stringify(error));
           alert("Puntaje ingresado con éxito!");
           console.error(error);
         });
      }
      
         
   }

   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'column' }} >

            <Text style={styles.labelText} >
               Ingrese nombre:
            </Text>
            <TextInput
               style={styles.selector}
               onChangeText = {this.updateUser}
               value = {this.state.user}
            />

            <Text style={styles.labelText}>
               Seleccione pais:
            </Text>
            <View style={styles.selector}>
               <Picker  
                  mode="dropdown" 
                  selectedValue = {this.state.country}
                  onValueChange = {this.updateCountry}
                  style={styles.selectorDropdown}
               >
                  {
                  data.map((item) =>{
                     return(
                     <Picker.Item  label={item.Country} value={item.Code} key={item.Code}/>
                     );
                  })
                  }
               </Picker>
            </View>
            

            <Text style={styles.labelText}>
               Disparo #1: {this.state.point1}
            </Text>
            <Slider
               style= {styles.slider}
               step={1}
               minimumValue={0}
               maximumValue={10}
               width={200}
               thumbTintColor={"#fff"}
               minimumTrackTintColor={"#1C6BFF"}
               value={this.state.point1}
               onValueChange={this.updatePoint1}
            />
            

            <Text style={styles.labelText}>
               Disparo #2: {this.state.point2}
            </Text>
            <Slider
               style= {styles.slider}
               step={1}
               minimumValue={0}
               maximumValue={10}
               width={200}
               thumbTintColor={"#fff"}
               minimumTrackTintColor={"#1C6BFF"}
               value={this.state.point2}
               onValueChange={this.updatePoint2}
            />
          

            <Text style={styles.labelText}>
               Disparo #3: {this.state.point3}
            </Text>
            <Slider
               style= {styles.slider}
               step={1}
               minimumValue={0}
               maximumValue={10}
               width={200}
               thumbTintColor={"#fff"}
               minimumTrackTintColor={"#1C6BFF"}
               value={this.state.point3}
               onValueChange={this.updatePoint3}
            />
          
            <Text style={styles.labelText}>
               Disparo #4: {this.state.point4}
            </Text>
            <Slider
               style= {styles.slider}
               step={1}
               minimumValue={0}
               maximumValue={10}
               width={200}
               thumbTintColor={"#fff"}
               minimumTrackTintColor={"#1C6BFF"}
               value={this.state.point4}
               onValueChange={this.updatePoint4}
            />
          
            <Text style={styles.labelText}>
               Disparo #5: {this.state.point5}
            </Text>
            <Slider
               style= {styles.slider}
               step={1}
               minimumValue={0}
               maximumValue={10}
               width={200}
               thumbTintColor={"#fff"}
               minimumTrackTintColor={"#1C6BFF"}
               value={this.state.point5}
               onValueChange={this.updatePoint5}
            />

            
            <Button 
               style={styles.boton} 
               title="Enviar datos" 
               onPress={() => this.cargarDatos()} 
               
            />
         </View>

         
      )
   }
}
export default LoadPointsScreen

const styles = StyleSheet.create({
   labelText:{
      fontSize: 17,
      alignSelf: 'center',
      color: 'blue'
   },
   selector:{
      borderRadius: 10,
      fontSize: 15,
      alignSelf: 'center',
      color: 'blue',
      height: 40, 
      width: 300,
      borderColor: 'gray', 
      borderWidth: 2, 
      backgroundColor:'white'
   },
   selectorDropdown:{
      fontSize: 20,
      color: 'blue',
      height: 40, 
      width: 300,
      borderColor: 'gray', 
      borderWidth: 2, 
      backgroundColor:'white'
   },
   slider:{
      height: 50, 
      width: 300,
      alignSelf: 'center',
   },
   text: {
      height: 30, 
      width: 30,
      textAlign: "center",
      color:'blue',
      fontSize:20,
      borderColor: 'gray', 
      borderWidth: 2, 
      borderRadius: 10,
      backgroundColor:'white'
   },
   boton: {
      marginTop:40,

      height: 50, 
      width: 30,
   }
})