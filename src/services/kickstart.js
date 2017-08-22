import Vue from 'vue'

export default {
  getKickstartPackageURL (urlParams) {
    return Vue.http.get(urlParams).then(response => {
      return response.body
    }, response => {
      // error callback
      console.log(response)
    })
  },
}
