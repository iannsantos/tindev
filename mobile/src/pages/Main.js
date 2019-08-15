import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Main() {
  return (
    <SafeAreaView style={ styles.container }>
      {/* 53 min */}
      <Image source={logo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }
});