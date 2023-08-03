import React, {useState, useEffect} from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {Link} from 'react-router-native';
import {styled} from 'nativewind';
import {Gear, W01, W02, W03, W04, W09, W10, W11, W13, W50} from '../assets';
import {LineChart} from 'react-native-chart-kit';
import {db} from './config';
import {onValue, ref} from 'firebase/database';

const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

const History = () => {
  const [showData, setShowData] = useState(0);
  const [dataTanah, setDataTanah] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
  const [dataTemperature, setDataTemperature] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
  const [dataKecerahan, setDataKecerahan] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
  const [synthesizedData, setSynthesizedData]: any[] = useState([]);
  useEffect(() => {
    const desiredDate = new Date();
    const formattedDate = desiredDate.getFullYear() + "/" + (desiredDate.getMonth() + 1) + "/" + desiredDate.getDate();
    console.log(formattedDate);
    // Suhu
    const querySuhu = ref(db, 'data/1/temperature/'+ formattedDate);
    onValue(querySuhu, snapshot => {
      const data = snapshot.val(); 
      if (snapshot.exists()) {
        let newArr = [];
        for(let i = 0; i < 24;i++){
          if(data[`${i}`] != undefined) newArr[i] = data[`${i}`]
          else newArr[i] = 0
        }
        setDataTemperature(newArr);
      }
    });

    // Tanah
    const queryTanah = ref(db, 'data/1/soil'+formattedDate);
    onValue(queryTanah, snapshot => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        let newArr = [];
        for(let i = 0; i < 24;i++){
          if(data[`${i}`] != undefined) newArr[i] = data[`${i}`]
          else newArr[i] = 0
        }
        setDataTanah(newArr);
      }
    });

    // Kecerahan
    const queryKecerahan = ref(db, 'data/1/light'+formattedDate);
    onValue(queryKecerahan, snapshot => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        let newArr = [];
        for(let i = 0; i < 24;i++){
          if(data[`${i}`] != undefined) newArr[i] = data[`${i}`]
          else newArr[i] = 0
        }
        setDataKecerahan(newArr);
      }
    });
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=-7.23&lon=110.01&units=metric&appid=11da0baf925586118975d7954371b277',
    )
      .then(response => response.json())
      .then(data => {
        const dailyForecasts: {[date: string]: any[]} = {};
        data.list.forEach((item: {dt_txt: string}) => {
          // get date
          const date = item.dt_txt.split(' ')[0];
          // get hours
          const hours = parseInt(item.dt_txt.split(' ')[1].split(':')[0], 10);

          if (!dailyForecasts[date]) {
            dailyForecasts[date] = [];
          }
          const hourType = [0, 3, 6, 9, 12, 15, 18, 21];
          const currentHour = new Date().getHours();
          hourType.forEach(type => {
            if (currentHour == type) {
              if (hours == type) dailyForecasts[date].push(item);
            } else if (type - currentHour > 0 && type - currentHour < 3) {
              if (hours == type) dailyForecasts[date].push(item);
            } else if (currentHour > 21) {
              if (hours == type) dailyForecasts[date].push(item);
            }
          });
        });
        const dataInArray = [];
        for (const key in dailyForecasts) {
          if (dailyForecasts.hasOwnProperty(key)) {
            dataInArray.push(...dailyForecasts[key]);
          }
        }
        const daysOfWeek = [
          'Minggu',
          'Senin',
          'Selasa',
          'Rabu',
          'Kamis',
          "Jum'at",
          'Sabtu',
        ];
        const forecastShow: any[] = [];
        dataInArray.map(data => {
          let imageWeather = W01;
          const nameWeather = `${data.weather[0].icon[0]}${data.weather[0].icon[1]}`;
          if (nameWeather == '01') {
            imageWeather = W01;
          } else if (nameWeather == '02') {
            imageWeather = W02;
          } else if (nameWeather == '03') {
            imageWeather = W03;
          } else if (nameWeather == '04') {
            imageWeather = W04;
          } else if (nameWeather == '09') {
            imageWeather = W09;
          } else if (nameWeather == '10') {
            imageWeather = W10;
          } else if (nameWeather == '11') {
            imageWeather = W11;
          } else if (nameWeather == '13') {
            imageWeather = W13;
          } else if (nameWeather == '50') {
            imageWeather = W50;
          }

          const dateObject = new Date(data.dt * 1000);
          const volatileData = {
            time: data.dt,
            day: daysOfWeek[dateObject.getDay()],
            weather_desc: data.weather[0].description,
            weather_icon: imageWeather,
            weather_temp: data.main.feels_like,
            weather_humidity: data.main.humidity,
            weather_pressure: data.main.pressure,
          };
          forecastShow.push(volatileData);
        });
        setSynthesizedData(forecastShow);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
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
        {(dataTemperature != null && showData == 0) ? (
          <>
            <LineChart
              data={{
                labels: [
                  '1',
                  '3',
                  '5',
                  '7',
                  '9',
                  '11',
                  '13',
                  '15',
                  '17',
                  '19',
                  '21',
                  '23',
                ],
                datasets: [
                  {
                     data: dataTemperature,
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
          </>
        ) : null}
        {(dataTanah != null && showData == 1) ? (
          <>
            <LineChart
              data={{
                labels: [
                  '1',
                  '3',
                  '5',
                  '7',
                  '9',
                  '11',
                  '13',
                  '15',
                  '17',
                  '19',
                  '21',
                  '23',
                ],
                datasets: [
                  {
                    data: dataTanah,
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
          </>
        ) : null}
        {(dataKecerahan != null && showData == 2) ? (
          <>
            <LineChart
              data={{
                labels: [
                  '1',
                  '3',
                  '5',
                  '7',
                  '9',
                  '11',
                  '13',
                  '15',
                  '17',
                  '19',
                  '21',
                  '23',
                ],
                datasets: [
                  {
                    data: dataKecerahan,
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
          </>
        ) : null}
      </StyledView>
      <StyledView className="w-11/12 mt-3 mx-auto flex flex-row justify-between">
        {
          showData == 0 ? 
          <StyledPressable className="px-6 py-2 bg-teal-800 rounded-md">
          <StyledText className="text-white font-bold text-xs">Suhu</StyledText>
        </StyledPressable>
          : 
          <StyledPressable className="px-6 py-2 bg-slate-600 rounded-md" onPress={()=>setShowData(0)}>
          <StyledText className="text-white font-bold text-xs">Suhu</StyledText>
        </StyledPressable>
        }
        {
          showData == 1 ?
          <StyledPressable className="px-6 py-2 bg-teal-800 rounded-md ml-2">
          <StyledText className="text-white font-bold text-xs">
            Tanah
          </StyledText>
        </StyledPressable>
        :
        <StyledPressable className="px-6 py-2 bg-slate-600 rounded-md ml-2" onPress={()=>setShowData(1)}>
          <StyledText className="text-white font-bold text-xs">
            Tanah
          </StyledText>
        </StyledPressable>
        }
        {
          showData == 2 ?
          <StyledPressable className="px-6 py-2 bg-teal-800 rounded-md ml-2">
          <StyledText className="text-white font-bold text-xs">
            Kecerahan
          </StyledText>
        </StyledPressable>
        :
        <StyledPressable className="px-6 py-2 bg-slate-600 rounded-md ml-2" onPress={()=>setShowData(2)}>
          <StyledText className="text-white font-bold text-xs">
            Kecerahan
          </StyledText>
        </StyledPressable>
        }
      </StyledView>
      <StyledView className="mt-2 w-full justify-center gap-x-1 mx-auto flex flex-row">
        {synthesizedData
          ? synthesizedData.map((cst: any, i: number) => {
              if (i == 1) {
                return (
                  <StyledView
                    key={i}
                    className=" bg-teal-800 w-20 py-3 rounded-md shadow-lg flex flex-col justify-center items-center">
                    <StyledImage
                      className="w-12 h-12"
                      source={cst.weather_icon}
                    />
                    <StyledText className="text-white font-bold text-xs mt-1.5">
                      {cst.day}
                    </StyledText>
                  </StyledView>
                );
              } else if (i > 1 && i < 5) {
                return (
                  <StyledView
                    key={i}
                    className=" bg-white border-2 border-teal-800 w-20 py-3 rounded-md shadow-lg flex flex-col justify-center items-center">
                    <StyledImage
                      className="w-12 h-12"
                      source={cst.weather_icon}
                    />
                    <StyledText className="text-teal-800 font-bold text-xs mt-1.5">
                      {cst.day}
                    </StyledText>
                  </StyledView>
                );
              }
            })
          : null}
      </StyledView>
    </View>
  );
};

export default History;
