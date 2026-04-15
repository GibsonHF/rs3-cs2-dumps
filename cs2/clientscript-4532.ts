//
function script4532(int0: component): void {
    var int1 = IF_GETLAYER(int0);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    if ((IF_FIND(int1) == 1)) {
        CC_SETPOSITION(0, 4, 1, 0);
        CC_SETSIZE(16384, 23, 2, 0);
    };
    script4211(int0, 56 as fontmetrics, 15458492, 0);
    return;
}