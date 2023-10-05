import React from "react";
import "../style/Contact.css";
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(this.state); // Replace with your own logic
  };

  render() {
    return (
      <div className="full-row mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 bg-secondary">
              <div className="contact-info">
                <h3 className="mb-4 mt-4 text-white">Contacts</h3>
                <ul>
                  <li className="d-flex mb-4">
                    <i className="fas fa-map-marker-alt text-white mr-2 font-13 mt-1"></i>
                    <div className="contact-address">
                      <h5 className="text-white">Address</h5>
                      <span className="text-white">
                        Bharatpur Metropolitan-20, Chanauli
                      </span>{" "}
                      <br />
                      <span className="text-white">Chitwan Nepal</span>
                    </div>
                  </li>
                  <li className="d-flex mb-4">
                    <i className="fas fa-phone-alt text-white mr-2 font-13 mt-1"></i>
                    <div className="contact-address">
                      <h5 className="text-white">Call Us</h5>
                      <span className="d-table text-white">9811235909</span>
                      <span className="text-white">+9811235909</span>
                    </div>
                  </li>
                  <li className="d-flex mb-4">
                    <i className="fas fa-envelope text-white mr-2 font-13 mt-1"></i>
                    <div className="contact-address">
                      <h5 className="text-white">Email Address</h5>
                      <span className="d-table text-white">
                        gaurabstha444@gmail.com
                      </span>
                      <span className="text-white">
                        bhagawatistah444@gmail.com
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-md-12 col-lg-7">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="text-secondary double-down-line text-center mb-5">
                      Get In Touch
                    </h2>
                    {/* Render error or success messages here */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form className="w-100" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="row mb-4">
                          <div className="form-group col-lg-6">
                            <input
                              type="text"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              className="form-control"
                              placeholder="Your Name*"
                              required
                              id="gaurab"
                            />
                          </div>
                          <div className="form-group col-lg-6">
                            <input
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              className="form-control"
                              id="bhagawati"
                              placeholder="Email Address*"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Phone"
                            maxLength="10"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            name="subject"
                            value={this.state.subject}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Subject"
                            id="bhagawati"
                          />
                        </div>
                        <br/><br/><br/>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              value={this.state.message}
                              onChange={this.handleChange}
                              className="form-control"
                              rows="5"
                              placeholder="Type Comments..."
                            ></textarea>
                          </div>
                        </div>
                         <br/> <br/> <br/> <br/><br/> <br/>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <button
                              type="submit"
                              value="send message"
                              name="send"
                              className="btn btn-success"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.005486650109!2d84.4506602648366!3d27.593957424897553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996e6df17a1a61f%3A0x7e8e1da20b55d56e!2sChitwan%2042000%2C%20Nepal!5e0!3m2!1sen!2snp!4v1658568764228!5m2!1sen!2snp"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }
}

export default ContactForm;
