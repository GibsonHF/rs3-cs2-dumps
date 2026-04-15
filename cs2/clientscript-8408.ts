//
function script8408(int0: component): int {
    var int1 = IF_GETY(int0);
    var int2 = IF_GETPARENTLAYER(int0);
    if ((int2 == comp(-1, 65535))) {
        return int1;
    };
    while ((IF_GETPARENTLAYER(int2) != comp(-1, 65535))) {
        int1 = ((int1 + IF_GETY(int2)) - IF_GETSCROLLY(int2));
        int2 = IF_GETPARENTLAYER(int2);
    };
    return int1;
}