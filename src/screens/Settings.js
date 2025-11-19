import { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F2F2F2', marginTop: 50 }}>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Notifications</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Profile</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Password</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider style={{ marginTop: 30 }}>
          <ListItem.Content>
            <ListItem.Title>Sign out</ListItem.Title>
          </ListItem.Content>
          <Icon name='cancel' />
        </ListItem>
      </View>
    );
  }
}

export default Settings;
