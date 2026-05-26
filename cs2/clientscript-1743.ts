//
function script1743(): number {
    var int0 = CC_GETX();
    var int1 = CC_GETLAYER();
    while ((int1 != -1)) {
        int0 = ((int0 + IF_GETX(int1)) - IF_GETSCROLLX(int1));
        int1 = IF_GETLAYER(int1);
    };
    return int0;
}