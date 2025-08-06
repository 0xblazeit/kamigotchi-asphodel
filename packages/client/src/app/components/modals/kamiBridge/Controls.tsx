import styled from 'styled-components';

import { ActionButton } from 'app/components/library';
import { Kami } from 'network/shapes/Kami';

interface Props {
  actions: {
    import: (kamis: Kami[]) => void;
    export: (kamis: Kami[]) => void;
  };

  state: {
    selectedWild: Kami[];
    selectedWorld: Kami[];
  };
}

export const Controls = (props: Props) => {
  const { actions, state } = props;

  const { selectedWild, selectedWorld } = state;

  // this allows importing and exporting at the same time
  const handleAction = () => {
    const kamisToImport = selectedWild.filter((kami) => selectedWild.includes(kami));
    const kamisToExport = selectedWorld.filter((kami) => selectedWorld.includes(kami));
    if (kamisToImport.length > 0) {
      actions.import(kamisToImport);
    }
    if (kamisToExport.length > 0) {
      actions.export(kamisToExport);
    }
  };

  return (
    <Container>
      <ActionButton
        onClick={handleAction}
        text='Transfer'
        disabled={selectedWild.length === 0 && selectedWorld.length === 0}
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
  overflow: hidden;
`;
