import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface IModelSectionProps extends HTMLAttributes<HTMLDivElement> {
    modelName: string;
    overlayNode: ReactNode
}

function ModelSection({ modelName, overlayNode, children, ...props }: IModelSectionProps) {
    const { registerModel } = useModel(modelName);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(sectionRef.current){
            registerModel({modelName, overlayNode, sectionRef})
        }
    }, [modelName, overlayNode, registerModel, sectionRef])

    return (
        <Container ref={sectionRef} {...props}>
            <h1>{children}</h1>
        </Container>
    );
};

export default ModelSection;
