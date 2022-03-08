import React, { ReactNode } from 'react';

export interface ICarModel {
    modelName: string;
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface IModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: ICarModel[]
    registerModel: (model: ICarModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => ICarModel | null
}

export default React.createContext<IModelsContext>({} as IModelsContext)
