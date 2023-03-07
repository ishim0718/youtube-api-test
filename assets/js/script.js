//const youtubeApi = AIzaSyAWHwk1CEaivU5yaXOeni7b65XTn6GCYWk
var searchTopic = document.querySelector("#search");
var searchBtn = document.querySelector("#search-btn");
//console.log(searchTopic);

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var searchInput = document.querySelector("#search").value;
    
    console.log(searchInput);

    localStorage.setItem("topic", searchInput);
})

var youtubeUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=5&order=viewCount&q=excercize&type=video&videoEmbeddable=true&key=AIzaSyAWHwk1CEaivU5yaXOeni7b65XTn6GCYWk"

//fetch 5 results for q=excercize; todo: make search result be q
//fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=5&order=viewCount&q=excercize&type=video&videoEmbeddable=true&key=AIzaSyAWHwk1CEaivU5yaXOeni7b65XTn6GCYWk")
//.then(data => data.json())
//.then(list => console.log(list)); 

