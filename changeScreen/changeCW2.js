import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  ImageBackground, 
  ScrollView,
  Dimensions } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const banner = { uri: "https://www.html.am/templates/downloads/bryantsmith/hdmonochrome/mainImage.jpg" };
  const bg = { uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBxASBgYGBg0PBgYGDRAICRANFBEWFhQRExMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANMA7wMBIgACEQEDEQH/xAAZAAEBAQADAAAAAAAAAAAAAAAABAIDBQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAExL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9u2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7NgloUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAjqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKghqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1Kg6+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqCCpVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsCGpVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqCKhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCShRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2Dg0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="};
  
  const window = Dimensions.get('window');
  const screen = Dimensions.get('screen');
  const [ dimensions, setDimensions ] = useState({window, screen});
  const [ rotate, setRotate ] = useState('portrait');

  const rotateScreen = () => {
      if(dimensions.screen.width > dimensions.screen.height){
            setRotate('landscape')
      }
      else{
            setRotate('portrait')
      }console.log(rotate);
  };

  const onChange = ({window, screen}) => {
        setDimensions({window, screen});
  };
  useEffect( () => {
        Dimensions.addEventListener('change', onChange);
    return () => {
        Dimensions.removeEventListener('change', onChange), rotateScreen();
    }
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#fff', '#000']} style={styles.bodyBg}>
      <View style={rotate === 'portrait'? styles.nav: styles.narLandscape}>
        {/* Nav bar */}
      <ScrollView 
        horizontal={true}
        showHorizontalScrollIndicator={false}>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Home</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>About</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Portfolio</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Services</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Contact</Text>
      </ScrollView>
      </View>
    
      {rotate === "portrait" ? 
      <View style={styles.bannerBorder}>
        {/* Banner image */}
        <ImageBackground source={banner}
          style={styles.bannerBg}>
        <Text style={styles.bannerHead}>HD Monochrome</Text>
        <Text style={styles.bannerSubHead}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
        </ImageBackground>
      </View>: null}

      <View style={styles.bodyBorder }>
        {/* Body */}
        <ScrollView style={styles.content}>
          <Text style={styles.head}>High Definition Monochrome</Text>
              <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              
              <Text style={styles.quote}>This is a block quote, use it to include quotes from yourself or others. All you have to do to include this element is wrap some text around blockquote tags</Text>
              
          <Text style={styles.head}>Titles are H1 Tags</Text>
              <Text style={styles.bodyText}>Since the titles are H1 tags, try to include your keywords in them as search engines will look at them as being important content.</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
              
          <Text style={styles.head}>Yet Another One!</Text>
              <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>   
          

        </ScrollView>
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    
  },
  bodyBg:{
    height: '100%',
    width: '100%',
    padding: 10
  },
  nav: {
    flex: 0.1,
    marginLeft: '20@s',
    marginTop: '35@mvs',
    marginBottom: '5@s',
    paddingHorizontal: '10@mvs'
    
  },
  narLandscape: {
    width: '100%',
    alignItems: 'center'
  },
  navText: {
    fontFamily: 'Georgia',
    fontSize: '20@mvs0.3',
    marginHorizontal: '20@mvs',
  },
  navTextLandS:{
    fontFamily: 'Georgia',
    fontSize: '20@mvs0.3',
    marginHorizontal: '35@mvs',
  },
  bannerBorder:{
    borderWidth: '4@s',
    width: '330@s',
    alignSelf: 'center'
  },
  bannerBg: {
    width: '100%',
    height: '150@s',
    resizeMode: "cover",
  },
  bannerHead:{
    fontFamily: 'Georgia',
    fontSize: '25@mvs',
    paddingHorizontal: '10@s',
    paddingTop: '10@s'
  },
  bannerSubHead:{
    fontFamily: 'Georgia',
    fontSize: '13@mvs',
    color: '#1F1603',
    paddingHorizontal: '10@s'
  },

  bodyBorder:{
    flex: 1,
    borderWidth: '4@s',
    marginTop: '15@mvs',
    alignSelf: 'center'
    
  },
  content:{
    width: '320@s',
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  head:{
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: '20@mvs0.5',
    color: '#1F1603',
    marginBottom: 10
  },
  bodyText: {
    fontFamily: 'Georgia',
    fontSize: '14@mvs0.5',
    marginVertical: 10, 
    lineHeight: '25@mvs0.2',
  },

  quote:{
    width: '75%',
    fontFamily: 'Helvetica',
    lineHeight: '22@mvs',
    
    padding: '15@mvs',
    borderWidth: '1@mvs',
    borderStyle: 'dashed',
    marginVertical: '20@mvs',
    marginLeft: '10@mvs'
  }
  
});
