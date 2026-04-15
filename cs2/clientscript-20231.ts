//
function script20231(): void {
    var int0 = CC_GETWIDTH();
    var int1 = 0;
    var int2 = 4;
    var int3 = 0;
    [int1, int2] = script19613(0, int1, int2, int0, "Final Confirmation");
    CC_SETTEXTALIGN(1, 1, 0);
    if (((varbitplayer_58385 == 2) || (varbitplayer_58385 == 4))) {
        int3 = 54;
        if ((varbitplayer_58380 == 0)) {
            [int1, int2] = script19615(0, int1, int2, int0, `Rewards may be imported only by '<col=FFFFFF>${varclient_8331}</col>'.`);
            CC_SETTEXTALIGN(1, 1, 0);
        } else {
            [int1, int2] = script19615(0, int1, int2, int0, " ");
        };
    } else if ((STRING_INDEXOF_STRING(CHAT_PLAYERNAME(), "#", 0) == -1)) {
        [int1, int2] = script19615(0, int1, int2, int0, "Rewards may be imported only by 'this character'.");
        CC_SETTEXTALIGN(1, 1, 0);
    } else {
        [int1, int2] = script19615(0, int1, int2, int0, `Rewards may be imported only by '<col=FFFFFF>${CHAT_PLAYERNAME()}</col>'.`);
        CC_SETTEXTALIGN(1, 1, 0);
    };
    [int1, int2] = script20338(0, int1, int2, int0, "This decision can NOT be reversed after this point.", 208 as fontmetrics, 16777215, 1, 1);
    script20232((int2 + 4), int3);
    return;
}