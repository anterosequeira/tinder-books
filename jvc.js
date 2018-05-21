// var likes = 0;
// var dislikes = 0;

$('.books button').click(function(){
    // likes++;
    // $('#lblLikes').text(likes);
    var opinion = $(this).attr("data-Opinion");
    $current = $('.books.active');
    $next = $current.next()

    if ($next.length == 0) {
        $next = $('.books:first-of-type');
    }
    

    // $current.removeClass("active");
    // $next.addClass("active");
    
});

// $('.buttonDislike').click(function(){
//     dislikes++;
//     $('#lblDislikes').text(dislikes);
// });

// class Library {

//     constructor(name, img, links ){

//         this.name = name;
//         this.img = img;
//         this.links = links;
//     }

    
// }

// var livro_1 = new Library("Books of Blood","livro1.jpg", "https://en.wikipedia.org/wiki/Books_of_Blood" )

// var livro_2 = new Library("A Game of Thrones","livro2.jpg", "https://en.wikipedia.org/wiki/A_Game_of_Thrones")

// var livro_2 = new Library("Slash","livro3.jpg", "https://en.wikipedia.org/wiki/Slash_(autobiography)" )

var book1 = {
    name:"Books of Blood",
    img:"livro1.jpg",
    descricao:"Here are the stories written on the Book of Blood. They are a map of that dark highway that leads out of life towards unknown destinations. Few will have to take it. Most will go peacefully along lamplit streets, ushered out of living with prayers and caresses. But for a few, the horrors will come, skipping, to fetch them off to the highway of the damned ...Gathered together for the first time in one volume, here are fifteen mind-shattering stories from the awesome imagination of World Fantasy Award winning author Clive Barker. They will take you to the brink - and beyond ...",
    links:{
        wiki:{
            text:"wikipedia",
            url:"https://en.wikipedia.org/wiki/Books_of_Blood"

        },

        bd:{ 
            text:"book depository",
            url:"https://www.bookdepository.com/Books-Blood-Omnibus-v-1-Clive-Barker/9780751510225?ref=grid-view&qid=1525790518679&sr=1-m"

         }
    
    }
    
}
var book2 = {
    name:"A Game of Thrones",
    img:"livro2.jpg",
    descricao:"Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom's protective Wall. To the south, the king's powers are failing: his most trusted advisor dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king's new Hand, an appointment that threatens to sunder not only his family but the kingdom itself. Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, \"A Game of Thrones\" tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards who come together in a time of grim omens. Here, an enigmatic band of warriors bear swords of no human metal, a tribe of fierce wildings carry men off into madness, a cruel young dragon prince barters his sister to win back his throne, a child is lost in the twilight between life and death, and a determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counterplots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones.",
    links:{
        wiki:{
            text:"wikipedia",
            url:"https://en.wikipedia.org/wiki/A_Game_of_Thrones"

        },

        bd:{ 
            text:"book depository",
            url:"https://www.bookdepository.com/Game-Thrones-George-R-R-Martin/9780553573404?ref=grid-view&qid=1525790044580&sr=1-2"
        }
    },
    


}
var book3 = {
    name:"Slash",
    img:"livro3.jpg",
    descricao: "Slash is an autobiography written by rock guitarist Slash with Anthony Bozza. Most of the book focuses on Slash's years with Guns N' Roses, including many rock star cliches: trashed hotel rooms, groupies, drug abuse, etc. Slash talks about Axl Rose, frontman of Guns N' Roses, and his departure from the band in the mid-1990s. He explains that Axl's inability to show up to gigs and rehearsals on time, in addition to Axl's almost dictator-like control of the band contributed to the band's downfall. Slash also states that Axl wanted to change the musical direction of the band to include more synthesizers and effects, rather than guitar-driven rock as with their earlier material. Slash relates how he eventually achieved stability and sobriety after his second marriage and the birth of two sons. The book's tagline is: 'It seems excessive, but that doesn't mean it didn't happen...'",
    links:{
        wiki:{
            text:"wikipedia",
            url:"https://en.wikipedia.org/wiki/Slash_(autobiography)"

        },

        bd:{ 
            text:"book depository",
            url:"https://www.bookdepository.com/Slash-Autobiography-Slash/9780007257775?ref=grid-view&qid=1525790618456&sr=1-1"

        }
    }
    
    

}


class Library {
    constructor(){

        this.books = [book1,book2,book3];
        this.seenBooks = [];
        this.Load(book1);
    }
    Load(book){
        $(".books h1").text(book.name);
        $(".books img").attr("src",book.img);
        $(".books p").text(book.descricao);
        $(".books a.wik").attr("href",book.links.wiki.url);
        $(".books a.wik").text(book.links.wiki.text);
        $(".books a.bo").attr("href",book.links.bd.url);
        $(".books a.bo").text(book.links.bd.text);

           

    
    }

    NextBook(){
        this.seenBooks.push(this.books[0])
        this.books.splice(0,1)
        this.Load(this.books[0])
  
    }
}
var lib = new Library();
    
$('.books button').click(function(){
    lib.NextBook()
})