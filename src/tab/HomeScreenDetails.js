import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'

export class HomeScreenDetails extends Component{
    render(){
        return (
            <SafeAreaView style={ { flex: 1, } }>
              <CustomHeader title='Home Details' navigation={this.props.navigation}/>
              <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
                <Text>Home Details!</Text>
              </View>
            </SafeAreaView>
          );
    }
}



