//
function script1744(): number {
    var int0 = CC_GETY();
    var int1 = CC_GETLAYER();
    while ((int1 != -1)) {
        int0 = ((int0 + IF_GETY(int1)) - IF_GETSCROLLY(int1));
        int1 = IF_GETLAYER(int1);
    };
    return int0;
}