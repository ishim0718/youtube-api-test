fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=viewCount&safeSearch=moderate&type=video&videoEmbeddable=true&key=[AIzaSyCabDHkqaj_hlSQTQo4JrNKMgByCyNTQ0k]")
.then(data => data.json())
.then(list => console.log(list)); 