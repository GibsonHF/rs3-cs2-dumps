//
function script1815(): number {
    var int0 = CC_GETX[1]();
    var int1 = CC_GETLAYER[1]();
    while ((int1 != -1)) {
        int0 = ((int0 + IF_GETX(int1)) - IF_GETSCROLLX(int1));
        int1 = IF_GETLAYER(int1);
    };
    return int0;
}