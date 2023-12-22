import React, { Fragment } from 'react';
import MetaData from '../Layout/MetaData';

const ForgotPassword = () => {
  

  return (
    <Fragment>
      <MetaData title={'ForgetPassword Page'}/>
          <form className="Rform">
          <h2 className="text-center">Forgot Form</h2>
        <div className="col-auto form-group">
          <input type="email" placeholder="Enter Your Email" name='email'  className="form-control mt-2" />
        </div>
        <div className="col-auto form-group text-center mt-4">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ForgotPassword;
