class Stats {
  constructor($) {
    this.$ = $
    this.logStuff
    this.fetchStats
  }

  get logStuff() {
    console.log("logging stuff")
  }

  get fetchStats() {
    return this.$('#fetch-stats').on('click', (event) => {
      console.log("I am being hit")
      this.getRequest
    })
  }

  get getRequest() {
    return this.$.ajax({
      type: 'GET',
      url: '/api/v1/stats/',
      success: (data) => {
        console.log(data)
      },
      error: () => {
        $idea.parent().remove()
        alert("Something went HORRIBLY wrong!")
      }
    })
  }

  get createNewStat() {

  }
}

const stats = new Stats($)
