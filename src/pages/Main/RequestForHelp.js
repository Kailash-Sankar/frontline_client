import React from 'react';
import  RequestForHelpForm  from '@components/RequestForHelp';
import options from "@utils/Options";
import { notification } from 'antd';
import Api from '@api';

const openNotification = (message, desc) => {
    notification.open({
      message: message,
      description: desc,
    });
  };

const RequestForHelp = () => {
    const initialValues = {region: ["KA", "5"]};

    const handleSubmit = async (formData) => {
        formData['act'] = 'request';
        const response = await Api.saveHelpRequest(formData);
        if (response){
            openNotification('Request Submitted', 'Your request has been submitted.');
        }else{
            openNotification('Error', 'Some error occured');
        }
    }

    return (
        <RequestForHelpForm
            initialValues={initialValues}
            handleSubmit={handleSubmit}
            options={options.regions}/>
    );
}

export default RequestForHelp;