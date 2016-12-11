"use strict";

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    View
} from 'react-native';
import styles from "./Styles/Styles.js";


export default class Template extends Component {
    actions=[{title: 'Settings', show: 'always'}];
    constructor(props) {
        super(props);
    }
    render = function() { 
        return ( 
            <View>
                <ToolbarAndroid 
                    logo={require('./Icons/ic_language_black_24px.svg')} 
                    title="AwesomeApp"
                    actions={this.actions}
                    style={styles.Toolbar}
                    onActionSelected={this.onActionSelected} />
                <Text>sdf</Text>
            </View> 
        ); 
    }.bind(this);
    onActionSelected = function(position) {
        if (position === 0) {
            
        } 
    }.bind(this);
}
