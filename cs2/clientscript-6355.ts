//
function script6355(): int {
    var int0 = CC_GETX();
    var int1 = CC_GETPARENTLAYER();
    while ((IF_GETPARENTLAYER(int1) != comp(-1, 65535))) {
        int0 = ((int0 + IF_GETX(int1)) - IF_GETSCROLLX(int1));
        int1 = IF_GETPARENTLAYER(int1);
    };
    return int0;
}