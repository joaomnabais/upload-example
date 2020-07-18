import React from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default function Upload({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste ficheiros aqui ...</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Ficheiro não suportado</UploadMessage>
    }

    return <UploadMessage type="success">Largue os ficheiros aqui</UploadMessage>
  }

  return(
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          { ...getRootProps() }
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input { ...getInputProps() } />

          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      ) }
    </Dropzone>
  );
}