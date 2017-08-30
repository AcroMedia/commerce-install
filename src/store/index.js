import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

import sections from '@/store/sections'
import summary from '@/store/summary'

let backendURL = 'https://install-service.acromedia.com'
if (process.env.NODE_ENV === 'development') {
  // This should be the URL:Port defined in the backend docker-compose.yml file
  backendURL = 'http://kickstart-backend.localhost:8989'
}

export default {
  state: {
    sections,
    summary,
    location: 'all',
    emailAddress: '',
    downloadLink: '',
    backendURL,
  },
  actions,
  mutations,
  getters,
}
