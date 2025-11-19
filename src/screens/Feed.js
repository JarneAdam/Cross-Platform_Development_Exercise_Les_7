import { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { users } from '../config/data';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('UserDetail', { user: user });
  };

  render() {
    return (
      <ScrollView>
        {users.map((user) => (
          <ListItem
            key={user.login.username}
            bottomDivider
            onPress={() => this.onLearnMore(user)}
          >
            <Avatar source={{ uri: user.picture.thumbnail }} />
            <ListItem.Content>
              <ListItem.Title>{`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ScrollView>
    );
  }
}

export default Feed;
