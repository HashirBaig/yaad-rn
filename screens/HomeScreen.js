import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Header, Journal } from "../components";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    // eslint-disable-next-line
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-between">
      <Header />
      <Journal />
    </SafeAreaView>
  );
};

export default HomeScreen;
