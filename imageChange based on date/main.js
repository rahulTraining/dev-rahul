const customCurrentDate = new Date();
const dayOfMonth = customCurrentDate.getDate();
const month = customCurrentDate.getMonth() + 1;
const combinedDate = `${month}/${dayOfMonth}`;

//with images array
function withArrayOfImages() {
    const imageUrls = {
        'default-image': 'https://img.freepik.com/premium-photo/26-january-background-republic-day-india-republic-day-background-screen_593195-954.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph',
        '08/30': 'https://img.freepik.com/free-vector/happy-raksha-bandhan-red-background-with-decorative-rakhi_1017-19882.jpg?size=626&ext=jpg&ga=GA1.2.1977302044.1692955044&semt=ais',
        '10/14': 'https://img.freepik.com/free-vector/realistic-onam-floral-decoration_23-2148575517.jpg?size=626&ext=jpg&ga=GA1.1.1977302044.1692955044&semt=sph',
        '10/22': 'https://img.freepik.com/free-vector/happy-dussehra-bow-arrow-festival-greeting-card-background_1035-24988.jpg?size=626&ext=jpg&ga=GA1.2.1977302044.1692955044&semt=sph'
    };

    const dynamicImage = document.querySelector('.singleImg img');

    // console.log(combinedDate === '8/25');

    if (combinedDate === '8/30') {
        dynamicImage.src = imageUrls['08/30'];
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




//with dates array
withArrayOfDates()
function withArrayOfDates() {
    const ISTDate = new Date().toISOString().split('T')[0]; // Get the current IST date (YYYY-MM-DD)
    const [year, month, day] = ISTDate.split('-'); // Split the date into parts
    const indiaDate = `${month}-${day}`;

    const options = { timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit' };
    const cstDate = new Date().toLocaleDateString('en-US', options); // Get the current CST date (MM/DD/YYYY)
    const [formattedMonth, formattedDay] = cstDate.split('/');
    const usDate = `${formattedMonth}/${formattedDay}`
    console.log(indiaDate, usDate, typeof indiaDate, typeof usDate);

    const festivalDatesIndia = ['08-25', '10-14', '10-22'];
    const festivalDatesUS = ['08/28', '12-25', '01-01'];

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