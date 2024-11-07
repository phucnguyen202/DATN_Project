import { Form, Input, Modal } from 'antd'
import React from 'react'

const ToogleAccountUser = ({ isModalOpen, handleOk, handleCancel }) => {
  const [form] = Form.useForm();
  // chua lam cai gi het
  return (
    <>
      <Modal title="Cập nhật tài khoản"
        open={isModalOpen}
        onOk={handleOk} onCancel={handleCancel}>

        <Form
          layout='horizontal' form={form}
          size='large'
        >
        </Form>
      </Modal>
    </>
  )
}

export default ToogleAccountUser