//
function script6356(): int {
    var int0 = CC_GETY();
    var int1 = CC_GETPARENTLAYER();
    while ((IF_GETPARENTLAYER(int1) != comp(-1, 65535))) {
        int0 = ((int0 + IF_GETY(int1)) - IF_GETSCROLLY(int1));
        int1 = IF_GETPARENTLAYER(int1);
    };
    return int0;
}