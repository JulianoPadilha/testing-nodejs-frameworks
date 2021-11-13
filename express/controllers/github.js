import axios from 'axios';
import env from 'dotenv';
import constants from './constants.js';

const { parsed: { GITHUB_TOKEN } } = env.config();
const { apiURL, repositoryOwner, repositoryName, fileName, branch } = constants;

class Github {
  async getPackageJson(req, res) {
    try {
      const response = await axios.get(`${apiURL}/${repositoryOwner}/${repositoryName}/contents/${fileName}?ref=${branch}`, {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'accept': 'application/vnd.github.v3.raw'
        }
      });
      res.send(response.data);
    } catch (error) {
      console.log(error);
      const { data, status } = error.response;
      res.status(status).send(data);
    }
  }
}

export default new Github();
