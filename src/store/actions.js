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
    let obj = {packages, base, content, email, newsletter}
    let parameters = param(obj)

    let response = await kickstartService.getKickstartPackageURL(state.backendURL + '?' + parameters).then(response => response)
    state.generatedPackage = true
    state.packageChanged = false
    window.location = response
  }
}
