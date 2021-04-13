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

      <View style={styles.bodyBorder}>
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
    flex: 1,
    borderWidth: '4@s',
    marginTop: '15@mvs',
    marginBottom: 10
    
  },
  content:{
    width: '320@s',
    padding: 15,
    marginBottom: 10
  },
  head:{
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: '20@mvs0.5',
    marginBottom: 10
  },
  bodyText: {
    fontFamily: 'Georgia',
    fontSize: '14@mvs0.5',
    marginTop: 5, 
    marginBottom: 20, 
    lineHeight: '25@mvs0.2',
  },
  
});
