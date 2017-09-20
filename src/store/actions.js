import param from 'jquery-param'
import kickstartService from '../services/kickstart'

export default {
  async generatePackage ({commit, state}) {
    let email = state.emailAddress
    let newsletter = state.newsletter

    if (!email) {
      email = 'anonymous'
    }

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
    // let ci = []
    // if (state.summary.ci.activeIndex[0] !== undefined) {
    //   ci = vSections.drupalBase.options[state.summary.ci.activeIndex[0]].ci
    // }
    let obj = {packages, base, content, email, newsletter}
    let parameters = param(obj)

    // Set the download url when tarball link is returned.
    // commit('setDownloadLink', await kickstartService.getKickstartPackageURL(state.backendURL + '?' + parameters).then(response => response))

    let response = await kickstartService.getKickstartPackageURL(state.backendURL + '?' + parameters).then(response => response)
    window.location = response
  }
}
