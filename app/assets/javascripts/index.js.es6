$(document).ready( () => {
  statButton(); fetchStats()
})

const statButton = () => {
  $('#fetch').on('click', (event) => {
    console.log("I am being hit")
    fetchStats()
  })
}

const fetchStats = () => {
  $.ajax({
    type: 'GET',
    url: '/api/v1/stats/',
    success: (data) => {
      $('#stats').empty()
      $('#stats').append(`<h1>${data.length}</h1>`)
      $('#stats').append(`<h1>${data}</h1>`)
    },
    error: () => {
      alert("Something went HORRIBLY wrong!")
    }
  })
}
