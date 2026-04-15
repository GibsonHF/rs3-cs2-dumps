//
function script3415(int0: boolean, int1: component): void {
    var int2 = 0;
    var int3 = IF_GETNEXTSUBID(int1);
    while ((int2 < int3)) {
        if ((CC_FIND(int1, int2) == 1)) {
            if ((int2 == 16)) {
                CC_SETNOCLICKTHROUGH(true);
            } else {
                CC_SETNOCLICKTHROUGH(int0);
            };
        };
        int2 = (int2 + 1);
    };
    return;
}