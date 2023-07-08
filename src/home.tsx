import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { CheckIcon, Rainy, Map, Gear } from '../assets'
import { styled } from 'nativewind'

const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const Home = () => {
    return (
        <StyledView className='bg-slate-100 pb-8'>

            {/* Header */}
            <StyledView className='w-full flex flex-row justify-center items-between'>
                <StyledText className='flex-1 m-3.5 text-slate-950 font-bold text-xs'>PGS</StyledText>
                <StyledLink to="/profile">
                    <StyledImage className='w-6 h-6 m-3' source={Gear} />
                </StyledLink>
            </StyledView>

            {/* Main data */}
            <StyledView className='w-11/12 mx-auto bg-white rounded-xl'>
                <StyledView className='flex flex-row items-center px-4 pt-4'>
                    <StyledImage className='w-3 h-3 mr-1' source={Map} />
                    <StyledText className='text-xs text-slate-950 font-bold'>Desa Pitrosari</StyledText>
                </StyledView>

                <StyledView className='flex flex-row justify-between items-center mt-4 px-4'>
                    <StyledView className='flex flex-row justify-between items-center'>
                        <StyledText className='text-4xl text-slate-950 font-bold'>+17°C</StyledText>
                        <StyledView className='flex flex-col justify-center items-center ml-2'>
                            <StyledText className='text-xs m-0.5 text-slate-800 font-light'>H: 25°C</StyledText>
                            <StyledText className='text-xs m-0.5 text-slate-800 font-light'>L: 13°C</StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledView className='flex justify-center flex-1 items-center'>
                        <StyledImage className='w-12 h-12' source={Rainy} />
                    </StyledView>
                </StyledView>

                <StyledView className='bg-teal-900 rounded-b-lg py-2 mt-5 flex flex-row'>
                    <StyledView className='flex justify-center items-center flex-col w-4/12'>
                        <StyledText className='text-xs m-0.5 text-slate-200 font-normal mt-2 text-center'>Udara</StyledText>
                        <StyledText className='text-lg m-0.5 text-white font-bold -mt-1'>25%</StyledText>
                    </StyledView>
                    <StyledView className='flex justify-center items-center flex-col w-4/12'>
                        <StyledText className='text-xs m-0.5 text-slate-200 font-normal mt-2 text-center'>Tanah</StyledText>
                        <StyledText className='text-lg m-0.5 text-white font-bold -mt-1'>75.5%</StyledText>
                    </StyledView>
                    <StyledView className='flex justify-center items-center flex-col w-4/12'>
                        <StyledText className='text-xs m-0.5 text-slate-200 font-normal mt-2 text-center'>PPM</StyledText>
                        <StyledText className='text-lg m-0.5 text-white font-bold -mt-1'>200</StyledText>
                    </StyledView>
                </StyledView>

            </StyledView>

            {/* Check List */}
            <StyledView className='w-11/12 mx-auto py-4 rounded-xl mt-3'>
                <StyledView className='w-full flex flex-row justify-center items-between'>
                    <StyledText className='flex-1 text-slate-950 font-bold text-xs'>Check List</StyledText>
                </StyledView>

                <StyledView className='w-full flex flex-col'>

                    <StyledView className='w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white'>
                        <StyledView className='w-5 h-5 rounded border-2 border-teal-900 bg-white mx-4 ml-8'></StyledView>
                        <StyledView className='w-full flex flex-col'>
                            <StyledText className='flex-1 text-slate-950 font-bold text-md'>Flush Kran Air</StyledText>
                            <StyledText className='flex-1 text-slate-800 font-light text-xs'>Jan 3</StyledText>
                        </StyledView>
                    </StyledView>

                    <StyledView className='w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white'>
                        <StyledView className='w-5 h-5 rounded border-2 border-teal-900 bg-white mx-4 ml-8'></StyledView>
                        <StyledView className='w-full flex flex-col'>
                            <StyledText className='flex-1 text-slate-950 font-bold text-md'>Isi Pupuk A & B</StyledText>
                            <StyledText className='flex-1 text-slate-800 font-light text-xs'>Jan 1</StyledText>
                        </StyledView>
                    </StyledView>

                    <StyledView className='w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white'>
                        <StyledView className='w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center'>
                            <StyledImage className='w-3 h-3' source={CheckIcon} />
                        </StyledView>
                        <StyledView className='w-full flex flex-col'>
                            <StyledText className='flex-1 text-slate-700 font-bold text-md line-through opacity-50'>Flush Kran Air</StyledText>
                            <StyledText className='flex-1 text-slate-700 font-light text-xs opacity-50'>Feb 3</StyledText>
                        </StyledView>
                    </StyledView>
                </StyledView>
                <StyledLink className="mt-4 mx-auto bg-teal-800 hover:bg-teal-900 px-6 py-2 rounded-md shadow-lg" to="/check"><StyledText className='text-white'>Tampilkan Semua</StyledText></StyledLink>
            </StyledView>

        </StyledView>
    )
}

export default Home