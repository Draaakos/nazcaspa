import { post, get } from 'utils/fetchUtil';

const service = {
  sendInterestedInfo(payload) {
    const url = 'api/v1/interest';

    return post(url, payload)
      .then(response => response.json())
  },
  fetchGallery() {
    const url = 'api/v1/gallery';

    return get(url)
      .then(response => response.json())
  }
}

export default service;