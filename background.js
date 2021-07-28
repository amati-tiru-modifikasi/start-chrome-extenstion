alert('hi')

function MyGenericClick(info, tab){
    console.log("Clicked on page: ", info, tab)
}

function MyImageClick(info, tab) {
    console.log("Clicked an image:", info, tab);
    chrome.windows.create({
        "url":"https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup" ,
        "type": "popup"
    })
}

chrome.contextMenus.create({
    "title": "Share",
    "contexts" : ["page"],
    "onclick": MyGenericClick,
})

chrome.contextMenus.create({
    "title": "Share Image",
    "contexts" : ["image"],
    "onclick": MyImageClick,
})

chrome.runtime.onMessage.addListener(function(msg,sender,sendResponse){
    console.log("Message", msg)
    sendResponse({"text": "Menerima LINKS"});
})