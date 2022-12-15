import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Container, GradientAddTask, GradientView, InputTask, TextBtn, Title } from './styles'
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { format, addDays } from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';
import IconAdd from 'react-native-vector-icons/Ionicons';
import { RootStackParamsList } from '../../routes/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useReminder } from '../../contexts/reminder';
import { ITask } from '../../contexts/reminder/types';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


type TypeScreen = NativeStackNavigationProp<RootStackParamsList, "NewTask">

export default function NewTask() {
    const navigation = useNavigation<TypeScreen>();
    const [dateToday, setDateToday] = useState(new Date());
    const [newTask, setNewTask] = useState("");
    const [newDate, setNewDate] = useState(format(dateToday, 'yyyy-MM-dd'));
    const [activeToday, setActiveToday] = useState(true);
    const [activeTomorrow, setActiveTomorrow] = useState(false);
    const [activeOuther, setActiveOuther] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const { tasks, setTasks } = useReminder();
    const [selected, setSelected] = useState('');

    const marked = useMemo(() => ({
        [selected]: {
            selected: true,
            selectedColor: '#f39466',
            selectedTextColor: 'white',

        }
    }), [selected]);

    function Today() {
        setNewDate(format(dateToday, 'yyyy-MM-dd'));

        setActiveToday(true);
        setActiveOuther(false);
        setActiveTomorrow(false);
        setShowModal(false);
    }

    function Tomorrow() {
        setNewDate(format(addDays(dateToday, 1), 'yyyy-MM-dd'));
        setActiveTomorrow(true);
        setActiveToday(false);
        setActiveOuther(false);
        setShowModal(false);

    }
    function OutherDay() {
        setActiveTomorrow(false);
        setActiveToday(false);
        setActiveOuther(true);
        setShowModal(true);
    }

    function SaveTask() {
        const find = tasks?.find((el: ITask) => el.date === newDate);

        if (newTask == '') {
            Toast.show({
                type: 'error',
                text1: 'Você deve coloca uma Descrição na Tarefa Desejada',
            });
        } else {

            if (find) {
                setTasks(prevState => {
                    return prevState.map((el) => {
                        if (el.date === find.date) {
                            return {
                                date: el.date,
                                task: [...el.task, { taskItem: newTask, isCompleted: false, id: Math.floor(Math.random() * 100) }]
                            };
                        } else {
                            return el;
                        }
                    })
                }
                );
            } else {
                setTasks((prevState) => [
                    ...prevState,
                    { date: newDate, task: [{ taskItem: newTask, isCompleted: false, id: Math.floor(Math.random() * 100) }] }
                ]);
            }
            navigation.navigate("SucessTask")
        }
    }



    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} >
                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </Text>
            </TouchableOpacity>
            <View style={{ height: '20%', justifyContent: "center" }}>
                <Title>Adicionar Nova Tarefa</Title>
            </View>
            <InputTask
                onChangeText={setNewTask}
                placeholder="Descrição"
                value={newTask}
            />

            <View >
                <Text style={{ color: "#000", padding: 10, fontWeight: "bold", fontSize: 17 }}>Quando</Text>
                <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => Today()}>
                        <GradientView start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={activeToday ? ['#f39466', '#f94d73'] : ['#fff', '#fff']}>
                            <TextBtn active={activeToday}>Hoje</TextBtn>
                        </GradientView>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => Tomorrow()}>
                        <GradientView start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={activeTomorrow ? ['#f39466', '#f94d73'] : ['#fff', '#fff']}>
                            <TextBtn active={activeTomorrow} >Amanhã</TextBtn>
                        </GradientView>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => OutherDay()}>
                        <GradientView start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={activeOuther ? ['#f39466', '#f94d73'] : ['#fff', '#fff']}>
                            <TextBtn active={activeOuther}>Outro Dia</TextBtn>
                        </GradientView>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: "40%", padding: 10 }}  >
                {showModal ?
                    <Calendar
                        initialDate={format(dateToday, 'yyyy-MM-dd')}
                        enableSwipeMonths={true}
                        style={{ height: "20%" }}
                        onDayPress={day => {
                            setNewDate(day.dateString + '');
                            setSelected(day.dateString);
                        }}
                        markedDates={marked}
                    />
                    : <View />}
            </View>

            <TouchableOpacity activeOpacity={1} onPress={() => SaveTask()}>
                <GradientAddTask start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f39466', '#f94d73']}>
                    <IconAdd name="add" size={34} color="#fff" />
                    <Text style={{ fontSize: 22, color: "#fff", fontFamily: 'Poppins-Regular', paddingTop: 4 }}>
                        Adicionar atividade
                    </Text>
                </GradientAddTask>
            </TouchableOpacity>

        </Container >
    )
}