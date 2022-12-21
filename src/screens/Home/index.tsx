import {View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {
  AlertTask,
  Body,
  Btn,
  BtnAdd,
  BtnText,
  Container,
  Footer,
  TextBody,
  TitleBody,
} from './styles';
import IconCalendar from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMenu from 'react-native-vector-icons/Feather';
import IconAdd from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../routes/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ButtonSheet from '../../components/ButtonSheet';
import Settings from '../../components/Settings';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {useReminder} from '../../contexts/reminder';
import {IListTask, ITask} from '../../contexts/reminder/types';
import LinearGradient from 'react-native-linear-gradient';

type TypeScreen = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<TypeScreen>();
  const [showCalendar, setShowCalendar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const {tasks, setTasks, tempTask, setTempTask, control, setControl} =
    useReminder();
  const [cont, setCont] = useState(0);
  function onDelete(item: ITask, id: number) {
    setTasks(prevState =>
      prevState.map(el => {
        if (el.date === item.date) {
          return {...el, task: el.task.filter(task => task.id !== id)};
        } else {
          return el;
        }
      })
    );
  }

  function onCompleted(item: ITask, id: number) {
    setTasks(prevState =>
      prevState.map(el => {
        if (el.date === item.date) {
          return {
            ...el,
            task: el.task.map(task => {
              if (task.id === id) {
                return {...task, isCompleted: !task.isCompleted};
              } else {
                return task;
              }
            }),
          };
        } else {
          return el;
        }
      })
    );
  }

  const renderItem = ({item}: any) => {
    setCont(item.task?.length);
    if (item.task?.length === 0) {
      return (
        <View style={{alignItems: 'center'}}>
          <TextBody> Registre uma atividade</TextBody>
        </View>
      );
    } else {
      return (
        <GestureHandlerRootView>
          <TitleBody> {item?.date}</TitleBody>
          {item?.task?.map((el: IListTask) => (
            <Swipeable
              renderRightActions={() => (
                <Btn onPress={() => onDelete(item, el.id)}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#FFDEAD', '#fff']}>
                    <BtnText style={{color: 'red'}}>Deletar</BtnText>
                  </LinearGradient>
                </Btn>
              )}
              renderLeftActions={() => (
                <Btn onPress={() => onCompleted(item, el.id)}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#fff', '#8FBC8F']}>
                    <BtnText style={{color: 'green'}}>
                      {el.isCompleted ? 'Ativar' : 'Concluir'}
                    </BtnText>
                  </LinearGradient>
                </Btn>
              )}>
              <TextBody conclused={el.isCompleted}>{el.taskItem}</TextBody>
            </Swipeable>
          ))}
        </GestureHandlerRootView>
      );
    }
  };

  return (
    <Container>
      <AlertTask
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#f39466', '#f94d73']}>
        <Text style={{color: '#fff', fontFamily: 'Poppins-Regular'}}>
          Você tem {cont} atividades para hoje!!{' '}
        </Text>
      </AlertTask>
      <Body>
        <View style={{width: '100%'}}>
          {control ? (
            ''
          ) : (
            <TouchableOpacity onPress={() => setControl(true)}>
              <Text>Vê todos</Text>
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          style={{width: '100%'}}
          data={control ? tasks : tempTask}
          renderItem={renderItem}
          keyExtractor={item => item.date}
        />
      </Body>

      <Modal
        visible={showCalendar}
        transparent={true}
        onRequestClose={() => setShowCalendar(false)}>
        <ButtonSheet onRequestClose={() => setShowCalendar(false)} />
      </Modal>
      <Modal
        visible={showSettings}
        transparent={true}
        onRequestClose={() => setShowSettings(false)}>
        <Settings onRequestClose={() => setShowSettings(false)} />
      </Modal>

      <Footer>
        <TouchableOpacity onPress={() => setShowSettings(true)}>
          <IconMenu name="menu" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('NewTask')}>
          <BtnAdd
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#f39466', '#f94d73']}>
            <IconAdd name="add" size={45} color="#fff" />
          </BtnAdd>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowCalendar(true)}>
          <IconCalendar name="calendar-month-outline" size={40} color="#000" />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default Home;
