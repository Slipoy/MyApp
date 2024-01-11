import React from "react";
import {
    View,
    StyleSheet,
    TextInput
} from "react-native";
import SearchIcon from "../assets/SearchIcon";



const SearchInput = ({value, onChangeText}) =>{
    return(
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'rgba(30, 30, 31, 1)' }}>
            <SearchIcon color={'white'}/>
            <TextInput
                placeholder="Search"
                placeholderTextColor="white"
                onChangeText={onChangeText}
                value={value}
                style={styles.textInput}
            />
        </View>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row', alignItems:'center', backgroundColor:'rgba(30, 30, 31, 1)'
    },
    textInput:{
        flex:1,
        height: 40,
        paddingTop: 10,
        marginBottom: 10,
        color: 'white'
    }
});