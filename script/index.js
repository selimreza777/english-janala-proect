// kichu data by default load korte hobe 
// ekta arrow function create 
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // promis of response
    .then(res => res.json()) //promise of json data
    .then((json) => displayLesson(json.data));

};
// lesson er button k click korar por function likbo ekta 
const loadLevelWord = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then((data) => displayLevelWord(data.data));
};
// card er word dekhanor jonno display function create kori 
const displayLevelWord = (words) => {
  // console.log(words);



  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";


  if (words.length == 0) {
    wordContainer.innerHTML = `"
    <div class="text-center col-span-full bg-sky-100 py-10 rounded-xl space-y-6 ">
    <img class="mx-auto" src="./assets/alert-error.png">
      <p class="font-bangla text-xl font-medium text-gray-400 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
      </p>
      <h2 class="font-bangla font-bold text-3xl">নেক্সট Lesson এ যান</h2>
    </div>
    "`;

    return;
  }


  //   {
  //     "id": 83,
  //     "level": 1,
  //     "word": "Door",
  //     "meaning": "দরজা",
  //     "pronunciation": "ডোর"
  // }

  words.forEach((word) => {
    console.log(word);

    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
     <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যাইনি"}</h2>
      <p class="font-semibold">Meaning /Pronounciation</p>
      <div class="font-semibold text-2xl font-bangla"> "${word.meaning ? word.meaning : "অর্থ পাওয়া যাইনি"} / ${word.pronunciation ? word.pronunciation : "প্রতিশব্দ পাওয়া যাইনি"}"</div>
      <div class="flex justify-between items-center ">
        <button class="btn bg-[#1a91ff1a] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-[#1a91ff1a] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
      </div>
    </div>
    `;
    wordContainer.append(card);

  });


};

// data gula display korabo 
const displayLesson = (lessons) => {
  // console.log(lesson);
  // ----------------------
  // ui তে নিবার জন্য 4 টা কাজ করতে হবে এখন 

  // 1. get the container & empty 
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";


  // 2. get into every lessons
  for (let lesson of lessons) {

    // 3. create Element
    console.log(lesson)
    const btnDiv = document.createElement("dev");

    //  btnDiv er vitore ki bosbe ta decide korbo 
    btnDiv.innerHTML = `
     <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
     <i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}
     </button>
     
     `;
    // 4. append int to container 
    levelContainer.append(btnDiv);


  }

  // ------------------------

};

loadLessons();
