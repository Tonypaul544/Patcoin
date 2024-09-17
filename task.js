

//SET REWARD  FUNCTIONALITIES

const rewardAlert = document.querySelector(".reward");
const claimBtn1 = document.querySelector(".btn1");
const TaskOne = document.querySelector(".name1");
const amount1 = document.querySelector(".amount1");







TaskOne.addEventListener("click", claimReward1);
function claimReward1() {
    setTimeout(() => {
    amount1.style.display = "none";
    claimBtn1.style.display = "block";
    }, "2000")


    claimBtn1.addEventListener("click", notifyReward1);
    function notifyReward1() {
        setTimeout(() => {
        rewardAlert.style.display = "block";
        claimBtn1.style.opacity = 0.3
        claimBtn1.textContent = "Claimed.!"

        setTimeout(() => {
            rewardAlert.style.opacity = 0.8;
        }, "2800");

        setTimeout(() => {
            rewardAlert.style.opacity = 0.5
        }, "2900");

        setTimeout(() => {
            rewardAlert.style.opacity = 0.3
        }, "3000");

        setTimeout(() => {
            rewardAlert.style.opacity = 0.2
        }, "3120");

        setTimeout(() => {
            rewardAlert.style.display = "none";
        }, "3250");
        
    }, "2000");
    };
};



const rewardAlert2 = document.querySelector(".reward2");

const claimBtn2 = document.querySelector(".btn2");
const TaskTwo = document.querySelector(".name2");
const amount2 = document.querySelector(".amount2");

const name2 = document.querySelector(".name2");

name2.addEventListener("click", claimReward2);
function claimReward2() {
    
    setTimeout(() => {
        amount2.style.display = "none";
        claimBtn2.style.display = "block";
    }, "3000")
    
    

    claimBtn2.addEventListener("click", notifyReward2);
    function notifyReward2() {
        setTimeout(() => {
            claimBtn2.textContent = "Claimed.!"
            rewardAlert.style.display = "block";
            claimBtn2.style.opacity = 0.3
            
            setTimeout(() => {
                rewardAlert.style.opacity = "0.8";
            }, "2700")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.5";
            }, "2800")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.3";
            }, "2900")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.1";
            }, "3000")

            setTimeout(() => {
                rewardAlert.style.display = "none";
            }, "3100");

        }, "2000");

        claimBtn2.removeEventListener("click", notifyReward2);
    };
    
};





const rewardAlert3 = document.querySelector(".reward");

const claimBtn3 = document.querySelector(".btn3");
const TaskThree = document.querySelector(".name3");
const amount3 = document.querySelector(".amount3");

const name3 = document.querySelector(".name3");

function claimReward3() {
    // amount3.style.display = "none";
    // claimBtn3.style.display = "block";
    
    setTimeout(() => {
        amount3.style.display = "none";
        claimBtn3.style.display = "block";
    }, "3000")
 
    claimBtn3.addEventListener("click", notifyReward3);
    function notifyReward3() {
        claimBtn3.textContent = "Claimed.!"
        rewardAlert.style.display = "block"
    }
}






const rewardAlert4 = document.querySelector(".reward4");

const claimBtn4 = document.querySelector(".btn4");
const TaskTFour = document.querySelector(".name4");
const amount4 = document.querySelector(".amount4");

const name4 = document.querySelector(".name4");

name4.addEventListener("click", claimReward4);
function claimReward4() {
    
    setTimeout(() => {
        amount4.style.display = "none";
        claimBtn4.style.display = "block";
    }, "4000")
    
    

    claimBtn4.addEventListener("click", notifyReward4);
    function notifyReward4() {
        setTimeout(() => {
            claimBtn4.textContent = "Claimed.!"
            rewardAlert.style.display = "block";
            claimBtn4.style.opacity = 0.4
            
            setTimeout(() => {
                rewardAlert.style.opacity = "0.8";
            }, "2700")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.5";
            }, "2800")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.3";
            }, "2900")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.1";
            }, "3000")

            // setTimeout(() => {
                rewardAlert.style.display = "none";
            // }, "3100");

        }, "2000");

        claimBtn2.removeEventListener("click", notifyReward2);
    };
    
};






