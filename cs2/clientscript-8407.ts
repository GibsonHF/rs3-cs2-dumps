//
function script8407(int0: component): int {
    var int1 = IF_GETX(int0);
    var int2 = IF_GETPARENTLAYER(int0);
    if ((int2 == comp(-1, 65535))) {
        return int1;
    };
    while ((IF_GETPARENTLAYER(int2) != comp(-1, 65535))) {
        int1 = ((int1 + IF_GETX(int2)) - IF_GETSCROLLX(int2));
        int2 = IF_GETPARENTLAYER(int2);
    };
    return int1;
}