import axios from 'axios';

const baseUrl = 'http://dev3.xicom.us/xttest/getdata.php';

const getImages = async () => {
  let formData = new FormData();
  formData.append('user_id', '108');
  formData.append('offset', '0');
  formData.append('type', 'popular');

  const response = await axios
    .post('http://dev3.xicom.us/xttest/getdata.php', formData)
    .catch(function (error) {
      console.log(error);
    });
  // console.log(response.data);
  return response.data;
};

const postImages = async (first_name, last_name, email, phone, userimg) => {
  const response = await axios
    .post('http://dev3.xicom.us/xttest/savedata.php', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      user_image: userimg,
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log('Post image response  ===', response);
};

export {getImages, postImages};
