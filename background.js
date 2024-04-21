
const ControlShiftE = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => {
                //document.body.style.backgroundColor = 'red';
                //console.log("red");

                const btnEdit = document.querySelector('.float-left > a');
                window.location.href = btnEdit.href;
                console.log("ControlShiftE");
            }
        });
    });
};

const ControlShiftK = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => {
                //document.body.style.backgroundColor = 'blue';
                //console.log("blue");

                const inputPassword = document.querySelector('.w-100');
                inputPassword.value = '0000'

                const btnSuccess = document.querySelector('.btn-success');
                if (btnSuccess) btnSuccess.click();

                console.log("ControlShiftK");
            }
        });
    });
};

chrome.commands.onCommand.addListener((command) => {
    if (command === "inject-script") ControlShiftE();

    if (command === "inject-script2") ControlShiftK();
});
