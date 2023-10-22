// Screen1.js
import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TextInput, View,Button, Alert, Card , TouchableOpacity, navigation } from 'react-native';

import { ImageBackground } from 'react-native';


import profil from './profil5.jpg';
import titik1 from './Group3.png';
import titik2 from './Group2.png';

import codeIcon from './code.png';
import graduation from './graduation.png';

import kotak from './java.png';
import Screen2 from './css.png';
import Screen3 from './tailwind.png';
import Screen4 from './react.png';




const Screen1 =  ({ navigation}) => {
    const handleButtonPress = () => {
        // Arahkan ke Screen2
        navigation.navigate('Screen2');
      };
    return (
      <View style={styles.container}>
        
        <View>
          
           
        </View>
        <View style={styles.profilWrapper}>

             <Image source={kotak} style={styles.img2 }/>
             <Image source={Screen2} style={styles.img3 }/>
             <Image source={Screen3} style={styles.img4 }/>
             <Image source={Screen4} style={styles.img5 }/>
        
             <Image source={profil} style={styles.img }/>
             <Image source={titik1} style={styles.titkk}/>
             <Image source={titik2} style={styles.titk}/>
             <Image source={codeIcon} style={styles.icon1}/>
             <Image source={graduation} style={styles.icon2}/>
        </View>
       
            <ImageBackground source={require('./back.png')} style={styles.back}>
                 <View style={styles.container2}>
                    <Text style={{fontSize : 25, fontWeight: 'bold', marginTop: 0, color: 'white',}}>
                        Hardiek Tatendra
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '400', color: 'white', }}>Frontend Developer</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 60, }}>
                        <Text style={{position: 'absolute', left: -140, fontWeight: 'bold', fontSize : 18, color: 'white'}}>3 years</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 18,  color: 'white'}}>18</Text>
                        <Text style={{position: 'absolute', right : -140, fontWeight: 'bold', fontSize: 18, color: 'white'}}>Student</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -60 }}>
                        <Text style={{position: 'absolute', left: -144, fontWeight: 'bold', fontSize : 15, color: '#D0CECE'}}>experience</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 15,  color: '#D0CECE'}}>Age</Text>
                        <Text style={{position: 'absolute', right : -120, fontWeight: 'bold', fontSize: 15, color: '#D0CECE'}}>Work</Text>
                    </View>
                    <Text style={{textAlign: 'center', paddingHorizontal: 40, marginTop: 50, fontWeight: '500', color: '#D0CECE'}}>hello my name is hardiek tatendra i am a frontend developer i come from wonogiri currently i am studying at vocational school telkom purwokerto</Text>
                    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
                    </View>
                    {/* activeOpacity={0.6} */}
             
            </ImageBackground>

        
     

      </View>
    );
  };
  
  
  const styles  = StyleSheet.create({

    titkk: {
        width: 67,
        height: 94,
        position: 'absolute',
        padding: 5,
        top: 0,
        left: -60,

    },
    titk: {
        width: 67,
        height: 94,
        position: 'absolute',
        padding: 5,
        bottom: -20,
        right: -40,

    },
    img2: {
        width: 60,
        height: 60,
        position: 'absolute',
        padding: 5,
        top: -50,
        right: -120,

    },
    img5: {
        width: 60,
        height: 60,
        position: 'absolute',
        padding: 5,
        bottom: -50,
        right: -120,

    },
    img3: {
        width: 60,
        height: 60,
        position: 'absolute',
        padding: 5,
        bottom: -50,
        left: -120,

    },
    img4: {
        width: 80,
        height: 80,
        position: 'absolute',
        padding: 5,
        top: -70,
        left: -130,

    },
  
    img: {
      width: 144,
      height: 144,
      borderRadius: 100,

      
  
    },
    container:{
        flex: 1,
        marginTop: -90,
        textAlign: 'center',
        position: 'relative',
        top: 70,
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#2A6E6C'
    },
    container2:{
    
       bottom: 10,
        textAlign: 'center',
        position: 'relative',
        top: 70,
        alignItems: 'center',
        padding: 8,
        flex: 1
      
     
    },
    text: {
      marginTop: 20,
      marginHorizontal: 20,
  
    },
    button:{
      width: 220,
      height: 35,
      backgroundColor:'blue',
      marginTop: 40,
      borderRadius: 20
  
    },
    profilWrapper:{
        width:200,
        height: 200,
        borderWidth: 10,
        borderColor: '#97FEED',
        width:163,
        height: 163,
        borderRadius: 163/2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120,
      
        position:'relative'

    },
    icon1 :{
        position: 'absolute',
        width: 36,
        height: 36,
        bottom: 0,
        left: 0 
       
    },
    icon2 :{
        position: 'absolute',
        width: 46,
        height: 46,
        top: 0,
        right:-20
    },
    back:{
        width: 460,
        height: 600,
        marginTop: 60
    },
    button: {
        marginTop : 30,
        alignItems: 'center',
        backgroundColor: '#BEFFF7',
        padding: 15,
        width: 170,
        height: 50,
        borderRadius: 26
      },
    

  
  
  })
  export default Screen1;
