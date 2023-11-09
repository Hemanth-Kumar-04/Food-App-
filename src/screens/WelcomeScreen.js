import {View, Text, StatusBar, Image} from 'react-native';
import React, { useEffect } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';
import {useSharedValue} from 'react-native-reanimated';

export default function WelcomeScreen() {
  const ring1padding = userSharedValue(0);   
  const ring2padding = userSharedValue(0);

  useEffect(()=>{
    setTimeout(()=>
      ring1padding.value = withSpring(ring1padding.value+hp(5),100));
      setTimeout(()=>
      ring2padding.value = withSpring(ring2padding.value+hp(5.5),100));
  },[])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      
      {/* logo image with rings */}
      <Animated.View className="bg-white/20 rounded-full " style={{padding: ring2padding}}>
        <Animated.View className="bg-white/20 rounded-full " style={{padding: ring1padding}}>
          <Image
            source={require('../../assets/images/welcome.png')}
            style={{width: hp(20), height: hp(20)}}
          />
        </Animated.View>
      </Animated.View>

      {/* title and punchline */}
      <View className="flex items-center space-y-2">
        <Text
          style={{fontSize: hp(7)}}
          className="font-bold text-white tracking-widest">
          Foody
        </Text>
        <Text
          style={{fontSize: hp(2)}}
          className="font-medium text-white tracking-widest">
          Food is always right
        </Text>
      </View>
    </View>
  );
}