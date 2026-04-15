//
function script8405(int0: component): [int, int] {
    var int1 = IF_GETX(int0);
    var int2 = IF_GETY(int0);
    var int3 = IF_GETPARENTLAYER(int0);
    while ((int3 != comp(-1, 65535))) {
        int1 = ((int1 + IF_GETX(int3)) - IF_GETSCROLLX(int3));
        int2 = ((int2 + IF_GETY(int3)) - IF_GETSCROLLY(int3));
        int3 = IF_GETPARENTLAYER(int3);
    };
    return [int1, int2];
}