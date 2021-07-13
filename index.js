let cards=[
    {
        image:"https://images.outlookindia.com/public/uploads/articles/2021/1/1/deepika_570_850.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://images.outlookindia.com/public/uploads/articles/2021/1/1/deepika_570_850.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Alia_Bhatt_grace_the_screening_of_Netflix%E2%80%99s_film_Guilty_%282%29_%28cropped%29.jpg/220px-Alia_Bhatt_grace_the_screening_of_Netflix%E2%80%99s_film_Guilty_%282%29_%28cropped%29.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Alia_Bhatt_grace_the_screening_of_Netflix%E2%80%99s_film_Guilty_%282%29_%28cropped%29.jpg/220px-Alia_Bhatt_grace_the_screening_of_Netflix%E2%80%99s_film_Guilty_%282%29_%28cropped%29.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Anushka_Sharma_promoting_Zero.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Anushka_Sharma_promoting_Zero.jpg",
        value:3,
        status:"closed"
    },{
        image:"https://static.india.com/imageTopics/482c5cd6ee2c7602d81957f95df96e01.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://static.india.com/imageTopics/482c5cd6ee2c7602d81957f95df96e01.jpg",
        value:4,
        status:"closed"
    },{
        image:"https://www.glamsham.com/wp-content/uploads/2021/01/f1f2f80843a315ea85f1a1553eaadc3b.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://www.glamsham.com/wp-content/uploads/2021/01/f1f2f80843a315ea85f1a1553eaadc3b.jpg",
        value:5,
        status:"closed"
    },
]

let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;

function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
           <div class="overlay ${card.status}" onclick="openCard(${index})">
           </div>

        </div>

        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    cards[index].status="opened";

    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("game over");

            location.reload();
        }

    }

    displayCards(cards);

}


