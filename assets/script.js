// Baseado no codigo de James https://codepen.io/Sitefall/pen/MyPRXm

var ipsumcopy = [
    "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV",
    "Listen, Morty, I hate to break it to you but what people call \"love\" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science",
    "Weddings are basically funerals with cake",
    "It's like the N word and the C word had a baby and it was raised by all the bad words for Jews",
    "All right, all right, cool it! I see what's happening here. You're both young, you're both unsure about your place in the universe, and you both want to be Grandpa's favorite. I can fix this. Morty, sit here. Summer, you sit here. Now, listen—I know the two of you are very different from each other in a lot of ways, but you have to understand that as far as Grandpa's concerned, you're both pieces of shit! Yeah. I can prove it mathematically. Actually, l-l-let me grab my whiteboard. This has been a long time coming, anyways",
    "What about the reality where Hitler cured cancer, Morty? The answer is: Don't think about it",
    "I dunno, some people would pay top dollar for that kind of breakthrough",
    "You're young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable",
    "I mean, why would a Pop-Tart want to live inside a toaster, Rick? I mean, that would be like the scariest place for them to live. You know what I mean?",
    "You're missing the point Morty. Why would he drive a smaller toaster with wheels? I mean, does your car look like a smaller version of your house? No",
    "I wish that shotgun was my penis",
    "If it was, you could call me Ernest Hemingway",
    "He's not a hot girl. He can't just bail on his life and set up shop in someone else's",
    "Those guys are inside you building a piece of shit Ethan!! They're inside you building a monument to compromise!! Fuck them. Fuck those people. Fuck this whole thing Ethan",
    "Wow, I really Cronenberged up the whole place, huh Morty? Just a bunch a Cronenbergs walkin' around",
    // source: https://www.ranker.com/list/best-rick-and-morty-quotes/movie-and-tv-quotes

    "Morty, do you know what “wubba lubba dub dub” means?",
    "Why are you fighting? Can’t you see you’re all the same? / Oh Summer, first race war, huh?",
    "Listen to your sister, Morty. To live is to risk it all, otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you",
];

$(document).ready(function() {
    initbutton();
});

function initbutton(){
    $('#btn-default').on('click', function(){
    cleardisplay();
    speak();
  });
}

function cleardisplay(){
    $('#display').empty();
}

function speak(){
    var num = parseInt($('#num').val());
    var typ = $('#typ').val();
        if(typ === 'w'){
            createwords(num);
        }
else if(typ ==='s'){
createsentences(num);
}
else{/*If drop down fails default to paragraphs*/
    createparagraphs(num);
}
}

// Create Ipsum by Sentences
function createsentences(n){
    for(var i = 0; i <= (n - 1); i++){
        var r = Math.floor(Math.random() * ipsumcopy.length);
        var sent = '<p>' + ipsumcopy[r] + '.</p>';
        $('#display').append(sent);
    }
}

// Create Ipsum by paragraphs
function createparagraphs(n){
    for(var i = 0; i <= (n - 1); i++){
    var para = '<p>';
    for(var j = 0; j <= 4; j++){
        var r = Math.floor(Math.random() * ipsumcopy.length);
        para = para + ipsumcopy[r] + '. ';
    }
    para = para + '</p>';
        $('#display').append(para);
    }
}

// Create Ipsum by Words
function createwords(n){
    var combinedwords = '<p>';
    for(var i = 0; i <= (n - 1); i++){
        var a = Math.floor(Math.random() * ipsumcopy.length);
        var splitsent = ipsumcopy[a].split(' ');
        var b = Math.floor(Math.random() * splitsent.length);
        combinedwords = combinedwords + splitsent[b] + ' ';
    }
    $('#display').append(combinedwords + '</p>');
}

// clipboard.js
var clipboard = new ClipboardJS('.btn');



