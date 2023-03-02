import React, {useMemo} from 'react'
import {Text, View, TextInput, Picker} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MediaType, Asset} from 'expo-media-library';

const inscription_suite_livreur = () => {

    const navigation = useNavigation();

    const onPressInscriptionSuiteLivreur = () => {
        navigation.navigate('notification_livreur');
    }
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [numero, setNumero] = useState();
    const [moto, setMoto] = useState();
    const [openImage, setOpenImage] = useState(false);
    let polar_text_1 = 'orange';
    let polar_text_2 = 'blue';
    const widgetSettings = useMemo(
        () => ({
            getImageMetaData: false,
            initialLoad: 100,
            assetsType: [MediaType.photo, MediaType.video],
            minSelection: 1,
            maxSelection: 3,
            existingSelectionIds: ["<selected Id 1>", "<selected Id 2>", "<selected Id N>"],
            portraitCols: 4,
            landscapeCols: 4,
        }),
        []
    )

    const widgetErrors = useMemo(
        () => ({
            errorTextColor: polar_text_2,
            errorMessages: {
                hasErrorWithPermissions: "Veuillez accorder la permission",
                hasErrorWithLoading: "Autoriser les médias s'il vous plaît",
                hasErrorWithResizing: "Il y a eu une erreur de redimensionnement",
                hasNoAssets: "Il n'y avait pas d'image",
            },
        }),
        []
    )
    let mainWithOpacity = 'green';
    let bg='yellow';
    let main ='lightgray';
    let _textStyle = '#fff';
    let _buttonStyle = 'blue';
    const widgetStyles = useMemo(
        () => ({
            margin: 2,
            bgColor: bg,
            spinnerColor: main,
            widgetWidth: 99,
            screenStyle:{
                borderRadius: 5,
                overflow: "hidden",
            },
            widgetStyle:{
                margin: 10
            },
            videoIcon: {
                Component: Ionicons,
                iconName: 'ios-videocam',
                color: polar_text_1,
                size: 20,
            },
            selectedIcon: {
                Component: Ionicons,
                iconName: 'ios-checkmark-circle-outline',
                color: 'white',
                bg: mainWithOpacity,
                size: 26,
            },
        }),
        [polar_text_1, mainWithOpacity]
    )

    const widgetNavigator = useMemo(
        () => ({
            Texts: {
                finish: 'finish',
                back: 'back',
                selected: 'selected',
            },
            midTextColor: polar_text_2,
            minSelection: 3,
            buttonTextStyle: _textStyle,
            buttonStyle: _buttonStyle,
            onBack: () => navigation.goBack(),
            onSuccess: (data) => onSuccess(data),
        }),
        []
    )
    function openLibrary(){
        setOpenImagesPicker(true)
      }
      
  return (
        <View style={styles.root}>
            <Text>Devenez liveur en terminant votre inscription</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNom}
                value={nom}
                placeholder="Nom de famille"
                required={true}
				errorMessage="Obligatoire"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPrenom}
                value={prenom}
                placeholder="Votre prénom"
                required={true}
				errorMessage="Obligatoire"
            />
            <TextInput
                style={styles.input}
                onChangeText={setNumero}
                value={numero}
                placeholder="Numéro de téléphone"
                keyboardType="numeric"
                required={true}
				errorMessage="Obligatoire"
            />
            {
            openImage &&<AssetsSelector
                Settings={widgetSettings}
                Errors={widgetErrors}
                Styles={widgetStyles}
                Navigator={widgetNavigator} // optional
                CustomNavigator={{          // optional
                Component: CustomNavigator,
                props: {
                    backFunction: true,
                    onSuccess,
                    text: T.ACTIONS.SELECT,
                },
            }}
            />
            }
            <TouchableOpacity style={styles.button} onPress={openLibrary}>
                <Text>Votre photo pour une identification</Text>
            </TouchableOpacity>
            <Picker
                selectedValue={moto}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setMoto(itemValue)}>
                <Picker.Item label="Oui" value="true" />
                <Picker.Item label="Non" value="false" />
            </Picker>

            <Button
                onPress={onPressInscriptionSuiteLivreur}
                title="Je veux être livreur"
                color="orange"
            />
        </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flex:1,
        margin:20,
    },
});

export default inscription_suite_livreur;
