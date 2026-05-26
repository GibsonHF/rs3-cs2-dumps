//
function script9924(int0: number): void {
    if ((int0 == 1)) {
        if ((IF_GETNEXTSUBID(93782021) == 0)) {
            IF_SETONTIMER(callback(script9923), 93782021);
        } else {
            script8147(0);
            script8844(1, 1, 8, 93782021, 2);
            script8844(1, 2, 8, 93782021, 3);
            script8844(1, 3, 8, 93782021, 4);
            script8844(1, 4, 8, 93782021, 5);
            script8844(1, 5, 8, 93782021, 6);
            script8844(8, script8825(2, 12), 93782022, -1);
            IF_SETONVARTRANSMIT(callback(script9923, 12314, 1), 93782022);
        };
    } else if ((IF_GETNEXTSUBID(93782021) > 0)) {
        if ((CC_FIND(93782021, 2) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(93782021, 3) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(93782021, 4) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(93782021, 5) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(93782021, 6) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        IF_SETOPKEY(8, 0, 0, 93782022);
        IF_SETONVARTRANSMIT(callback(), 93782022);
    };
    return;
}