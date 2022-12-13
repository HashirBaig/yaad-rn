import { View, Text } from "react-native";

import JournalList from "./JournalList";
import JournalForm from "./JournalForm";

const Journal = () => {
  return (
    <View>
      <JournalList />
      <JournalForm />
    </View>
  );
};

export default Journal;
