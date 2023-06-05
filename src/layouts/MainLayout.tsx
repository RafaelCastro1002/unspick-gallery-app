import * as React from 'react';
import { Image } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper';


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MainLayout = () => {
    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', focusedIcon: 'home', unfocusedIcon: 'gallery_thumbnail', activeColor: "red"},
    { key: 'gallery', title: 'Albums', focusedIcon: 'gallery_thumbnail' },
    { key: 'panorama', title: 'Recents', focusedIcon: 'gallery_thumbnail' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    gallery: AlbumsRoute,
    panorama: RecentsRoute,
  });

    return (
        <BottomNavigation 
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            compact={false}
            labeled={false}
            renderIcon={(props) => {
              const { route } = props

              console.log('props: ', props);
              

              const pathIcon = `../assets/icons/${route.focusedIcon}.svg`
              console.log('pathIcon: ', pathIcon);
              
              // const icon = require(pathIcon)

              return <Image
                source={require(`../assets/icons/gallery_thumbnail.png`)}
                style={{tintColor: 'red', width: 30, height: 30}}
              />
            }}
            barStyle={{ 
              backgroundColor: 'white', 
              alignItems: 'center', 
              borderTopColor: '#888098',
              borderTopWidth: 1
            }}
        />
    )
}

export default MainLayout