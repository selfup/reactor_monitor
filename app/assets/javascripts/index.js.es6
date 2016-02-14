class Stats {
  constructor() {
    this.logStuff
  }

  get logStuff() {
    console.log("logging stuff")
  }

  get fetchStats() {
    $('#fetch-stats').on(click', (event) => {

    $.ajax({
      type: 'GET',
      url: '/api/v1/stats/',
      success: () => {
        $idea.parent().remove()
      },
      error: () => {
        $idea.parent().remove()
        alert("Something went HORRIBLY wrong!")
      }
    })
  })
  }

  get createNewStat() {

  }
}

const stats = new Stats
