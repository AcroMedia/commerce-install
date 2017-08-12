import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

import sections from '@/store/sections'
import summary from '@/store/summary'

export default {
  state: {
    sections,
    summary,
    location: 'all',
    emailAddress: '',
    download: ''
  },
  actions,
  mutations,
  getters
}
