function getElement(id){
    const element = document.getElementById(id);
    return element;
}

const callButtons = document.getElementsByClassName('call-btn')
console.log(callButtons);

for(let button of callButtons){
    button.addEventListener('click', function(){
        const callTitle = button.parentNode.parentNode.children[1].children[0].innerText;
        const callNumber = button.parentNode.parentNode.children[2].children[0].innerText;

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
        
        const copyBtn = newCall.querySelector('.copy-btn')
        const numberP = newCall.querySelector('.number');

        // Attach click listener to copy button
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(numberP.innerText); // Copy the number
            alert('Hotline Number Copied!');
            
            // Update navbar copy count if you have one
            navbarCopyCount++;
            document.getElementById('navbar-copy-count').innerText = navbarCopyCount;
        });
    })
}
// clear buttton

 const clearBtn = document.getElementById('clear-btn');
 document.getElementById('clear-btn').addEventListener('click', function(){
    const callHistoryContainer = getElement('call-history-container');
    const stayContent = callHistoryContainer.children[0];
    callHistoryContainer.innerHTML = '';
    callHistoryContainer.append(stayContent);

 })