import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../config/axios";

export const DashboardTemplate = ({ columns, title, formItems, apiURI }) => {
  const [dataSource, setDataSource] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formTag] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [tableColumns, setTableColumns] = useState([]);
  console.log(columns);

  useEffect(() => {
    if (columns && Array.isArray(columns)) {
      const newColumns = [
        ...columns,
        {
          title: "Action",
          dataIndex: "id",
          key: "id",
          render: (id, record) => (
            <div style={{ gap: "10px", display: "flex" }}>
              <Popconfirm
                title={`Delete ${title}`}
                onConfirm={() => handleDelete(id)}
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
              <span style={{ margin: "10px 5px" }}>|</span>
              <Button
                type="primary"
                style={{ backgroundColor: "orange" }}
                onClick={() => {
                  setIsUpdate(true);
                  formTag.setFieldsValue({ ...record, id });
                  handleOpenModal();
                }}
              >
                Update
              </Button>
            </div>
          ),
        },
      ];
      setTableColumns(newColumns);
    }
  }, [columns, title, formTag]);

  const fetchData = async () => {
    try {
      const response = await api.get(apiURI);
      setDataSource(response.data);
      setIsFetching(false);
    } catch (err) {
      toast.error(err.response?.data || "An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmitForm = async (values) => {
    setLoading(true);
    try {
      if (values.id) {
        await api.put(`${apiURI}/${values.id}`, values);
        toast.success("Update successfully");
      } else {
        await api.post(apiURI, values);
        toast.success("Added successfully");
      }
      formTag.resetFields();
      handleCloseModal();
      fetchData();
    } catch (error) {
      toast.error(error.response?.data || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`${apiURI}/${id}`);
      toast.success("Deleted successfully");
      fetchData();
    } catch (err) {
      toast.error(err.response?.data || "Failed to delete item");
    }
  };

  return (
    <div>
      {/* <SearchBar apiURI={apiURI} /> */}
      <Button onClick={() => handleOpenModal()} type="primary">
        Add new {title}
      </Button>
      <Table
        columns={tableColumns}
        dataSource={dataSource}
        loading={isFetching}
      />
      <Modal
        open={isOpenModal}
        title={`${isUpdate ? "Edit" : "Create new"} ${title}`}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => formTag.submit()}
          >
            Save
          </Button>,
        ]}
      >
        <Form form={formTag} onFinish={handleSubmitForm}>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          {formItems}
        </Form>
      </Modal>
    </div>
  );
};

export default DashboardTemplate;
