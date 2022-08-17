import axios from 'axios';
import { showMessage, closeLoader } from './general';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Token acee8f4a844ef7e3be9a7b9ab2bdecf49a55556b'
}

export const message = async (legalname, email, message) => {
  const body = JSON.stringify({legalname, email, message});

  console.log(process.env.REACT_APP_API_URL);
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/v1/drop-message`, body, {headers});

    if (response.data['status'] === 201) {
      showMessage("Message sent success :)", "success");

      setTimeout(() => { closeLoader(); }, 2500);
    } else {
      showMessage("No messages can be sent atm :/", "error");

      setTimeout(() => { closeLoader(); }, 2500);
    }
  } catch (error) {
    showMessage("No messages can be sent atm :/", "error");

    setTimeout(() => { closeLoader(); }, 2500);
  }
}
