import styled from 'styled-components';

import { ActionButton } from 'app/components/library';
import { Kami } from 'network/shapes/Kami';
import { Mode } from './types';

interface Props {
  actions: {
    import: (kamis: Kami[]) => void;
    export: (kamis: Kami[]) => void;
  };
  controls: {
    mode: Mode;
    setMode: (mode: Mode) => void;
  };
  state: {
    selectedKamis: Kami[];
  };
}

export const Controls = (props: Props) => {
  const { actions, controls, state } = props;
  const { mode, setMode } = controls;
  const { selectedKamis } = state;

  const handleAction = () => {
    if (mode === 'IMPORT') actions.import(selectedKamis);
    else actions.export(selectedKamis);
  };

  return (
    <Container>
      <ActionButton
        onClick={handleAction}
        text={mode === 'IMPORT' ? 'Import' : 'Export'}
        disabled={selectedKamis.length == 0}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-left: solid black 0.15vw;
  border-right: solid black 0.15vw;
`;
