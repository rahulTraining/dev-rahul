const customCurrentDate = new Date();
const dayOfMonth = customCurrentDate.getDate();
const month = customCurrentDate.getMonth() + 1;
// const combinedDate = `${month}/${dayOfMonth}`;
const combinedDate = '2/14'

//with images array
function withArrayOfImages() {
    const imageUrls = {
        'default-image': 'https://img.freepik.com/premium-photo/26-january-background-republic-day-india-republic-day-background-screen_593195-954.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph',
        '2/8': 'https://img.freepik.com/free-vector/happy-raksha-bandhan-red-background-with-decorative-rakhi_1017-19882.jpg?size=626&ext=jpg&ga=GA1.2.1977302044.1692955044&semt=ais',
        '10/14': 'https://img.freepik.com/free-vector/realistic-onam-floral-decoration_23-2148575517.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph',
        '10/22': 'https://img.freepik.com/free-vector/happy-dussehra-bow-arrow-festival-greeting-card-background_1035-24988.jpg?size=626&ext=jpg&ga=GA1.2.1977302044.1692955044&semt=sph'
    };

    const dynamicImage = document.querySelector('.singleImg img');

    console.log(combinedDate);

    if (combinedDate === '2/8') {
        dynamicImage.src = imageUrls['2/8'];
        document.querySelector('.singleImg').classList.remove('d-none')
    } else if (combinedDate === '10/14') {
        dynamicImage.src = imageUrls['10/14'];
        document.querySelector('.singleImg').classList.remove('d-none')
    } else if (combinedDate === '10/22') {
        dynamicImage.src = imageUrls['10/22'];
        document.querySelector('.singleImg').classList.remove('d-none')
    } else {
        document.querySelector('.double-image').classList.remove('d-none');
    }
}
// withArrayOfImages()



