export default {
  setDownloadLink (state, payload) {
    state.downloadLink = payload
  },
  setStoreLocation (state, payload) {
    state.location = payload
  },
  resetSummaryOptions (state) {
    for (var section in state.summary) {
      console.log(state.sections[section].required)
      console.log(section)
      if (state.sections[section].required) {
        if (section !== 'locations') {
          let title = state.sections[section].options[0].title
          state.summary[section].activeOptions = []
          state.summary[section].activeIndex = []
          state.summary[section].activeOptions.push({title: title})
          state.summary[section].activeIndex.push(0)
          state.summary[section].section = state.sections[section].title
        }
      } else {
        state.summary[section].activeOptions = []
        state.summary[section].activeIndex = []
        state.summary[section].section = ''
      }
    }
  },
  setSelectedOption (state, payload) {
    let section = payload.section
    let index = payload.index
    let title = state.sections[section].options[index].title

    if (payload.reset) {
      // Reset the array to remove old selection.
      state.summary[section].activeOptions = []
      state.summary[section].activeIndex = []
    }

    state.summary[section].activeIndex.push(index)
    state.summary[section].activeOptions.push({title: title})
    state.summary[section].section = state.sections[section].title
  },
  removeSelectedOption (state, payload) {
    state.summary[payload.section].activeIndex.splice(payload.clicked, 1)
    state.summary[payload.section].activeOptions.splice(payload.clicked, 1)
  }
}
