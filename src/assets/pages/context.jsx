
import { createContext } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext();
 const ContextUser = (props) => {
    const [mode, setMode] = useState(false);
    return (

        <AppContext.Provider value={{ mode, setMode }} >
            {props.children}
        </AppContext.Provider>

    )
}

ContextUser.propTypes= {
    children: PropTypes.any
}

export default ContextUser;
