import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
function IconButton({ icon, color, onPress }) {
  return (
    <View
      style={[
        ({ pressed }) => {
          pressed && styles.pressed;
        },
        styles.container,
      ]}
    >
      <Pressable onPress={onPress}>
        <AntDesign name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  pressed: {
    opacity: 0.7,
  },
});
