const docx = document;
getelemid = (self) => {
    return docx.getElementById(self);
},
queryslt = (self) => {
    return docx.querySelector(self);
}
let CurrentScore = 0;
const QuestionName = getelemid("QuestionName");
const OptionsButton = document.querySelectorAll(".btn");
const QuestionImg = getelemid("QuestionImage");
let GameStorage = {
    AllGameQuestionName:[
        "มดอะไรใหญ่กว่ามดเอ็กซ์",
        "ปลาอะไรว่ายน้ำจากขั้วโลกเหนือไปขั้วโลกใต้",
        "หมูอะไรกินไม่อิ่ม",
        "หมูอะไรกินอิ่ม",
        "ทอดหมูยังไงให้ไม่ติดกระทะ"
    ],
    Answer:{
        AntXL:["มดเอ็กซ์แอล","มดยักษ์ปักใต้","มดคันไฟ","มดใหญ่ไล่มดเล็ก"],
        FishSwim:["ปลาโลมา","ปลาฉลาม","ปลาไม่มีอะไรทำ","ไม่มีหรอก"],
        MooGinmaiAim:["หมูน้อย","ข้าวขาหมู","หมูน้อยๆข้าวน้อยๆ","หมูเยอะ"],
        MooGinAim:["หมูตุ๋น","หมูหัน","หมูเยอะ","หมูน้อยๆข้าวเยอะๆ"],
        MootidGata:["ใส่น้ำมันเยอะ","ทอดในกระทะดีๆ","ทอดในหม้อ","ซื้อเอง"]
    },
    Image:[
        "./Images/Ant.png",
        "./Images/fish.png",
        "./Images/MooNoAim.png",
        "./Images/MooAim.png",
        "./Images/MootidGata.png"
    ]
}
const AllQuestionName = GameStorage.AllGameQuestionName;
const AllAnswer = GameStorage.Answer;
const UpdateImage=(Obj)=>{
    QuestionImg.src = Obj;
}
function UpdateQuestion(self){
    let Scoretext = getelemid("score");
    Scoretext.textContent = CurrentScore;
    OptionsButton.forEach(function(btn,idx){
        switch(self){
            case AllQuestionName[0]:
                QuestionName.textContent = AllQuestionName[0];
                UpdateImage(GameStorage.Image[0])
                btn.textContent = AllAnswer.AntXL[idx];
                break;
            case AllQuestionName[1]:
                QuestionName.textContent = AllQuestionName[1]
                UpdateImage(GameStorage.Image[1])
                btn.textContent = AllAnswer.FishSwim[idx];
                break;
            case AllQuestionName[2]:
                QuestionName.textContent = AllQuestionName[2]
                UpdateImage(GameStorage.Image[2])
                btn.textContent = AllAnswer.MooGinmaiAim[idx];
                break;
            case AllQuestionName[3]:
                QuestionName.textContent = AllQuestionName[3]
                UpdateImage(GameStorage.Image[3])
                btn.textContent = AllAnswer.MooGinAim[idx];
                break;
            case AllQuestionName[4]:
                QuestionName.textContent = AllQuestionName[4]
                UpdateImage(GameStorage.Image[4])
                btn.textContent = AllAnswer.MootidGata[idx];
                break;
            default:
                QuestionName.textContent = "ข้าวจ้าว Face reveal"
                UpdateImage("./Images/kaojao.jpeg")
                btn.textContent = "จ้าวกินหมู";
                break;
        }
    })
}
OptionsButton.forEach(function(button,idx) {
    UpdateQuestion(AllQuestionName[0])
    button.addEventListener('click',function() {
        switch(QuestionName.textContent){
            case GameStorage.AllGameQuestionName[0]:
                if(button.textContent == GameStorage.Answer.AntXL[0]){
                    alert("คำตอบถูกต้อง !");
                    CurrentScore += 1;
                    UpdateQuestion(AllQuestionName[1])
                } else{alert("ผิด!")}
                break;
            case GameStorage.AllGameQuestionName[1]:
                if (button.textContent == AllAnswer.FishSwim[2]){
                    alert("คำตอบถูกต้อง");
                    CurrentScore += 1;
                    UpdateQuestion(AllQuestionName[2])
                }else{
                    alert("ผิด!")
                }
                break;
            case GameStorage.AllGameQuestionName[2]:
                if (button.textContent == AllAnswer.MooGinmaiAim[0]){
                    alert("คำตอบถูกต้อง");
                    CurrentScore += 1;
                    UpdateQuestion(AllQuestionName[3])
                }else{
                    alert("ผิด!")
                }
                break;
            case GameStorage.AllGameQuestionName[3]:
                if (button.textContent == AllAnswer.MooGinAim[3]){
                    alert("คำตอบถูกต้อง");
                    CurrentScore += 1;
                    UpdateQuestion(AllQuestionName[4])
                }else{
                    alert("ผิด!")
                }
                break;
            case GameStorage.AllGameQuestionName[4]:
                if (button.textContent == AllAnswer.MootidGata[2]){
                    alert("คำตอบถูกต้อง");
                    CurrentScore += 1;
                    UpdateQuestion();
                }else{
                    alert("ผิด!")
                }
                break;
        }
    });
});

