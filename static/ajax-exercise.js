'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    evt.preventDefault();
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

  $.get(url, formData, res => {
    // res = {'forecast': 'Kind of boring.', 'temp': '68F'}
    $('#weather-info').text(res.forecast);
  });
}

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  const url = '/order-melons.json';
  const formInputs = {
      qty: $('#qty-field').val(),
      melon_type: $('#melon-type-field').val()
  };

  $.post(url, formInputs, res => {
      // res = jsonify({'code': result_code, 'msg': result_text}) <-- server.py
      const message = `${res.code}<br>${res.msg}`;
      const order = $('#order-status');
      if (res.code === 'ERROR') {
        order.addClass('order-error');
      } else if (order.hasClass('order-error')) {
          order.removeClass('order-error');
      }
      order.html(message);
  });
}

$('#order-form').on('submit', orderMelons);
