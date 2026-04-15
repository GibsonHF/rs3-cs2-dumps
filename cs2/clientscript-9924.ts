//
function script9924(int0: unknown_int): void {
    if ((int0 == 1)) {
        if ((IF_GETNEXTSUBID(comp(1431, 5)) == 0)) {
            IF_SETONTIMER(callback(script9923), comp(1431, 5));
        } else {
            script8147(0);
            script8844(1, 1, 8, comp(1431, 5), 2);
            script8844(1, 2, 8, comp(1431, 5), 3);
            script8844(1, 3, 8, comp(1431, 5), 4);
            script8844(1, 4, 8, comp(1431, 5), 5);
            script8844(1, 5, 8, comp(1431, 5), 6);
            script8844(8, script8825(2, 12), comp(1431, 6), -1);
            IF_SETONVARTRANSMIT(callback(script9923, 12314, 1), comp(1431, 6));
        };
    } else if ((IF_GETNEXTSUBID(comp(1431, 5)) > 0)) {
        if ((CC_FIND(comp(1431, 5), 2) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 3) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 4) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 5) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 6) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        IF_SETOPKEY(8, 0, 0, comp(1431, 6));
        IF_SETONVARTRANSMIT(callback(), comp(1431, 6));
    };
    return;
}