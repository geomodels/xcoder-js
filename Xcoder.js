function Xcoder(encoding_id){
    
    /////////////////
    // ENCODE 1401 //
    /////////////////
    
    // Expects input "coords" as array of arrays in the form
    // [[a, b], [c, d], [e, f], ...] where a, c, and e represent
    // latitudes and b, d, and f represent longitudes.
    
    // Produces an array output where the first item
    // represents the encoding_id, the second item is an array of
    // delta-encoded latitudes, and the third item is the same
    // for longitutes.
    
    this.encode1401 = function(coords){
        
        var latList = [];
        var lonList = [];
        var latPrev = 0;
        var lonPrev = 0;
        var latNew, lonNew;
        
        for(i=0;i<coords.length;i++){
            
            latNew = Math.round(coords[i][0] * Math.pow(10, 5)) - latPrev;
            lonNew = Math.round(coords[i][1] * Math.pow(10, 5)) - lonPrev;
            
            latList.push(latNew);
            lonList.push(lonNew);
            
            latPrev = latNew;
            lonPrev = lonNew;
        }
        
        finalList = [1401];
        finalList.push(latList);
        finalList.push(lonList);
        
        return finalList;
    };

    /////////////////
    // DECODE 1401 //
    /////////////////

    this.decode1401 = function(encodedCoords){
        
        
        
    };
    
    //////////
    // MAIN //
    //////////
    
    // set the proper encoding and decoding functions
    // based on the encoding_id
    switch(encoding_id){
        
        case 1401:
            this.encode = this.encode1401;
            this.decode = this.decode1401;
            break;
        
        case 0: // hold for future additions
            throw "Unknown encoding_id.";
        
        default:
            throw "Unknown encoding_id.";
    }
}
