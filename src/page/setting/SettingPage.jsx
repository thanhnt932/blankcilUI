import React from 'react'
import './SettingPage.css'
import ResetPassword from '../../components/authentication/resetPassword/ResetPassword'
const SettingPage = () => {
  return (
    <>
        <div className='setting'>
            <h1>Setting</h1>
            <div className="settingItem">
              <div className="content-container">
                <p>Họ và tên: Huỳnh Trung Kiên</p>
                <p>Ciler name: @kolas</p>
                <p>Ngày sinh: 17/2/2003</p>
                <p>Giới tính: Nam</p>
                <p>Email: ********@gmail.com</p>
                <p>Số điện thoại: 0123456***</p>
                
              </div>
                <p>Reset password</p>
            </div>
        </div>
        <ResetPassword/>
    </>
  )
}

export default SettingPage