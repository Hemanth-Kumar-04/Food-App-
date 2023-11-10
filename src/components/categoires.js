import {View, Text, Touchable} from 'react-native';
import React from 'react';
import { Image, ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { categoryData } from '../constants';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Categories({activeCategory, setActiveCategory}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{
        paddingHorizontal:15,
    }}
    >
      {
         categoryData.map((cat,index)=>{
          let isActive = cat.name==activeCategory;
          let activeButtonClass = isActive? 'bg-amber-400':'bg-black/10';

          return(
            <TouchableOpacity key={index}
            onPress={()=>setActiveCategory(cat.name)}
            className="flex items-center space-y-1">
             <View className={"rounded-full p-[6px]" +activeButtonClass}>
               <Image 
                  source={{uri: cat.image}}
                  style={{width: hp(6),height:hp(6)}}
                  className="rounded-full"
               />
             </View>
             <Text className="text-neutral-600" style={{fontSize: hp(1.6)}}>{cat.name}</Text>
            </TouchableOpacity>
            )
         })
      }
      </ScrollView>
    </Animated.View>
  );
}
