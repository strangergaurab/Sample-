import React, { useState } from 'react';
import "../style/submit.css";
const SubmitProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    ptype: '',
    stype: '',
    bath: '',
    kitc: '',
    bhk: '',
    bed: '',
    balc: '',
    hall: '',
    floor: '',
    price: '',
    city: '',
    state: '',
    totalfl: '',
    asize: '',
    loc: '',
    feature: '',
    aimage: null,
    aimage1: null,
    aimage2: null,
    aimage3: null,
    aimage4: null,
    fimage: null,
    fimage1: null,
    fimage2: null,
    status: '',
    isFeatured: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can use formData state to send the data to the server
  };

  return (
    <div className="full-row">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-secondary double-down-line text-center">Submit Property</h2>
          </div>
        </div>
        <div className="row p-5 bg-white">
          <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="description">
              <h5 className="text-secondary">Basic Information</h5>
              <hr />
              {/* Render your error and success messages here */}
              {/* For example: */}
              {/* {error && <div className="alert alert-danger">{error}</div>} */}
              {/* {msg && <div className="alert alert-success">{msg}</div>} */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Title</label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        required
                        placeholder="Enter Title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Content</label>
                    <div className="col-lg-9">
                      <textarea
                        className="tinymce form-control"
                        name="content"
                        rows="10"
                        cols="30"
                        value={formData.content}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">Property Type</label>
                    <div className="col-lg-9">
                      <select
                        className="form-control"
                        required
                        name="ptype"
                        value={formData.ptype}
                        onChange={handleChange}
                      >
                        <option value="">Select Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="flat">Flat</option>
                        <option value="building">Building</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                        <option value="office">Office</option>
                      </select>
                    </div>
                  </div>
                  {/* Continue rendering other form fields */}
                  {/* ... */}
                </div>
              </div>
              {/* Render the rest of the form here */}
              {/* ... */}
              {/* For handling file inputs, you can use the following pattern */}
              {/* <input type="file" name="aimage" onChange={handleImageChange} /> */}
              {/* <input type="file" name="aimage1" onChange={handleImageChange} /> */}
              {/* ... */}
              {/* Render the submit button */}
              <input type="submit" value="Submit Property" className="btn btn-info" style={{ marginLeft: '200px' }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitProperty;
