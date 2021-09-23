'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    evt.preventDefault();
  // TODO: get the fortune and show it in the #fortune-text div
  $.get('/fortune', res => {
      $('#fortune-text').html(res);
  });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};
  // $.get(url, data, successFunction)
  // the parameter data is an object; each key-value pair gets sent via query string
  $.get(url, formData, res => {
    // which of these is true?
    // res = {'forecast': 'Kind of boring.', 'temp': '68F'}
    // res = "{'forecast': 'Kind of boring.', 'temp': '68F'}"

    $('#weather-info').text(res['forecast']);
  });
  // TODO: request weather with that URL and show the forecast in #weather-info
  
}

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  const url = '/order-melons.json';
  const formInputs = {
      qty: $('#qty-field').val(),
      type: $('#melon-type-field').val()
  };

  $.post(url, formInputs, res => {
      // res = jsonify({'code': result_code, 'msg': result_text}) <-- server.py
      $('#order-status').html(res); // MAYBE FIXME
      alert(res['qty'], res['type']); // FIXME
  });
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$('#order-form').on('submit', orderMelons);
