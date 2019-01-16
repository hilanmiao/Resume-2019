/*
* 所有动画效果
* */
{

  /* Progress Circle */
  function ace_progress_chart(element, text, value, duration) {
    // We have undefined text when user didntn fill text field from admin
    if (typeof text === "undefined") {
      text = "";
    }

    var circle = new ProgressBar.Circle(element, {
      color:  '#1FA184',
      strokeWidth: 5,
      trailWidth: 0,
      text: {
        value: text,
        className: 'progress-text',
        style: {
          top: '50%',
          left: '50%',
          color: 'inherit',
          position: 'absolute',
          margin: 0,
          padding: 0,
          transform: {
            prefix: true,
            value: 'translate(-50%, -50%)'
          }
        },
        autoStyleContainer: true,
        alignToBottom: true
      },
      svgStyle: {
        display: 'block',
        width: '100%'
      },
      duration: duration,
      easing: 'easeOut'
    });

    circle.animate(value); // Number from 0.0 to 1.0
  }

  /* Progress Line */
  function ace_progress_line(element, text, value, duration) {
    // We have undefined text when user didntn fill text field from admin
    if (typeof text === "undefined") {
      text = "";
    }

    var line = new ProgressBar.Line(element, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: duration,
      color: '#1FA184',
      trailColor: 'rgba(0,0,0,0.07)',
      trailWidth: 4,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      text: {
        value: text,
        className: 'progress-text',
        style: {
          top: '-25px',
          right: '0',
          color: 'inherit',
          position: 'absolute',
          margin: 0,
          padding: 0,
          transform: {
            prefix: true,
            value: 'translate(0, 0)'
          }
        },
        autoStyleContainer: true
      }
    });

    line.animate(value);  // Number from 0.0 to 1.0
  }

  $(function () {

    let $progressline = $('#data .progress-line')

    $.each($progressline, function (index,domEle) {
      var line =  $(domEle).find('.progress-bar');
      ace_progress_line(line[0], line.data('text'), line.data('value'), 1000);
    })

    let $progresschart = $('#data .progress-chart')

    $.each($progresschart, function (index,domEle) {
      var chart =  $(domEle).find('.progress-bar');
      ace_progress_chart(chart[0], chart.data('text'), chart.data('value'), 1000);
    })
  });

}
