import { Button, Form, Image, Input, Modal, Popconfirm, Table, Upload } from 'antd';
import { useForm } from 'antd/es/form/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PlusOutlined } from '@ant-design/icons';
import uploadFile from '../../../utils/file';

function ManageCategory() {
  
  const [members, setMembers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [submitting, setSubmitting] = useState(false); 
  const [form] = useForm()
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return <img src={image} alt="" width="60"/>
      }
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Date Of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return <>
        <Popconfirm 
        title="Delete" 
        description="Do you want to delete this member?"
        onConfirm ={() => handleDeleteMember(id)}>
          <Button typr="primary" danger >
            Delete
          </Button>
        </Popconfirm>
        </>
      }
    },
  ];

  const api = "https://66dc4a9c47d749b72acb3558.mockapi.io/Member";

  const fetchMember = async () => {
    const response = await axios.get(api);

    console.log(response.data);
    setMembers(response.data);
  };

  useEffect (() => {
    fetchMember();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitMember = async (member) => {
    if(fileList.length > 0){
      const file = fileList[0];
      console.log(file);
      const url = await uploadFile(file.originFileObj);
      console.log(url);
      member.image = url;
    }

    console.log(member)
    try{
      setSubmitting(true);
      const response = await axios.post(api, member)
      toast.success('Successfully create a new member')
      setOpenModal(false);
      form.resetFields();
      fetchMember();
    }catch (err){
      toast.error(err);
    }finally{
      setSubmitting(false);
    }
  }

  const handleDeleteMember = async (memberId) => {
    try{
      await axios.delete(`${api}/${memberId}`);
      toast.success("Delete Successfully")
      fetchMember();
    }catch (ex) {
      toast.error("Failed to delete Member")
    }
  }

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );  

  return (
    <div>
        <h1>Member Managemnet</h1>
        <Button onClick={handleOpenModal} >Create new member </Button>
        <Table columns={columns} dataSource={members} />
        <Modal confirmLoading={submitting} onOk={() => form.submit()} title="Create new member" Modal  open = {openModal} onCancel={handleCloseModal}>
          <Form onFinish={handleSubmitMember} form = {form}>

            <Form.Item label="Member name" name = "name" rules={[
              {
                required: true,
                message: "Please input member's name!",
              }
            ]}>
              <Input/>
            </Form.Item>

            <Form.Item label="Member number" name = "number" rules={[
              {
                required: true,
                message: "Please input member's number!",
              }
            ]}>
              <Input/>
            </Form.Item>

            <Form.Item label="Member date Of Birth" name = "dateOfBirth" rules={[
              {
                required: true,
                message: "Please input member's date Of Birth!",
              }
            ]}>
              <Input/>
            </Form.Item>

            <Form.Item label="image" name="image">
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
            </Form.Item>

          </Form>
        </Modal>
        {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </div>
  )
}

export default ManageCategory