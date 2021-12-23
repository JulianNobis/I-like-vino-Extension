console.log('from background');

//TODO: don't forget to scroll down (to load the next divs) and then LOOP it!!!

chrome.runtime.onInstalled.addListener((reason) => {
    chrome.tabs.create({
        url: 'https://www.instagram.com/weindieler',
        active: true
    }, function(tab) {
        getPosts();
        console.log("callback onInstalled create="+tab, tab.title, tab.url)
    });
});

function getPosts(){
    console.log("I (should) get posts");
    var divs = document.getElementsByClassName('v1Nh3 kIKUG  _bz0w'); //ERROR: class name changes constantly!!
    console.log(divs);
}
