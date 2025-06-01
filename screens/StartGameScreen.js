import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({onPickNumber}) {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}

    function resetInputNumber() {
        setEnteredNumber('');
    }

	function confirmInputHandler() {
		const chosenNumber = Number.parseInt(enteredNumber);

		if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number!",
				"Number has to be a number between 1 and 99.",
				[{ text: 'Okay', style: 'destructive', onPress: resetInputNumber }],
			);
			return;
		}

        onPickNumber(chosenNumber);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={numberInputHandler}
				value={enteredNumber}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center", // if not "alignItems", then default alignItems is 'stretch'
		marginTop: 100,
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
	numberInput: {
		height: 50,
		width: 80,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});
