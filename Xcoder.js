function Xcoder(encoding_id){
    
    var MAX_ACCURACY = Math.pow(10, 5);
    
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
            
            latNew = Math.round(coords[i][0] * MAX_ACCURACY) - latPrev;
            lonNew = Math.round(coords[i][1] * MAX_ACCURACY) - lonPrev;
            
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
        
        var ENCODING_ID = 1401;
        
        if(encodedCoords[0] != ENCODING_ID)
            throw "Expected encoding_id of 1401. Given string was not encoded with 1401.";
        
        var latList = encodedCoords[1];
        var lonList = encodedCoords[2];
        var finalList = [[latList[0] / MAX_ACCURACY, lonList[0] / MAX_ACCURACY]];
        
        // lat and lon lists should be same length
        for(i=1;i<latList.length;i++){
            
            finalList.push([(latList[i-1] + latList[i]) / MAX_ACCURACY, (lonList[i-1] + lonList[i])  / MAX_ACCURACY]);
        }
        
        return finalList;
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
