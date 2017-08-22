import param from 'jquery-param'
import kickstartService from '../services/kickstart'

export default {
  async generatePackage ({commit, state}) {
    // @TODO validate email address?
    // if(!app.emailAddress) // do something
    let packages = []
    let vSections = state.sections
    for (let section in state.summary) {
      if (section !== 'locations') {
        state.summary[section].activeIndex.forEach(function (index) {
          packages.push(vSections[section].options[index].composer_package)
        })
      }
    }
    let base = ['lightning']
    let content = ['demo']
    let obj = {packages, base, content}
    let parameters = param(obj)
    let link = kickstartService.getKickstartPackageURL(state.backendURL + '?' + parameters).then(response =>
    response
  )
    // let link = 'http://google.ca'
    console.log(link)

    commit('setDownloadLink', link)
  }
}
