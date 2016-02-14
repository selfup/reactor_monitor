$(document).ready( () => {
  statButton(); fetchStats()
})

const statButton = () => {
  $('#fetch').on('click', (event) => {
    fetchStats()
  })
}

const fetchStats = () => {
  $.ajax({
    type: 'GET',
    url: '/api/v1/stats/',
    success: (data) => {
      $('#stats').empty()
      $('#stats').append(`<h1>Running: ${data.running}</h1>`)
      $('#stats').append(`<h1>Power Out: ${data.power_out}</h1>`)
      $('#stats').append(`<h1>Power In: ${data.power_in}</h1>`)
      $('#stats').append(`<h1>Resources Left: ${data.resources_left}</h1>`)
      $('#stats').append(`<h1>Up Time: ${data.up_time}</h1>`)
      $('#stats').append(`<h1>Down Time: ${data.down_time}</h1>`)
      $('#stats').append(`<h1>Out of Fuel In: ${data.time_until_out_of_fuel}</h1>`)
    },
    error: () => {
      alert("Something went HORRIBLY wrong!")
    }
  })
}
