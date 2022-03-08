import { ReactNode, useCallback, useRef, useState } from 'react';
import ModelOverlay from '../ModelOverlay';
import ModelsContext, { ICarModel } from '../ModelsContext';

import {
    Container, OverlaysRoot,
} from './styles';

interface IModelsWrapperProps {
    children: ReactNode;
}

function ModelsWrapper({ children }: IModelsWrapperProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [registeredModels, setRegisteredModels] = useState<ICarModel[]>([]);

    const registerModel = useCallback((carModel: ICarModel) => {
        setRegisteredModels(state => [...state, carModel])
    }, [])


    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
    }, []);

    const getModelByName = useCallback((modelName: string) => {
        return registeredModels.find(model => model.modelName === modelName) || null
    }, [registeredModels])

    return (
        <ModelsContext.Provider value={{
            wrapperRef,
            registeredModels,
            registerModel,
            unregisterModel,
            getModelByName
        }} >
            <Container ref={wrapperRef}>

                <OverlaysRoot>
                    {registeredModels.map(item => (
                        <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
                    ))}
                </OverlaysRoot>

                {children}
            </Container>
        </ ModelsContext.Provider>
    );
};

export default ModelsWrapper;
