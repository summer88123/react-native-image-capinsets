const ReactNative = require('react-native');
const { Platform } = ReactNative;

module.exports = Platform.OS === 'ios' || Platform.OS === 'harmony' ? require('./ImageCapInset.ios.js') : require('./ImageCapInset.android.js');
