import {View, Text} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

export default function Categories() {
  return (
    <View>
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{
        paddingHorizontal:15,
    }}
      >
      {

      }
      </ScrollView>
    </View>
  );
}