//with dates array
// withArrayOfDates()
function withArrayOfDates() {
    const ISTDate = new Date().toISOString().split('T')[0]; // Get the current IST date (YYYY-MM-DD)
    const [year, month, day] = ISTDate.split('-'); // Split the date into parts
    const indiaDate = `${month}-${day}`;

    const options = { timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit' };
    const cstDate = new Date().toLocaleDateString('en-US', options); // Get the current CST date (MM/DD/YYYY)
    const [formattedMonth, formattedDay] = cstDate.split('/');
    const usDate = `${formattedMonth}/${formattedDay}`
    console.log(indiaDate, usDate, typeof indiaDate, typeof usDate);

    const festivalDatesIndia = ['02-09', '10-14', '10-22'];
    const festivalDatesUS = ['02/08', '12-25', '01-01'];

    if (festivalDatesIndia.includes(indiaDate)) {
        console.log('indian festival dates true');
        document.querySelector('.singleImg img').src = 'https://img.freepik.com/premium-photo/26-january-background-republic-day-india-republic-day-background-screen_593195-954.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph';
        // document.querySelector('.singleImg img').src = `https://d1qznzlun37fj0.cloudfront.net/images/specialdayimage/${indiaDate}.png`
        document.querySelector('.double-image').classList.add('d-none');
    } else if (festivalDatesUS.includes(usDate)) {
        console.log('us festival dates true');
        document.querySelector('.singleImg img').src = 'https://img.freepik.com/free-vector/independence-day-flat-design-theme_23-2148542922.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=ais';
        // document.querySelector('.singleImg img').src = `https://d1qznzlun37fj0.cloudfront.net/images/specialdayimage/${usDate}.png`;
        document.querySelector('.double-image').classList.add('d-none');
    } else {
        console.log('festival dates false');
        document.querySelector('.singleImg img').style.display = "none";
        document.querySelector('.double-image').classList.remove('d-none');
    }
}

//images with dateRanges based on the format
function startDateAndEndDate() {
    const ISTDate = new Date().toISOString().split('T')[0]; // Get the current IST date (YYYY-MM-DD)
    const [year, month, day] = ISTDate.split('-'); // Split the date into parts
    const indiaDate = `${month}-${day}`;

    console.log( indiaDate + 1,'1');

    const options = { timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit' };
    const cstDate = new Date().toLocaleDateString('en-US', options); // Get the current CST date (MM/DD/YYYY)
    const [formattedMonth, formattedDay] = cstDate.split('/');
    const usDate = `${formattedMonth}/${formattedDay}`
    console.log(indiaDate, usDate, typeof indiaDate, typeof usDate);

    const festivalRangesIndia = [['08-28', '08-30'], ['10-14', '10-16'], ['10-22', '10-24']];
    const festivalRangesUS = [['08/29', '08/30'], ['12/25', '12/27'], ['01/01', '01/03']];

    const specialImg = document.querySelector('.singleImg img');
    const cauroselImg = document.querySelector('.double-image');

    function isDateInRange(date, range) {
        const [start, end] = range;
        console.log(start, end, date);
        console.log(date >= start && date <= end, 'return date');
        return date >= start && date <= end;
    }

    let showFestivalImage = false;

    for (const range of festivalRangesIndia) {
        if (isDateInRange(indiaDate, range)) {
            specialImg.src = `https://d1qznzlun37fj0.cloudfront.net/images/specialdayimage/${indiaDate}.png`;
            cauroselImg.classList.add('d-none');
            showFestivalImage = true;
            return;
        }
    }
    console.log(showFestivalImage, 'showFestivalImage 2');

    if (!showFestivalImage) {
        for (const range of festivalRangesUS) {
            if (isDateInRange(usDate, range)) {
                specialImg.src = `https://d1qznzlun37fj0.cloudfront.net/images/specialdayimage/${usDate}.png`;
                cauroselImg.classList.add('d-none');
                return;
            }
        }
    }

    if (!showFestivalImage) {
        specialImg.style.display = "none";
        cauroselImg.classList.remove('d-none');
    }
}
// startDateAndEndDate();

//based on the region time
function startDateAndEndDate() {
    const ISTDate = new Date().toLocaleDateString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    console.log(ISTDate, 'ISTDate');
    //const indiaDate = ISTDate.slice(5); // Extract MM-DD part

    const cstDate = new Date().toLocaleDateString('en-US', {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });



    console.log(cstDate, 'cstDate ca');

    const festivalRangesIndia = [['02-09', '02-11'], ['10-14', '10-16'], ['10-22', '10-24']];
    const festivalRangesUS = [['08-29', '08-30'], ['12-25', '12-27'], ['01-01', '01-03']];

    const specialImg = document.querySelector('.singleImg img');
    const cauroselImg = document.querySelector('.double-image');

    function isDateInRange(date, range) {
        const [start, end] = range;
        return date >= start && date <= end;
    }

    let showIndiaFesImg = false;
    let showUsImg = false;

    for (const range of festivalRangesIndia) {
        if (isDateInRange(ISTDate, range)) {
            console.log('this is indiac fes');
            specialImg.src = `https://img.freepik.com/premium-photo/26-january-background-republic-day-india-republic-day-background-screen_593195-954.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph`;
            cauroselImg.classList.add('d-none');
            showIndiaFesImg = true;
            return;
        }
    }

    if (!showIndiaFesImg) {
        for (const range of festivalRangesUS) {
            if (isDateInRange(cstDate, range)) {
                console.log('this is us fes');
                specialImg.src = `https://d1qznzlun37fj0.cloudfront.net/images/specialdayimage/${cstDate + '1440*720'}.png`;
                cauroselImg.classList.add('d-none');
                showUsImg = true;
                return;
            }
        }
    }

    if (!showIndiaFesImg && !showUsImg) {
        console.log('this is not india fes or us fes');
        specialImg.style.display = "none";
        cauroselImg.classList.remove('d-none');
    }
}
// startDateAndEndDate()

// Function to get the current date and time in the user's local time
// function getUserLocalDateTime() {
//     // Get the user's timezone offset in minutes
//     const offsetInMinutes = new Date().getTimezoneOffset();
//     console.log(offsetInMinutes, 'offsetInMinutes');

//     // Convert the offset to milliseconds
//     const offsetInMilliseconds = offsetInMinutes * 60 * 1000;
//     console.log(offsetInMilliseconds, 'offsetInMilliseconds');

//     // Get the current UTC time
//     const utcTime = moment().valueOf();
//     console.log(utcTime, 'utcTime');

//     // Calculate the user's local time by adding the offset to the UTC time
//     const localTime = utcTime + offsetInMilliseconds;
//     console.log(localTime, 'localTime');

//     // Format the local time
//     const localDateTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');

//     return localDateTime;
// }

// // Example usage
// const userLocalDateTime = getUserLocalDateTime();
// console.log(userLocalDateTime);

//based on the exact local region time (smaple code)

function basedOnTheExactRegion() {
    function getUserLocalDateTime() {
        // Get the user's timezone using moment-timezone
        const userTimeZone = moment.tz.guess();
        console.log(userTimeZone, 'userTimeZone');
    
        // Get the current date and time in the user's timezone
        const localDateTime = moment().tz(userTimeZone).format('MM-DD');
        const presentYear = moment().tz(userTimeZone).format('YYYY');
        console.log(localDateTime, 'localDateTime');
        console.log(presentYear, 'localDateTime');
    
        return [localDateTime, presentYear];
    }
    
    // Example usage
    const userLocalDateTime = getUserLocalDateTime();
    const singleFestivalRanges = [['02-113', '02-113'], ['02-14', '02-14'], ['02-15', '02-15']];
    const multipleFestivalRanges = [['02-13', '02-13'], ['02-14', '02-14'], ['02-15', '02-15']];
    const specialImg = document.querySelector('.singleImg img');
    const cauroselImg = document.querySelector('.double-image');
    
    function isDateInRange(todayDate, dateRange) {
        const [startDate, endDate] = dateRange;
        return todayDate >= startDate && todayDate <= endDate;
    }
    
    //upload image 
    for (const range of singleFestivalRanges) {
        if (isDateInRange(userLocalDateTime[0], range)) {
            console.log('::::::::::::::::festival day');
            // specialImg.src = `https://img.freepik.com/premium-photo/26-january-background-republic-day-india-republic-day-background-screen_593195-954.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph`;
            // specialImg.src = `https://d1qznzlun37fj0.cloudfront.net/images/specialdayimage/${userLocalDateTime + '-1440x720'}.png`;
            // cauroselImg.classList.add('d-none');
            break;
        } else {
            console.log(':::::::::::::not festival day');
            // specialImg.style.display = "none";
            // cauroselImg.classList.remove('d-none');
        }
    }
    
    for (const range of multipleFestivalRanges) {
        if (isDateInRange(userLocalDateTime[0], range)) {
            console.log('::::::::::::::::multiple festivals day');
            // specialImg.src = `https://img.freepik.com/premium-photo/26-january-background-republic-day-india-republic-day-background-screen_593195-954.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph`;
            // specialImg.src = `https://d1qznzlun37fj0.cloudfront.net/images/specialdayimage/${userLocalDateTime + '-1440x720'}.png`;
            // cauroselImg.classList.add('d-none');
            break;
        } else {
            console.log(':::::::::::::not multiple festival day');
            // specialImg.style.display = "none";
            // cauroselImg.classList.remove('d-none');
        }
    }
}






