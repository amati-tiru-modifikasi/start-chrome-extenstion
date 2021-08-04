chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === 'get_images"') {

        console.log(request);

        let formated_image = [];

        let images = $('img').map((i,img) => {
            if($(img).data('src')){
                return {
                    src: $(img).data('src')
                }
            } else if($(img).src) {
                return {
                    src: $(img).src
                }
            }
        })
        sendResponse(images);
    }
})