import React, {Component} from 'react';
import { Switch, View, Text } from 'react-native';

const withScaledSheetSwitch = ChildComponent =>
    class extends Component {
        state = {
            scale: true,
        };
        render() {
            return <View style={{flex: 1}}>
                <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10}}>
                    <Text style={{fontSize: 16}}>size-matters enabled?</Text>
                <Switch value={this.state.scale} onValueChange={() => this.setState(prevState => ({scale: !prevState.scale}))}/>
                </View>
                <ChildComponent {...this.props} scale={this.state.scale}/>
            </View>
        }

    };

export default withScaledSheetSwitch;