//
function script5085(int0: component): void {
    IF_SETHIDE(true, comp(1114, 22));
    varclient_160 = -1;
    CC_DELETEALL(comp(1114, 26));
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(3921 as cs2enum);
    while ((int1 < int2)) {
        if ((varclient_1095 == true)) {
            if ((CC_FIND(int0, ((int1 * 10) + 3)) == 1)) {
                CC_SETGRAPHIC(6132 as graphic);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 5)) == 1)) {
                CC_SETGRAPHIC(6131 as graphic);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 7)) == 1)) {
                CC_SETGRAPHIC(6133 as graphic);
            };
        } else {
            if ((CC_FIND(int0, ((int1 * 10) + 3)) == 1)) {
                CC_SETGRAPHIC(6141 as graphic);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 5)) == 1)) {
                CC_SETGRAPHIC(6140 as graphic);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 7)) == 1)) {
                CC_SETGRAPHIC(6142 as graphic);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}