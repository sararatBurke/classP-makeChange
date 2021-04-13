import React from 'react';
import { Text, View, 
  ImageBackground, ScrollView } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default function App() {

  const banner = { uri: "https://www.html.am/templates/downloads/bryantsmith/hdmonochrome/mainImage.jpg" };
  const bg = { uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBxASBgYGBg0PBgYGDRAICRANFBEWFhQRExMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANMA7wMBIgACEQEDEQH/xAAZAAEBAQADAAAAAAAAAAAAAAAABAIDBQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAExL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9u2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7NgloUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAjqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKghqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1Kg6+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqCCpVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsCGpVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqCKhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCShRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2Dg0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="};
  
  return (
    <View style={styles.container}>

      <View style={styles.nav}>
        {/* Nav bar */}
      <ScrollView 
        horizontal={true}
        showHorizontalScrollIndicator={false}>
              <Text style={styles.navText}>Home</Text>
              <Text style={styles.navText}>About</Text>
              <Text style={styles.navText}>Portfolio</Text>
              <Text style={styles.navText}>Services</Text>
              <Text style={styles.navText}>Contact</Text>
      </ScrollView>
      </View>
      <View style={styles.bannerBorder}>
        {/* Banner image */}
        <ImageBackground source={banner}
          style={styles.bannerBg}>
        <Text>HD Monochrome</Text>
        <Text>An XHTML 1.0 Strict Template by Bryant Smith</Text>
        </ImageBackground>
      </View>
      
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
  nav: {
    flex: 0.1,
    marginTop: 50,
    
  },
  navText: {
    fontFamily: 'Georgia',
    fontSize: '20@mvs0.3',
    marginHorizontal: '25@mvs',
  },
  bannerBorder:{
    borderWidth: '4@s',
  },
  bannerBg: {
    width: '320@s',
    height: '150@s',
    resizeMode: "stretch",
    padding: 20,
  },

  bodyBorder:{
    borderWidth: '4@s',
    marginTop: 10
  },
  
});
