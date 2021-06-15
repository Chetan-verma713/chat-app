import React, { useState } from 'react';
import { Button, Icon, InputGroup, Modal, Uploader } from 'rsuite';
import { useModalState } from '../../../misc/CustomHooks';

const MAX_FILE_SIZE = 1000 * 1204 * 5;

const AttachmentBtnModal = () => {
  const { isOpen, open, close } = useModalState();
  const [FileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = fileArr => {
    const filtered = fileArr
      .filter(el => el.blobFile.size <= MAX_FILE_SIZE)
      .slice(0, 5);
    setFileList(filtered);
  };

  const onUpload = async () => {};

  return (
    <>
      <InputGroup.Button onClick={open}>
        <Icon icon="attachment" />
      </InputGroup.Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>Upload Files</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Uploader
            autoUpload={false}
            action=""
            fileList={FileList}
            onChange={onChange}
            multiple
            listType="picture-text"
            className="w-100"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button block disabled={isLoading} onClick={onUpload}>
            Send to Chat
          </Button>
          <div className="text-right mt-2">
            <small>* on files less than 5 mb are allowed</small>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AttachmentBtnModal;
