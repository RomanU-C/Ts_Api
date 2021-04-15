import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { TouchableHighlight } from "react-native";
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/userActionCreator';
import { useActions } from '../hooks/useActions';

const One: React.FC = () => {
    const { loading, users, error } = useTypedSelector(state => state.user)
    const{fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <Text>Загружаю пользователей</Text>
    }
    if (error) {
        return <Text>Ой чтото не так</Text>
    }
    return (
        <View>
            {users.map(user =>
               <ListItem
               Component={TouchableHighlight}
               containerStyle={{}}
               disabledStyle={{ opacity: 0.5 }}
               onLongPress={() => console.log("onLongPress()")}
               onPress={() => console.log("onLongPress()")}
               pad={20}
             >
               <Avatar
                 source={{
                   uri:
                     "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
                 }}
               />
               <ListItem.Content>
                 <ListItem.Title>
                   <Text>{user.name}</Text>
                 </ListItem.Title>
                 <ListItem.Subtitle>
                   <Text>{user.address.city}</Text>
                 </ListItem.Subtitle>
               </ListItem.Content>
             </ListItem> 
            )}
        </View>
    );
};


export default One;