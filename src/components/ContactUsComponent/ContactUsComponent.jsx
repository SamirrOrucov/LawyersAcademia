import React, {  useState } from "react";
import "./ContactUsComponent.scss";
import { Button, Form, Input, Upload } from "antd";
import {  UploadOutlined } from "@ant-design/icons";

export default function ContactUsComponent() {
  const [form] = Form.useForm();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        console.log(values);
        if (key === "upload") {
          value.forEach((file) => {
            formData.append("upload", file.originFileObj);
          });
        } else {
          formData.append(key, value);
        }
      });
      const response = await fetch("http://localhost:3003/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      form.resetFields();
      setSuccessMessageVisible(true);
      setTimeout(() => {
        setSuccessMessageVisible(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="contactUsComponent">
      <div className="headOfStatistics">
        <p className="factsFirst">Əlaqə</p>
        <p className="factsSecond">
          Sualın var? <span>Müraciət et</span> !
        </p>

        <div className="lines">
          <div className="line One"></div>
          <div className="line Two"></div>
          <div className="line Three"></div>
          <div className="line Four"></div>
          <div className="line Five"></div>
        </div>
      </div>
      <div className="contactUsComponent_container">
        <div className="contactUsComponent_container_textSide">
          <img src="/public/contact.png" alt="" />
          <div className="textBox">
            <p className="muraciet">Müraciət edin</p>
          </div>
        </div>
        <div className="contactUsComponent_container_formSide">
          <Form form={form} onFinish={onFinish} autoComplete="off">
            <div className="firstLine">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Zəhmət olmazsa Ad və Soyadınızı yazın!",
                  },
                ]}
              >
                <Input placeholder="Ad və Soyad qeyd edin" />
              </Form.Item>

              <Form.Item
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Zəhmət olmazsa nömrənizi qeyd edin!",
                  },
                ]}
              >
                <Input
                  className="numberInput"
                  type="number"
                  style={{
                    width: "100%",
                  }}
                  placeholder="Nömrəni qeyd edin"
                  maxLength={10}
                />
              </Form.Item>
            </div>
            <div className="secondLine">
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "E-mail yanlışdır!",
                  },
                  {
                    required: true,
                    message: "Zəhmət olmazsa E-mail'i qeyd edin!",
                  },
                ]}
              >
                <Input placeholder="Email qeyd edin" />
              </Form.Item>
              <Form.Item
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                className="uploadFile"
               
              >
                <Upload
                  name="upload"
                  action="http://localhost:3003/upload"
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>Fayl seçin</Button>
                </Upload>
              </Form.Item>
            </div>
            <div className="thirdLine">
              <Form.Item
                name="content"
                rules={[
                  {
                    required: true,
                    message: "Zəhmət olmazsa müraciətinizi yazın!",
                  },
                ]}
              >
                <Input.TextArea
                  showCount
                  maxLength={1000}
                  placeholder="Müraciətiniz qeyd edin"
                />
              </Form.Item>
            </div>
            <button className="submit">Müraciəti göndər</button>
          </Form>
          {successMessageVisible && (
            <div className="successMessage">
              <p>Your form request has been sent.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
