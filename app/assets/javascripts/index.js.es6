$(document).ready( () => {
  statButton()
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
      console.log(data)
      console.log("WOW")
      console.log($('h2'))
      $('#stats').empty()
      $('#stats').append(`<h1>${data.length}</h1>`)
    },
    error: () => {
      $idea.parent().remove()
      alert("Something went HORRIBLY wrong!")
    }
  })
}
