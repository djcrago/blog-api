export default function processDateTime(dateTime) {
  const date = dateTime.slice(0, 10);

  const yearMonthDay = date.split('-');

  const year = yearMonthDay[0];
  const month = yearMonthDay[1];
  const day = yearMonthDay[2];

  let processedDateTime = '';

  if (month === '01') {
    processedDateTime += 'January';
  } else if (month === '02') {
    processedDateTime += 'February';
  } else if (month === '03') {
    processedDateTime += 'March';
  } else if (month === '04') {
    processedDateTime += 'April';
  } else if (month === '05') {
    processedDateTime += 'May';
  } else if (month === '06') {
    processedDateTime += 'June';
  } else if (month === '07') {
    processedDateTime += 'July';
  } else if (month === '08') {
    processedDateTime += 'August';
  } else if (month === '09') {
    processedDateTime += 'September';
  } else if (month === '10') {
    processedDateTime += 'October';
  } else if (month === '11') {
    processedDateTime += 'November';
  } else if (month === '12') {
    processedDateTime += 'December';
  }

  processedDateTime += ` ${day}, ${year}`;

  // Including timestamp information would occur here if desired
  const time = dateTime.slice(10);

  return processedDateTime;
}
