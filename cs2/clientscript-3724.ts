//
function script3724(int0: component): component {
    var int1 = int0;
    var int2 = IF_GETLAYER(int1);
    while ((int2 != comp(-1, 65535))) {
        int1 = int2;
        int2 = IF_GETLAYER(int1);
    };
    return int1;
}