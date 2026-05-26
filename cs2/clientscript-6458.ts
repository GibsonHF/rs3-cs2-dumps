//
function script6458(): void {
    var int0 = (ENUM_GETOUTPUTCOUNT(5962) - 1);
    var int1 = comp(-1, 65535);
    while ((int0 >= 0)) {
        int1 = enum_getvalue(0, 9, 5962 as cs2enum, int0);
        if (((int1 != comp(-1, 65535)) && (CC_FIND(int1, 1) == 1))) {
            if ((varclient_1967 == int0)) {
                CC_SETGRAPHIC(2289);
            } else {
                CC_SETGRAPHIC(2288);
            };
        };
        int0 = (int0 - 1);
    };
    return;
}