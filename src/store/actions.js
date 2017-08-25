import param from 'jquery-param'
import kickstartService from '../services/kickstart'

export default {
  async generatePackage ({commit, state}) {
    // @TODO validate email address?
    // if(!app.emailAddress) // do something
    let packages = []
    let vSections = state.sections
    for (let section in state.summary) {
      state.summary[section].activeIndex.forEach(function (index) {
        if (vSections[section].options[index].composer_package) {
          packages.push(vSections[section].options[index].composer_package)
        }
      })
    }
    let base = vSections.drupalBase.options[state.summary.drupalBase.activeIndex[0]].base
    let content = ['demo']
    let obj = {packages, base, content}
    let parameters = param(obj)

    // Set the download url when tarball link is returned.
    commit('setDownloadLink', await kickstartService.getKickstartPackageURL(state.backendURL + '?' + parameters).then(response => response))
  }
}
