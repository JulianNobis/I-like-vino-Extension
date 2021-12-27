console.log('from background');

// TODO: don't forget to scroll down (to load the next divs) and then LOOP it!!!
// alternatively try to retrieve the posts via instagram api and like them if like-button interaction works

chrome.runtime.onInstalled.addListener((reason) => {
    chrome.tabs.create({
        //url: 'https://www.instagram.com/weindieler',
        url: 'https://www.instagram.com/p/CX-ZbozNMQ5/', // url of a specific post to see if like-button can be interacted with
        active: true
    }, function(tab) {
        getPosts();
        console.log("callback onInstalled create="+tab, tab.title, tab.url)
    });
});

function getPosts(){
    console.log("I (should) get posts");
    var divs = document.querySelectorAll('wpO6b  '); //ERROR: class name changes constantly!!
    console.log(divs);
}
