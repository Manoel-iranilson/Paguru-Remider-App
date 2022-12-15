
import { View, Text, SafeAreaView, TouchableOpacity, Alert, Modal } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Container, Content } from './styles'
import { Calendar } from 'react-native-calendars'
import Icon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';
import { useReminder } from '../../contexts/reminder';
export default function ButtonSheet({ onRequestClose }: any) {
    const [dateToday, setDateToday] = useState(new Date());
    const [selected, setSelected] = useState('');
    const { tasks, setTasks } = useReminder();
    const theme = useMemo(() => {
        return {
            calendarBackground: '',
            dayTextColor: '#fff',
            textSectionTitleColor: '#fff',
            monthTextColor: 'white'
        };
    }, []);

    const marked = useMemo(() => ({
        [selected]: {
            selected: true,
            selectedColor: '#f39466',
            selectedTextColor: 'white',

        }
    }), [selected]);

    function ExposeTask(day: string) {

        console.log(day);
        tasks.map(e => {
            if (e.date == day) {
                return Toast.show({
                    type: 'info',
                    text1: `Você tem ${e.task.length} Tarefas para este dia`,
                });
            } else {
                return Toast.show({
                    type: 'info',
                    text1: 'Você não tem nenhuma Tarefa para esse dia',
                });
            }
        }

        );
    }

    return (
        <Container>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={onRequestClose}></TouchableOpacity>
            <Content start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f39466', '#f94d73']}>
                <View style={{ alignItems: 'center' }}>
                    <Calendar hideExtraDays={true} theme={theme} markedDates={marked} onDayPress={(day) => {
                        setSelected(day.dateString);
                        ExposeTask(day.dateString)

                    }}
                    />
                </View>
                <View style={{ alignItems: 'flex-end', paddingRight: 20 }}>
                    <TouchableOpacity onPress={onRequestClose}>
                        <Icon name='close' color="#fff" size={50} />
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}