import { View, Text, Image } from "react-native";
import { FireIcon } from "react-native-heroicons/solid";
import { ArrowLeftOnRectangleIcon } from "react-native-heroicons/outline";
import { amber, red } from "../const/colors";

const Header = () => {
  return (
    <View className="w-full h-fit mt-10 px-2 py-3 flex-row items-center justify-between shadow-md bg-slate-900">
      <Image
        className="h-10 w-10 rounded-xl"
        source={require("../assets/yaad-logo.png")}
      />
      <View className="flex-row items-center hover:bg-slate-700">
        <FireIcon size={20} color={amber} />
        <Text className="text-slate-400 font-semibold text-base">0</Text>
      </View>
      <View className="rotate-180">
        <ArrowLeftOnRectangleIcon size={40} color={red} />
      </View>
    </View>
  );
};

export default Header;
