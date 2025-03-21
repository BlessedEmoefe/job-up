import {
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from "../constants";
import {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
} from "../components";


export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
