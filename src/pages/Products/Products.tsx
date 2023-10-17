import React from 'react';
import {FlatList} from 'react-native';
import styles from './Products.style';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);
  /*console.log('render');
  console.log({loading, data: data.length, error});
  console.log('-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+');*/
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProducts = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderProducts}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Products;
