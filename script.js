const images = [];

// List all image filenames in the images array.
const totalImages = 39; // Set the actual number of images in the folder
for (let i = 1; i <= totalImages; i++) {
    images.push(`surprise/images/photo${i}.jpg`);
}

// List of sub-messages for each image
const subMessages = [
    "May 30, 2023 una kang napunta ng QPL. Remember nung pinaplano palang natin to?haha",
    "Estetik yarn? Unang plant tour mo after nung presentation. PS ang laki ng tiyan ko..hahaha",
    "Touch Down Cagbalete!! MAY 31, 2023 Happy Birthday Mujeeee. Ganda mo dito pramis",
    "Syempre dahil special day, marami kang photos sa Cagbalete. May special memory ako jan sa log na yan 👀",
    "Naalala ko pa nung puro lang plano to. Ang saya na natuloy sya. Best memory of 2023",
    "Still waiting for the day na kaya na natin mamili sa mall tapos popormahan mo ako. PS Cute natin dito",
    "Unang concert ko to, and sobrang special kasi ikaw kasama ko. Ang hirap humanap ng ibang concert na tatapat dito kasi sobrang special nya. Thank you for this core memory mujeeee",
    "I'm always happy when I'm with you.",
    "Unang self shoot natiiiiin. baby steps to being official.",
    "Ang saya lang na pwede mag whacky pose kasama ka",
    "Para tayong 2010 couple dito.hahaha",
    "Birthday ko to, nagStarbs tayo tapos inaabangan mo yung rider na may dalang cake. Sobrang happy ko ng araw na to. Love you mujeeee",
    "Yung moments natin sa baba ng condo were some of the most memorable ones. Kahit saglit lang palagi",
    "Sobrang Happy ko kapag nasosolo kita or pag lumalabas tayo. Lets go to church again ha mujeee?",
    "Di ko sure kung san to pero ang ganda mo dito,hahaha",
    "Naalala ko na, nasa ayala tayo kasi gusto mo makita tong light shoooow",
    "1st pic sa Baguio Together",
    "Northern Blossoms. First time ko dito, hopefully nagenjoy ka din gaya ko",
    "Cute cute mo dito ohh..sarap na sarap sa tinapay",
    "Meeting the daberkads, kahit dalawa lang sila..hahaha",
    "Mandatory baguio photo",
    "Back to reality pero okay lang kasi kasama kita. <3",
    "Feb 14, Valentine's Day. Bago magsara yung Starbs sa may Mplace.",
    "Cravings Satisfied.",
    "Lez go to Bicoooool!!!",
    "The \"Napaaga ang flight so need tumambay sa airport\" photo. Also, try natin yung tripod ni naning",
    "Next model ng Ford Raptor. Ganda ng jowa ko diba?",
    "Naks napatulog si Sajiii. Bait yarn?hahaha",
    "Twinning sa outfit.",
    "Pagod na pero picture pa din, sayang ang sorsogon.",
    "Back to reality again.",
    "Sad yarn???",
    "Sneaky office photo. Kahit ang boring dito sa office, basta kasama ka, masaya ako.",
    "Twinning ulit ng jacket. bagay sayo yung jacket, lalo na yung may ari ng jacket.haha",
    "Thank you for the memories Mujeee, sobrang happy ko na nakita ko yung ganda ng bicol at sorsogon kasama ka.",
    "Syempre may isang troll pic para naman mahumble ka konti..joke lang, cute mo kaya",
    "Forda active hiker yarn?hahaha..tara ulit magbundok bebe",
    "Kahit na anong optical illusion pa yan, lagi kong nakikitang kasama ka, palagi"
];

let currentIndex = 0;

const photosDiv = document.getElementById('photos');
const subMessageDiv = document.getElementById('sub-message');
const messageSection = document.querySelector('.message');

// Create img elements for each image
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Memory ${index + 1}`;
    if (index === 0) {
        img.classList.add('active');
        subMessageDiv.textContent = subMessages[index];
    }
    photosDiv.appendChild(img);
});

function showImage(index) {
    const allImages = document.querySelectorAll('.photos img');
    allImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    subMessageDiv.textContent = subMessages[index];

    // Check if the last image is being shown
    if (index === images.length - 1) {
        messageSection.style.display = 'block';
    } else {
        messageSection.style.display = 'none';
    }
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}
