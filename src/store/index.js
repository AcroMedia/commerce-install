import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

import sections from '@/store/sections'
import summary from '@/store/summary'

let backendURL = 'https://install-service.acromedia.com'
if (process.env.NODE_ENV === 'development') {
  // This is the URL for kickstart-backend. Uncomment the corresponding
  // URL used by lando, docker-compose or your custom server.
  // backendURL = 'https://kickstartbackend.lndo.site'
  backendURL = 'http://kickstart-backend.localhost:8989'
}

export default {
  state: {
    sections,
    summary,
    location: 'all',
    emailAddress: '',
    newsletter: '',
    packageChanged: false,
    generatedPackage: false,
    backendURL,
  },
  actions,
  mutations,
  getters,
}
