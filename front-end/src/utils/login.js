import axios from 'axios';

const login = async (formData) => {
  try {
    // Replace 'YOUR_LOGIN_API_URL' with the actual login API endpoint
    const response = await axios.post('YOUR_LOGIN_API_URL', formData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    throw new Error('Login failed');
  }
};

export default login;
