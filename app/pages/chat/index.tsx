import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {postStream} from '@utils/httpClient';

function ChatPage() {
  const val = useRef('');
  const [result, setResult] = useState('');
  const [running, setRunning] = useState(false);
  const fetchData = useCallback(async () => {
    setRunning(true);
    setResult('');
    const es = postStream('http://localhost:8088/chat_stream', {
      base: 'test',
      query: val.current,
    });
    es.addEventListener('message', evt => {
      const data = (evt as any)?.data;
      if (data !== '[close]') {
        setResult(prevVal => prevVal + data);
      } else {
        setRunning(false);
        es.removeAllEventListeners();
        es.close();
      }
    });
  }, []);
  return (
    <View>
      <View style={styles.rowCenter}>
        <TextInput onChangeText={v => (val.current = v)} style={styles.input} />
        <TouchableOpacity
          onPress={fetchData}
          style={styles.btn}
          disabled={running}>
          <Text>提交</Text>
        </TouchableOpacity>
      </View>
      <Text>{result}</Text>
      {running ? <Text>...</Text> : null}
    </View>
  );
}
export {ChatPage};

const styles = StyleSheet.create({
  rowCenter: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  input: {
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
  },
  btn: {
    padding: 10,
  },
});
