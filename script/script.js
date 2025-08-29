function getElement(id){
    const element = document.getElementById(id);
    return element;
}

// call btn
let coins = 100;
const callButtons = document.getElementsByClassName('call-btn')
console.log(callButtons);

for(let button of callButtons){
    button.addEventListener('click', function(){
        const callTitle = button.parentNode.parentNode.children[1].children[0].innerText;
        const callNumber = button.parentNode.parentNode.children[2].children[0].innerText;


        if (coins < 20){
            alert('Not enough coins to make a call!')
            return;
        }

        coins -= 20;
        document.getElementById('coin-count').innerText = coins;

        alert(`📞Calling
${callTitle} (${callNumber})...`)

        const callHistoryContainer = getElement('call-history-container');
        const newCall = document.createElement('div');
        const time = new Date().toLocaleTimeString();

        newCall.innerHTML = `<div class="bg-[#fafafa] max-w-sm w-full h-auto mt-3 p-3 rounded-xl flex justify-between items-center">
                                 <div>
                                 <h1>${callTitle}</h1>
                                 <p>${callNumber}</p>
                                 </div>
                                 <span class ="color:[#fafafa] text-sm">${time}</span>
                            </div>`
        callHistoryContainer.append(newCall); 
    })
}

// copy btn
let navbarCopyCount = 0;
const copyButtons = document.querySelectorAll('.copy-btn');
for (let button of copyButtons) {
    button.addEventListener('click', function() {
        const card = button.parentNode.parentNode;
        const callNumber = card.querySelector('.number').innerText;
        navigator.clipboard.writeText(callNumber);
        alert('Hotline Number Copied!');

        navbarCopyCount++;
        document.getElementById('navbar-copy-count').innerText = navbarCopyCount;
    });
}


// clear buttton

 const clearBtn = document.getElementById('clear-btn');
 document.getElementById('clear-btn').addEventListener('click', function(){
    const callHistoryContainer = getElement('call-history-container');
    const stayContent = callHistoryContainer.children[0];
    callHistoryContainer.innerHTML = '';
    callHistoryContainer.append(stayContent);

 })