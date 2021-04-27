    var question = [
        "Чингис хааны хатан?", 
        "Их монгол улсыг байгуулсан хааны нэр?",
        "Өүлэн үжиний эхийн нэр?",
        "Жамухын овогийн нэр юу вэ?",
        "Есүхэй баатар ямар бүлэг иргэнд хорлогддог вэ?"
    ];
    var answer = [
        "өүлэн", 
        "тэмүүжин",
        "цотан",
        "жадран",
        "татар"
    ];
    co=1;
    var word = answer[co-1];
    var count = 0;
    var point = 0;
    var answerArray = [];


function start(){
        for(i=0;i < co;i++){
            document.getElementById("quest").innerHTML = question[i];
        }    
        for(var i=0; i<word.length; i++){
            answerArray[i] = "__";
        }
        a = answerArray.join(" ");
        document.getElementById("answer").innerHTML = a; 
    }
function CheckWord()
    {
        var Vseg = document.getElementById("Vseg").value;
        if(Vseg.length > 0){
            var c=0;
            for(var i =0; i<word.length; i++){
                if(word[i] === Vseg){
                    answerArray[i] = Vseg;
                    c++;
                    point++;
                }
            }
            
            if(c === 0){
                count++;
            }
            if(point === word.length){
                co++;
                question[5] = "Баяр хүргэе";
                if(co === 6){
                    document.getElementById("win").innerHTML = "Та яаллаа";
                    
                }
                word = answer[co - 1];
                point = 0; 
                answerArray = [];
                start();
            }
            document.getElementById("aldaa").innerHTML = count + " амь хасагдлаа." ;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
        }
        if(count === 5){
            document.getElementById("lost").innerHTML = "Та ялагдлаа. Үг бол: " + word;

        }
    }
    window.addEventListener("load", start, false);
