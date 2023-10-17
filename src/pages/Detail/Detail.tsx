import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const url = `${Config.API_URL}/${id}`;
  const {loading, data, error} = useFetch(url);
  /*console.log('URL: ' + url);
  console.log('render Detail');
  console.log({loading, data: data.length, error});
  console.log('-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+');*/

  if (loading) {
    return <Loading />;
  }
  // Because backend return 200 although there is no data in response,
  // we need to handle this case as error too.
  if (!loading && (error || !data)) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );

};

export default Detail;
