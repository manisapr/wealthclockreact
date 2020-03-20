jQuery(function($) {
  var sipChart;
  var goalSipChart;
  var unittrans1= Drupal.t('Cr');
  var unittrans2= Drupal.t('Lac');

  function formatAmount(amount) {
    var unit = '';
    var CRORE = 10000000;
    var LAC = 100000;

    var lang = document.documentElement.lang.toLowerCase();

    if (parseFloat(amount) > CRORE) {
      amount = amount / CRORE;

	  unit = unittrans1;
      /*if (lang === 'hi') {
        unit = 'करोड़';
      } else {
        unit = 'Cr';
      }*/
    } else if (amount > LAC) {
      amount = amount / LAC;
	  
	  unit = unittrans2;
      /*if (lang === 'hi') {
        unit = 'लाख';
      } else {
        unit = 'Lac';
      }*/
    }
    return (amount.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }) + ' ' + unit);
  }

  // Processes the events and formatting of the range-number pairs
  // used in calculators
  function processRangeNumberPair(
    rangeSelector,
    numberSelector,
    min,
    max,
    calculate,
    errMessage) {
    $(rangeSelector).change(function() {
      $(numberSelector).val($(this).val());

      // This invokes the autoNumeric
      $(numberSelector).focus();

      calculate();
    });
    $(numberSelector).blur(function() {
      var numberValue = parseFloat($(numberSelector).val().replace(/,/g, ''));
      if (numberValue < min || numberValue > max) {
        alert(errMessage);

        if (numberValue < min) {
          numberValue = min;
        } else {
          numberValue = max;
        }

        setTimeout(function() {
          $(numberSelector).focus();
          $(numberSelector).val(numberValue);
        }, 1);
      } else {
        // Change value of the range input only if the value is valid
        $(rangeSelector).val(numberValue);
        calculate();
      }
    });
  }


  function calculateInflation() {
    var currentValue = $('#current-expenses').val();
    var inflationRate = $('#inflation-rate').val();
    var timePeriod = $('#period').val();

    var inflation = inflationCalculator(currentValue, inflationRate, timePeriod);
    if (inflation === null) {
      $('#inflation-calculator .result').html('<p class="result-error">Error! Ensure all the values are valid numbers.</p>');
    } else {
      $('#inflation-calculator .result').text(formatAmount(inflation));
    }
  }

  function calculateSip() {
    var sipAmount = $('#sip-amount').val();
    var sipFrequency = $('input[name=sip-frequency]:checked').val();
    var rateOfReturn = $('#rate-of-return').val();
    var investmentDuration = $('#investment-duration').val();
    var annualInflationRate = 0;

    var per;
    switch (sipFrequency) {
      case 'monthly':
        per = 12;
        break;
      case 'quarterly':
        per = 4;
        break;
      case 'half-yearly':
        per = 2;
        break;
      case 'yearly':
        per = 1;
        break;
      default:
        per = 0;
    }

    var result = sipCalculator(sipAmount, per, (rateOfReturn - annualInflationRate), investmentDuration);
    if (result === null) {
      $('#sip-calculator .result').html('<p class="result-error">Error! Ensure all the values are valid numbers.</p>');
    } else {
      $('#sip-future-value').text(formatAmount(result.futureValue));
      $('#sip-investments').text(formatAmount(result.investment));

      var ctx = $('#sip-chart');
      if (sipChart) {
        sipChart.destroy();
      }
      sipChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            Drupal.t('Total Investments'),
            Drupal.t('Value of Investments')
          ],
          datasets: [{
            data: [
              result.investment,
              result.investment + result.earnings
            ],
            backgroundColor: [
              '#EAD602',
              '#00A886'
            ],
            borderColor: [
              '#EAD602',
              '#00A886'

            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                userCallback: function(item) {
                  return formatAmount(item);
                }
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              },
              barPercentage: 0.3
            }]
          }
        }
      });
    }
  }

  function calculateGoalSip() {
    var goalAmount = parseFloat($('#goal-sip-amount').val().replace(/,/g, ''));
    var rateOfReturn = $('#goal-rate-of-return').val();
    var investmentDuration = $('#goal-investment-duration').val();
    var annualInflationRate = 0;

    var result = goalSipCalculator(goalAmount, (rateOfReturn - annualInflationRate), investmentDuration);
    if (result === null) {
      $('#goal-sip-calculator .result').html('<p class="result-error">Error! Ensure all the values are valid numbers.</p>');
    } else {
      $('#goal-sip-pmt').text(formatAmount(result.pmtValue));
      $('#goal-sip-investments').text(formatAmount(result.investment));
    }
  }

  // Inflation calculator
  function inflationCalculator(currentValue, annualInflationRate, period) {
    if (!($.isNumeric(currentValue) && $.isNumeric(annualInflationRate) && $.isNumeric(period))) {
      return null;
    }

    currentValue = parseFloat(currentValue);
    annualInflationRate = parseFloat(annualInflationRate);
    period = parseFloat(period);

    var inflatedValue = currentValue * Math.pow((1 + annualInflationRate / 100), period);
    return inflatedValue;
  }

  // SIP Calculator
  function sipCalculator(sipAmount, per, rateOfReturn, investmentDuration) {
    // Future Value is an internal function
    function fv(rate, per, nper, pmt, pv) {
      if (pmt == 0 || nper == 0 || per == 0) {
        return null;
      }

      rate = rate / (per * 100);

      var futureValue;

      if (rate === 0) {
        futureValue = -(pv + (pmt * nper));
      } else {
        var x = Math.pow(1 + rate, nper);
        futureValue = -(-pmt + x * pmt + rate * x * pv) / rate;
      }

      return futureValue;
    }

    if (!($.isNumeric(sipAmount) && $.isNumeric(rateOfReturn) && $.isNumeric(investmentDuration))) {
      return null;
    }

    sipAmount = parseFloat(sipAmount);
    rateOfReturn = parseFloat(rateOfReturn);
    investmentDuration = parseFloat(investmentDuration);

    var nper = per * investmentDuration;
    var futureValue = fv(rateOfReturn, per, nper, sipAmount * -1, 0);
    var investment = sipAmount * nper;

    return {
      futureValue: futureValue,
      investment: investment,
      earnings: (futureValue - investment)
    };
  }

  function goalSipCalculator(goalAmount, rateOfReturn, investmentDuration) {
    // PMT is an internal function
    function pmt(rate, per, nper, pv, fv) {
      if (fv == 0) {
        return null;
      }

      rate = rate / (per * 100);

      if (rate == 0) {
        pmtValue = -(fv + pv) / nper;
      } else {
        var x = Math.pow(1 + rate, nper);
        fv = fv + x * pv;
        pmtValue = -((rate * fv) / (-1 + x));
      }

      return pmtValue;
    }

    if (!($.isNumeric(goalAmount) && $.isNumeric(rateOfReturn) && $.isNumeric(investmentDuration))) {
      return null;
    }

    goalAmount = parseFloat(goalAmount);
    rateOfReturn = parseFloat(rateOfReturn);
    investmentDuration = parseFloat(investmentDuration);

    // Assuming monthly SIP investment
    var per = 12;
    var nper = per * investmentDuration;

    var pmtValue = pmt(rateOfReturn, per, nper, 0, goalAmount) * -1;
    var investment = pmtValue * nper;

    return {
      pmtValue: pmtValue,
      investment: investment,
      earnings: (goalAmount - investment)
    };
  }

  // Inflation calculator inputs
  $('#copy-current-expenses').autoNumeric('init');
  processRangeNumberPair(
    '#current-expenses',
    '#copy-current-expenses',
    1000,
    1000000,
    calculateInflation,
    'You have not entered the correct value of current expenses.'
  );

  processRangeNumberPair(
    '#inflation-rate',
    '#copy-inflation-rate',
    '1',
    '15',
    calculateInflation,
    'You have not entered the correct annual inflation rate.'
  );

  processRangeNumberPair(
    '#period',
    '#copy-period',
    '1',
    '70',
    calculateInflation,
    'You have not entered the correct time period.'
  );

  // SIP calculator inputs
  $('#copy-sip-amount').autoNumeric('init');
  processRangeNumberPair(
    '#sip-amount',
    '#copy-sip-amount',
    '0',
    '5000000',
    calculateSip,
    'You have not entered the correct SIP amount.'
  );

  $('input:radio[name="sip-frequency"]').change(function() {
    calculateSip();
  });

  processRangeNumberPair(
    '#rate-of-return',
    '#copy-rate-of-return',
    '1',
    '30',
    calculateSip,
    'You have not entered the correct expected rate of return.'
  );

  processRangeNumberPair(
    '#investment-duration',
    '#copy-investment-duration',
    '1',
    '50',
    calculateSip,
    'You have not entered the correct investment duration.'
  );

  // Inputs for Goal SIP calculator
  // This field does not have a corresponding range input field
  $('#goal-sip-amount').autoNumeric('init');
  $('#goal-sip-amount').blur(function() {
    $('#goal-sip-amount').val($(this).val());
    var goalSipAmount = parseFloat($('#goal-sip-amount').val().replace(/,/g, ''));
    if (goalSipAmount < 0 || goalSipAmount > 1000000000) {
      alert('You have not entered the correct goal amount.');
      $('#goal-sip-amount').focus();
      $('#goal-sip-amount').val("1000000000");
    } else {
      calculateGoalSip();
    }
  });

  processRangeNumberPair(
    '#goal-rate-of-return',
    '#copy-goal-rate-of-return',
    '1',
    '30',
    calculateGoalSip,
    'You have not entered the correct expected rate of return.'
  );

  processRangeNumberPair(
    '#goal-investment-duration',
    '#copy-goal-investment-duration',
    '1',
    '50',
    calculateGoalSip,
    'You have not entered the correct investment duration.'
  );

  // Execute the calculators on page load.
  calculateInflation();
  $('input:radio[name="sip-frequency"]').filter('[value="monthly"]').attr('checked', true);
  calculateSip();
  calculateGoalSip();
});

