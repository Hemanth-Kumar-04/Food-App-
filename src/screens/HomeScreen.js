import {View, Text, StatusBar, TextInputComponent} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-reanimated/lib/typescript/Animated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassCircleIcon} from 'react-native-heroicons/outline';

const [activeCategory, setActiveCategory] = useState("Beef")
export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14">
        {/* avatar and bell icon*/}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require('../../assets/images/welcome.png')}
            style={{height: hp(5), width: hp(5.5)}}
          />
          <BellIcon size={hp(3)} color="gray" />
        </View>

        {/* greetings andf punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{fontSize: hp(1.7)}} className="text-neutral-600">
            Hello, Noman
          </Text>
          <View>
            <Text
              style={{fontSize: hp(3.8)}}
              className="font-semibold text-neutral-600">
              Make your own food,
            </Text>
          </View>
          <Text
            style={{fontSize: hp(3.8)}}
            className="font-semibold text-neutral-600">
            stay at ,<Text className="text-amber-400">Home</Text>
          </Text>
        </View>
        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
            <TextInput placeholder= "Search any recipe"
            placeholderTextColor="gray"
            style={{fontSize: hp(1.7)}}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
            <View className="bg-white rounded-fulll p-3">
                <MagnifyingGlassCircleIcon size={hp(2.5)} strokeWidth={3} color="gray" />
            </View>
        </View>
        {/* categories */}
        <View>
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </View>
      </ScrollView>
    </View>
  );
}
