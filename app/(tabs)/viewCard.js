import { FlatList, StyleSheet, View } from 'react-native';
import data from '../../mockData.js';
import Detail from '../../components/Detail.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
});


const ViewCard = () => {  

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Detail image={item.image} title={item.title} city={item.city} price={item.price}/>
          </View>
        )}
      />
    </View>
  );
};

export default ViewCard;
