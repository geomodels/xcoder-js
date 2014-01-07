# xcoder-js

A class for encoding coordinate data.

## Example

Create an Xcoder instance and set the ID of the encoding scheme.

    var xcoder = new Xcoder(1401);

Sample coordinate data:

    var path = [[-85.4892206,42.9557068],[-85.4879761,42.9537908]];
    JSON.stringify(path).length; // show length
    => 51

Encode an object

    var encoded_path = xcoder.encode(path);
    
    JSON.stringify(encoded_path); // show data
    => '[1401,[-8548922,124],[4295571,-192]]'
    
    JSON.stringify(encoded_path).length; // show length
    => 36

Decode an encoded object.

    var decoded_path = xcoder.decode(encoded_path);
    
    JSON.stringify(decoded_path); // show data
    => '[[-85.48922,42.95571],[-85.48798,42.95379]]'
    
    JSON.stringify(decoded_path).length; // show length
    => 43

*Decoded string is shorter than original string due to a maximum accuracy suport of 5 decimals (roughly 1m).*
