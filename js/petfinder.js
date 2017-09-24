var API_KEY = "81719f6657e58c11df5e7ba1f6064f5c";
var API_URL = "http://api.petfinder.com/";

function getPets() {
    var url = API_URL + "shelter.getPets?format=json&id=MO60&key=" + API_KEY + "&callback=?";
    $.getJSON({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data) {
            var status = data.petfinder.header.status.code.$t;
            
            if (status == 100) {
                // Good to go
                data.petfinder.pets.pet.sort(randomOrder);
                
                data.petfinder.pets.pet.forEach(function(it) {
                    var id = it.id.$t;
                    var name = it.name.$t;
                    var image;
                    
                    it.media.photos.photo.forEach(function(photo) {
                        if (photo["@size"] == "x") {
                            image = photo.$t;
                        }
                    });
                    
                    createPetListing(id, name, image);
                });
            } else if (status == 202) {
                // Limit was exceeded
                $("#pets").hide();
            } else {
                // Something is wrong that we don't care about
                $("#pets").hide();
            }
            
        }
    });
}

function createPetListing(id, name, image) {
    var $div = $("<div>", {id: id, class: "col-sm-4 col-xs-6 petListing"});
    
    var $hoverDiv = $("<div>", {class: "hovereffect"});
    var $image = $("<img>", {class: "img-responsive", src: image});
    
    var $innerDiv = $("<div>", {class: "overlay"});
    var $title = $("<h2>").html(name);
    var $a = $("<a>", {class: "info", href: "https://www.petfinder.com/petdetail/" + id, target: "_blank"}).html("View on Petfinder");
    $innerDiv.append($title);
    $innerDiv.append($a);
    
    $hoverDiv.append($image);
    $hoverDiv.append($innerDiv);    
    
    $div.append($hoverDiv);
        
    $("#pets").append($div);
}

function randomOrder() {
    return (Math.round(Math.random()) - 0.5);
}