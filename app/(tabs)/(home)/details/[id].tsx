import { useLocalSearchParams } from "expo-router";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen(){
    const { id } = useLocalSearchParams();

    return(
        <View style={styles.container}>
            <Text>Details of user {id}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})