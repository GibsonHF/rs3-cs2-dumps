//
function script3366(int0: component): int {
    var int1 = IF_GETY(int0);
    var int2 = IF_GETLAYER(int0);
    while ((int2 != comp(-1, 65535))) {
        int1 = ((int1 + IF_GETY(int2)) - IF_GETSCROLLY(int2));
        int2 = IF_GETLAYER(int2);
    };
    return int1;
}