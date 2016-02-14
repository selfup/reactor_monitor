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
      console.log($('h2'));
    },
    error: () => {
      $idea.parent().remove()
      alert("Something went HORRIBLY wrong!")
    }
  })
}
