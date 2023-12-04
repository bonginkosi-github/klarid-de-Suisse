import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function saveData(stringDataset) {
    try {
        var db = firebase.firabase();

        db.collection("model").doc("trainedModel").set({
            stringDataset
        })
    }
    catch(err) {
        console.log("error daving the model")
        Alert("Alert:", "Opps" + err.message)
    }
}

export async function loadData() {

    var db = firebase.firestore();

    var modelRef = db.collection("model").doc("trainedModel"); 

    //referencing to the certain collection or document to the firebase, checking if there is any existing.
    modelRef.get().then((doc) => {
        if(doc.exists) {
            let dataObj = doc.data();
            console.log("data loaded successfully");
            let result = dataObj.stringDataset;

            return result;

        } else {
            console.log("No such document");
            Alert("Alert", "Opps, no such document")
        }
    })
    .catch((error) => {
        console.log("error loading data", error.message);
        Alert("Alert", "Opps" + error.message)
    })
}