alert('hi')

function MyGenericClick(info, tab){
    console.log("Clicked on page: ", info, tab)
}

function MyImageClick(info, tab) {
    console.log("Clicked an image:", info, tab);
}

chrome.contextMenus.create({
    "title": "Share",
    "contexts" : ["page"],
    "onclick": MyGenericClick,
})

chrome.contextMenus.create({
    "title": "Share",
    "contexts" : ["image"],
    "onclick": MyImageClick,
})

function sendResponse(){
    
}

chrome.runtime.onMessage.addListener(function(msg,sender,sendResponse){
    console.log("Message", msg)
})