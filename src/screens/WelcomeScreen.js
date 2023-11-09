import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      {/* logo image with rings */}
      <View>
        <View>
          <Image
            source={require('../../assets/images/welcome.png')}
            style={{width: 200, height: 200}}
          />
        </View>
      </View>
    </View>
  );
}
