import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
	card: {
		justifyContent: "center",
		alignItems: "center", // if not "alignItems", then default alignItems is 'stretch'
		marginTop: 36,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 6, // corner
		elevation: 4, // Android-specific to add shadow
		shadowColor: "black", // the following "shadow..." are iOS-specific
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
