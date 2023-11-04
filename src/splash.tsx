import React from 'react'
import { Image, Text, View } from 'react-native'
import {Link} from "react-router-native"
import { Logo, SplashHero } from '../assets'
import { styled } from 'nativewind'

const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const Splash = () => {
    return (
        <View>
            <StyledView className='w-full flex justify-center items-center pt-11'>
                {/* <StyledImage className="w-10 h-10" source={Logo} /> */}
                <StyledImage className="w-80 h-80 mt-6" source={SplashHero} />
                <StyledText className='mt-6 mx-7 text-slate-900 text-lg'>Mari <StyledText className='font-bold text-teal-900'>Bergerak Bersama</StyledText> Demi Pertanian Pitrosari yang <StyledText className='font-bold text-teal-900'>Lebih Maju!</StyledText> </StyledText>
                <StyledLink to="/home" className='mt-10 py-2 px-12 rounded-md shadow bg-teal-900'><StyledText className='text-teal-50'>Mari Memulai</StyledText></StyledLink>
            </StyledView>
        </View>
    )
}

export default Splash