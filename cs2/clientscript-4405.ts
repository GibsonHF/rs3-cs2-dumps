//
function script4405(): int {
    var int0 = CC_GETY[1]();
    var int1 = CC_GETLAYER[1]();
    while ((int1 != comp(-1, 65535))) {
        int0 = ((int0 + IF_GETY(int1)) - IF_GETSCROLLY(int1));
        int1 = IF_GETLAYER(int1);
    };
    return int0;
}