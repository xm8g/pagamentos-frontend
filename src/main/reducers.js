import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dashboardReducer from '../dashboard/reducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer