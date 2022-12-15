import { Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Body, Container, TextBody, Title, BtnFooter, Btn, GradientAddTask } from './styles'
import { useNavigation } from '@react-navigation/native';
import IconCheck from 'react-native-vector-icons/Feather';
import IconAdd from 'react-native-vector-icons/Ionicons';
import { LinearTextGradient } from "react-native-text-gradient";
import { RootStackParamsList } from '../../routes/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { format } from 'date-fns';
import { useReminder } from '../../contexts/reminder';


type TypeScreen = NativeStackNavigationProp<RootStackParamsList, "SucessTask">
export default function SucessTask() {
    const navigation = useNavigation<TypeScreen>();
    const { tasks, setTasks } = useReminder();

    return (
        <Container>
            <IconCheck name='check' size={150} color='red' />
            <View >
                <LinearTextGradient
                    locations={[0, 1]}
                    colors={['#f39466', '#f94d73']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >

                    <Title>Nova Tarefa Adicionada!</Title>
                </LinearTextGradient>
            </View>
            <Body>
                <TextBody>Para {tasks.map((e) => e.date).pop()}</TextBody>

                <TextBody style={{ fontSize: 40 }}>{tasks.map((e) => e.task.map((el) => el.taskItem).pop())}</TextBody>


            </Body>
            <BtnFooter>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("NewTask")}>
                    <GradientAddTask start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f39466', '#f94d73']}>
                        <IconAdd name="add" size={34} color="#fff" />
                        <Text style={{ fontSize: 22, color: "white", fontFamily: 'Poppins-Regular', paddingTop: 4 }}>
                            Adicionar Nova Tarefa
                        </Text>
                    </GradientAddTask>
                </TouchableOpacity>
                <Btn onPress={() => navigation.navigate("Home")} >
                    <Text style={{ fontSize: 20, color: "black", fontFamily: 'Poppins-Regular' }}>Ir para Home</Text>
                </Btn>
            </BtnFooter>

        </Container>
    )
}