import React from "react";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Table,
  Modal,
} from "antd";
import "./CreateAdsPage.scss";
import Layout from "../../components/Layout";
import KoisAds from "../../components/kois-ads";
import PlanAds from "../../components/plan-ads";
import Tabbled from "../../components/Tabbed-template copy";

const CreateAdsPage = () => {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Price (VND)",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Created_at",
      dataIndex: "created_at",
      sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: [
        { text: "Fish", value: "Fish" },
        { text: "Decoration", value: "Decoration" },
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="action-btn">
          <Button
            className="btn-outline-primary"
            onClick={() => handleDetails(record)}
          >
            Details
          </Button>
          <Button danger onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Edited values: ", values);
        // Implement the update logic here (e.g., send values to the server)
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const data = [
    {
      key: "P001",
      id: "P001",
      species: "Kohaku",
      color: "Red and White",
      size: 45.5,
      age: 3,
      origin: "Nhật Bản",
      element: "E1",
      description: "Cá Koi Kohaku màu đỏ và trắng, rất phổ biến.",
      price: 1500000,
      created_at: "2024-09-13 14:00:05",
      created_by: "M04",
      category: "Fish",
    },
    {
      key: "P002",
      id: "P002",
      species: "Showa",
      color: "Black, White, Red",
      size: 50,
      age: 4,
      origin: "Nhật Bản",
      element: "E4",
      description: "Showa với sự kết hợp của ba màu: đen, trắng và đỏ.",
      price: 2000000,
      created_at: "2024-09-13 14:00:05",
      created_by: "M04",
      category: "Fish",
    },
    {
      key: "P007",
      id: "P007",
      species: "Đá trang trí hồ cá",
      color: "Gray",
      size: 15,
      age: null,
      origin: "Việt Nam",
      element: "E1",
      description: "Đá tự nhiên trang trí hồ cá, tạo cảm giác tự nhiên.",
      price: 50000,
      created_at: "2024-09-20 10:00:00",
      created_by: "M04",
      category: "Decoration",
    },
    // More data...
  ];

  const handleDelete = (key) => {
    console.log("Delete record with key:", key);
    // Implement delete logic
  };

  const handleDetails = (record) => {
    setIsModalVisible(true);
    // Implement details view logic
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();
  const Form1 = () => (
    <div>
      <Form
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tiêu đề:">
          <Input placeholder="Nhập tiêu đề" />
        </Form.Item>
        <Form.Item label="Số điện thoại:">
          <Input placeholder="Nhập sđt" />
        </Form.Item>
        <Form.Item label="Giống:">
          <Input placeholder="Nhập giống cá" />
        </Form.Item>
        <Form.Item label="Xuất sứ:">
          <Input placeholder="Nhập xuất sứ" />
        </Form.Item>
        <Form.Item label="Mệnh:">
          <Select
            options={[
              { value: "Kim", label: "Kim" },
              { value: "Mộc", label: "Mộc" },
              { value: "Thủy", label: "Thủy" },
              { value: "Hỏa", label: "Hỏa" },
              { value: "Thổ", label: "Thổ" },
            ]}
          />
        </Form.Item>
        <Form.Item label="Số lượng:">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Giá:">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Mô tả:">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Kích thước (cm):">
          <Slider />
        </Form.Item>
        <Form.Item
          label="Hình ảnh:"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Thêm ảnh
              </div>
            </button>
          </Upload>
        </Form.Item>
        <div className="create-ads-form-footer">
          <Button className="create-ads-form-submit-button">Đăng</Button>
        </div>
      </Form>
    </div>
  );

  const Form2 = () => (
    <div>
      <Form
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tiêu đề: ">
          <Input placeholder="Nhập tiêu đề" />
        </Form.Item>
        <Form.Item label="Số lượng: ">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Giá: ">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Mô tả: ">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Kích thước (cm): ">
          <Slider />
        </Form.Item>
        <Form.Item
          label="Hình ảnh:"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: "none",
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
          </Upload>
        </Form.Item>
        <div className="create-ads-form-footer">
          <Button className="create-ads-form-submit-button">Đăng</Button>
        </div>
      </Form>
    </div>
  );
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a30014",
          colorInfo: "#a30014",
        },
        components: {
          Form: {
            controlHeightSM: 38,
            verticalLabelPadding: "0 0 5px",
            paddingSM: 10,
            itemMarginBottom: 0,
            labelColor: "rgba(255,255,255)",
            labelFontSize: 16,
          },
          Slider: {
            trackBg: "rgb(255,255,255)",
            railBg: "rgb(255,255,255)",
          },
          Table: {
            headerBg: "#a30014",
            headerColor: "white",
          },
        },
      }}
    >
      <Layout>
        <div className="create-ads-page-main-container">
          <h1>Đăng quảng cáo</h1>
          <div className="create-ads-page-container">
            <div className="left-home">
              <Tabbled
                tab1="Cá Koi"
                tab2="Đồ trang trí"
                form1={<Form1 />}
                form2={<Form2 />}
              ></Tabbled>
            </div>
            <div className="right-home">
              <KoisAds></KoisAds>
              <PlanAds></PlanAds>
            </div>
          </div>
          <div className="ads-table">
            <h2>Quảng cáo đang đăng</h2>
            <Table
              columns={columns}
              dataSource={data}
              onChange={onChange}
              showSorterTooltip={{
                target: "sorter-icon",
              }}
            />
          </div>

          <Modal
            title="Edit Item"
            visible={isModalVisible}
            onCancel={handleCancel}
            onOk={handleSubmit}
          >
            <Form
              form={form}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={{
                maxWidth: 600,
              }}
            >
              <Form.Item label="Tiêu đề:" name="title">
                <Input placeholder="Nhập tiêu đề" />
              </Form.Item>
              <Form.Item label="Số điện thoại:" name="phone">
                <Input placeholder="Nhập sđt" />
              </Form.Item>
              <Form.Item label="Giống:" name="species">
                <Input placeholder="Nhập giống cá" />
              </Form.Item>
              <Form.Item label="Xuất sứ:" name="origin">
                <Input placeholder="Nhập xuất sứ" />
              </Form.Item>
              <Form.Item label="Mệnh:" name="element">
                <Select
                  options={[
                    { value: "Kim", label: "Kim" },
                    { value: "Mộc", label: "Mộc" },
                    { value: "Thủy", label: "Thủy" },
                    { value: "Hỏa", label: "Hỏa" },
                    { value: "Thổ", label: "Thổ" },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Số lượng:" name="quantity">
                <InputNumber min={1} />
              </Form.Item>
              <Form.Item label="Giá:" name="price">
                <InputNumber min={0} />
              </Form.Item>
              <Form.Item label="Mô tả:" name="description">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="Kích thước (cm):" name="size">
                <Slider min={1} max={100} />
              </Form.Item>
              <Form.Item
                label="Hình ảnh:"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <button
                    style={{
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Thêm ảnh
                    </div>
                  </button>
                </Upload>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </Layout>
    </ConfigProvider>
  );
};
export default CreateAdsPage;
