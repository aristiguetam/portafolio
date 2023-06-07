import { useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    isMenuOpen: boolean;
}

export const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
}

interface Props {
    children: JSX.Element;
}

export const UIProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const toggleMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu'})
    }

    return (
        <UIContext.Provider value={{
            ...state,
            toggleMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}