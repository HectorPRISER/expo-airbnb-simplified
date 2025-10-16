import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import data from '../../mockData';
import Detail from '../../components/Detail';

export default function LogementDetail() {
    const { id } = useLocalSearchParams();
    const item = data.find((apt) => apt.id === Number(id));

    return (
        <View >
            <Detail
                image={item.image}
                title={item.title}
                city={item.city}
                price={item.price}
                onPress={() => {}}
            />
        </View>
    );
}
