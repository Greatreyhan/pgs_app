import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {Link} from 'react-router-native';
import {styled} from 'nativewind';
import {Gear, Rainy} from '../assets';
import {LineChart} from 'react-native-chart-kit';
const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

const History = () => {
  return (
    <View>
      {/* Header */}
      <StyledView className="w-full flex flex-row justify-center items-between">
        <StyledText className="flex-1 m-3.5 text-slate-950 font-bold text-xs">
          PGS
        </StyledText>
        <StyledLink to="/profile">
          <StyledImage className="w-6 h-6 m-3" source={Gear} />
        </StyledLink>
      </StyledView>
      <StyledView className="w-11/12 mx-auto flex flex-row justify-center bg-teal-800 pt-5 rounded-md shadow-lg">
        <LineChart
          data={{
            labels: ['6', '9', '12', '15', '18', '21'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={320} // from react-native
          height={220}
          yAxisSuffix="%"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#115e59',
            backgroundGradientFrom: '#115e59',
            backgroundGradientTo: '#115e59',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 8,
            },
            propsForDots: {
              r: '3',
              strokeWidth: '1',
              stroke: '#0d9488',
            },
          }}
          bezier
          style={{
            marginVertical: 2,
            borderRadius: 5,
          }}
        />
      </StyledView>
      <StyledView className='w-11/12 mt-3 mx-auto flex flex-row'>
        <StyledPressable className='px-6 py-2 bg-teal-800 rounded-md'><StyledText className='text-white font-bold text-xs'>Suhu</StyledText></StyledPressable>
        <StyledPressable className='px-6 py-2 bg-slate-600 rounded-md ml-2'><StyledText className='text-white font-bold text-xs'>Kelembapan</StyledText></StyledPressable>
        <StyledPressable className='px-6 py-2 bg-slate-600 rounded-md ml-2'><StyledText className='text-white font-bold text-xs'>Kecerahan</StyledText></StyledPressable>
      </StyledView>
      <StyledView className='mt-2 w-full justify-center gap-x-1 mx-auto flex flex-row'>

        <StyledView className=' bg-teal-800 px-6 py-3 rounded-md shadow-lg flex flex-col justify-center items-center'>
          <StyledImage className='w-8 h-8' source={Rainy} />
          <StyledText className='text-white font-bold text-xs mt-1.5'>Senin</StyledText>
        </StyledView>
        <StyledView className=' bg-teal-800 px-6 py-3 rounded-md shadow-lg flex flex-col justify-center items-center'>
          <StyledImage className='w-8 h-8' source={Rainy} />
          <StyledText className='text-white font-bold text-xs mt-1.5'>Selasa</StyledText>
        </StyledView>
        <StyledView className=' bg-teal-800 px-6 py-3 rounded-md shadow-lg flex flex-col justify-center items-center'>
          <StyledImage className='w-8 h-8' source={Rainy} />
          <StyledText className='text-white font-bold text-xs mt-1.5'>Rabu</StyledText>
        </StyledView>
        <StyledView className=' bg-teal-800 px-6 py-3 rounded-md shadow-lg flex flex-col justify-center items-center'>
          <StyledImage className='w-8 h-8' source={Rainy} />
          <StyledText className='text-white font-bold text-xs mt-1.5'>Kamis</StyledText>
        </StyledView>

      </StyledView>
    </View>
  );
};

export default History;
