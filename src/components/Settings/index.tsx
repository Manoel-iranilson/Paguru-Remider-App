import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Btn, BtnText, Container, Content } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';

export default function Settings({ onRequestClose }: any) {
    return (
        <Container>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={onRequestClose}></TouchableOpacity>
            <Content start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f39466', '#f94d73']}>
                <View >
                    <Btn><BtnText>Configurações</BtnText></Btn>
                    <Btn><BtnText>Compartilhe o aplicativo</BtnText></Btn>
                    <Btn><BtnText>Avalie este aplicativo</BtnText></Btn>
                </View>
                <View  >
                    <TouchableOpacity onPress={onRequestClose}>
                        <Icon name='close' color="#fff" size={50} />
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}