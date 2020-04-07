import React from 'react';
import  RequestForHelpForm  from '@components/RequestForHelp';
import { connector } from '@store/requestForHelp';
import options from "@utils/Options";

const RequestForHelp = ({reset, save}) => {
    const initialValues = {region: ["KA", "5"]};

    const handleSubmit = (formData) => {
        formData['act'] = 'request';
        save(formData);
    }

    return (
        <RequestForHelpForm
            reset={reset}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
            options={options.regions}/>
    );
}

export default connector(RequestForHelp);