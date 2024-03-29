import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';
import UniqueOverlay from '../UniqueOverlay';
import { Container } from './styles';

function Page() {
  return (
    <Container>
      <ModelsWrapper >
          <div>
              {[
                  'Model One',
                  'Model Two',
                  'Model Three',
                  'Model Four',
                  'Model Five',
              ].map(modelName => (
                <ModelSection
                    key={modelName}
                    className='colored'
                    modelName={modelName}
                    overlayNode={
                        <DefaultOverlayContent
                            label={modelName}
                            description='Order Online for Delivery'
                        />
                    }
                />
              ))}
          </div>

      <UniqueOverlay />
      </ModelsWrapper>

    </Container>
  );
};

export default Page;
