import { memo } from 'react'
import { Provider } from 'react-redux';
import store from './services/store.js'
import Users from './components/Users.jsx'

const App = () => {

  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default memo(App)