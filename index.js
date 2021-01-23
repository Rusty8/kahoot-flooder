
var Kahoot = ('kahoot.js-updated');
var kahoots = [];
var name = "bots";
var bot_count = 10;


const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
  console.log(document.querySelector('#myText').value);
})


for (var i=0; i < bot_count; i++) {
    kahoots.push(new Kahoot)
kahoots[i].join(pin, name+" "+String(i)).catch(error => {
    console.log("join failed" + error.description+" "+error.status)
});
kahoots[i].on("Joined", () => {});
kahoots[i].on("QuestionStart", (question) => {
    question.answer(
        Math.floor(Math.random()* question.quizQuestionAnswers[question.questionIndex]
        ) + 0
    );


});
kahoots[i].on("Disconnect", (reason) =>{});
}






