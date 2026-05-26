//
function script5085(int0: number): void {
    IF_SETHIDE(1, 73007126);
    varclient_160 = -1;
    CC_DELETEALL(73007130);
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(3921);
    while ((int1 < int2)) {
        if ((varclient_1095 == true)) {
            if ((CC_FIND(int0, ((int1 * 10) + 3)) == 1)) {
                CC_SETGRAPHIC(6132);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 5)) == 1)) {
                CC_SETGRAPHIC(6131);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 7)) == 1)) {
                CC_SETGRAPHIC(6133);
            };
        } else {
            if ((CC_FIND(int0, ((int1 * 10) + 3)) == 1)) {
                CC_SETGRAPHIC(6141);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 5)) == 1)) {
                CC_SETGRAPHIC(6140);
            };
            if ((CC_FIND(int0, ((int1 * 10) + 7)) == 1)) {
                CC_SETGRAPHIC(6142);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}