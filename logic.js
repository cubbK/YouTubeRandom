function genereazaCuvint(){
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 3; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));


    return text;
}
$( document ).ready(function() {
    var cuvintGen = genereazaCuvint();
    var key = 'AIzaSyBy0PhbxUjNGuJ2kabcr9A9eh4QMuwPa2s ';
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q='+cuvintGen+'&key=' + key;
    $.getJSON( url, function( data ) {
        var json = data.items;
        json = json.filter(function (obj) {
          return obj.id.kind == 'youtube#video';
        });

        var chosen = json[Math.floor(Math.random() * json.length)];
        var id = chosen.id.videoId;
        console.log(id);
        var embedLink = 'https://www.youtube.com/embed/'+ id;
        $('#videoFrame').attr('src' , embedLink);
        $('#loading-text').text('');
    });

    $('#show-another-btn').click(()=>{
      location.reload();
    })
    
});
