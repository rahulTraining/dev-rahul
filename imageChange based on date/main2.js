function getUserLocalDateTime() {
    // Get the user's timezone using moment-timezone
    const userTimeZone = moment.tz.guess();
    console.log(userTimeZone, 'userTimeZone');

    // Get the current date and time in the user's timezone
    const localDateTime = moment().tz(userTimeZone).format('MM-DD');
    const presentYear = moment().tz(userTimeZone).format('YYYY');
    console.log(localDateTime, 'localDateTime');
    console.log(presentYear, 'presentYear');

    return [localDateTime, presentYear];
}

// Example usage
const [todayDate, presentYear] = getUserLocalDateTime();

// Define festival date ranges
const singleFestivalRanges = [['02-30', '02-30'], ['02-14', '02-14'], ['02-15', '02-15']];
const multipleFestivalRanges = [['02-29', '02-30', '2'], ['03-14', '03-14', '3'], ['03-15', '03-15', '1']];

// Function to check if a date is within a given range
function isDateInRange(date, range) {
    const [startDate, endDate] = range;
    let isInRange =  date >= startDate && date <= endDate;
    return {isInRange, range: isInRange ? range : null}
}

// Check for single festival day
let isSingleFestivalDay = false;
for (const range of singleFestivalRanges) {
    let result = isDateInRange(todayDate, range);
    if (result.isInRange) {
        isSingleFestivalDay = true;
        console.log('Today is a single festival day:', todayDate);
        break;
    }
}

// Check for multiple festivals day
let isMultipleFestivalsDay = false;
for (const range of multipleFestivalRanges) {
    let result = isDateInRange(todayDate, range);
    let dateRange = result.range
    console.log(result.range, 'result.range');
    let lastItem = dateRange[dateRange.length - 1];
    craeteCaruselForFest(lastItem);
    if (result.isInRange) {
        isMultipleFestivalsDay = true;
        console.log('Today is a multiple festivals day:', todayDate);
        break;
    }
}

// Determine image to display based on festival day
const specialImg = document.querySelector('.singleImg img');
const cauroselImg = document.querySelector('.default-banner');
const multipleFestImg = document.querySelector('.multipleFestImg img');

if (isSingleFestivalDay) {
    // Display single festival image
    specialImg.src = `path_to_single_festival_image_for_year_${presentYear}.jpg`;
    cauroselImg.classList.add('d-none');
    multipleFestImg.classList.add('d-none');
    document.querySelector('.singleImg').classList.remove('d-none');
} else if (isMultipleFestivalsDay) {
    // Display multiple festivals image
    // multipleFestImg.src = `https://d1qznzlun37fj0.cloudfront.net/images/02-28-2024_1240x630.png`;
    document.querySelector('.multipleFestImg').classList.remove('d-none');
    cauroselImg.classList.add('d-none');
    specialImg.classList.add('d-none');
} else {
    // Display default image
    specialImg.classList.add('d-none');
    cauroselImg.classList.remove('d-none');
    multipleFestImg.classList.add('d-none');
}

// function craeteCaruselForFest(item) {
//     console.log(item, typeof Number(item), 'last item form craeteCaruselForFest fun');
//     let multipleFestImg = document.getElementById('multipleFestImg');

//     for(let i=0; i < Number(item); i++) {
//         let div = document.createElement('div');
//         div.classList = 'carousel-item';
//         let img = document.createElement('img');
//         img.classList = 'w-60';
//         div.appendChild(img);
//         multipleFestImg.firstElementChild.appendChild(div);
//         multipleFestImg.firstElementChild.firstElementChild.classList.add('active')
//         img.src = `https://d1qznzlun37fj0.cloudfront.net/images/${2-28-2024}_${i}_1240x630.png`;
//     }
// }

function createCarouselForFest(item) {
    console.log(item, typeof Number(item), 'last item from createCarouselForFest function');
    let multipleFestImg = document.getElementById('multipleFestImg');

    // Clear previous carousel items
    multipleFestImg.innerHTML = '';

    for (let i = 0; i < Number(item); i++) {
        let div = document.createElement('div');
        div.classList.add('carousel-item');

        // Add 'active' class to the first carousel item
        if (i === 0) {
            div.classList.add('active');
        }

        let img = document.createElement('img');
        img.classList.add('w-60');
        img.src = `https://d1qznzlun37fj0.cloudfront.net/images/${new Date().toISOString().slice(0, 10)}_${i}_1240x630.png`;

        div.appendChild(img);
        multipleFestImg.appendChild(div);
    }
}

function craeteCaruselForFest(item) {
    console.log(item, typeof Number(item), 'last item from createCarouselForFest function');

    // Select the container element
    let multipleFestImg = $('#multipleFestImg');
    // Clear previous carousel items
    multipleFestImg.empty();
    // Loop to create carousel items
    for (let i = 0; i < Number(item); i++) {
        // Create a div for each carousel item
        let div = $('<div></div>', {
            class: 'carousel-item'
        });

        // Add 'active' class to the first carousel item
        if (i === 0) {
            div.addClass('active');
        }

        // Create an image element
        let img = $('<img>', {
            class: 'w-60',
            src: `https://d1qznzlun37fj0.cloudfront.net/images/${new Date().toISOString().slice(0, 10)}_${i}_1240x630.png`
        });

        // Append the image to the div
        div.append(img);

        // Append the div to the container
        multipleFestImg.append(div);
    }
}