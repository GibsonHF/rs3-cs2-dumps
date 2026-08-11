//
function script9278(): void {
    var int0 = 0;
    if (((2147483647 - varplayer_4024) > varplayer_4025)) {
        int0 = (varplayer_4024 + varplayer_4025);
    } else {
        int0 = 2147483647;
    };
    IF_SETTEXT(`Total points: <col=EBD090>${inttostring(int0, 10)}</col>`, comp(513, 2));  // xmas13_rewards:points
    if (((varbitplayer_21253 == 1) || (int0 < 500))) {
        IF_SETCOLOUR(12134690, comp(513, 26));  // xmas13_rewards:scarf_cost
        if ((varbitplayer_21253 == 1)) {
            IF_SETTEXT("Already unlocked.", comp(513, 26));  // xmas13_rewards:scarf_cost
        };
        IF_SETHIDE(true, comp(513, 27));  // xmas13_rewards:scarf_buy
        IF_SETHIDE(false, comp(513, 28));  // xmas13_rewards:scarf_buy_disabled
    };
    if ((((varbitplayer_21254 == 1) || (int0 < 1000)) || (MAP_MEMBERS() == 0))) {
        IF_SETCOLOUR(12134690, comp(513, 40));  // xmas13_rewards:jumper_cost
        if ((varbitplayer_21254 == 1)) {
            IF_SETTEXT("Already unlocked.", comp(513, 40));  // xmas13_rewards:jumper_cost
        } else if ((MAP_MEMBERS() == 0)) {
            IF_SETTEXT("Members' only.", comp(513, 40));  // xmas13_rewards:jumper_cost
        };
        IF_SETHIDE(true, comp(513, 41));  // xmas13_rewards:jumper_buy
        IF_SETHIDE(false, comp(513, 42));  // xmas13_rewards:jumper_buy_disabled
    };
    if (((((varbitplayer_21255 == 1) || (int0 < 2000)) || (MAP_MEMBERS() == 0)) || (TESTBIT(varplayer_1778, MODULO(42, 32)) == 1))) {
        IF_SETCOLOUR(12134690, comp(513, 48));  // xmas13_rewards:demon_cost
        if ((varbitplayer_21255 == 1)) {
            IF_SETTEXT("Already unlocked.", comp(513, 48));  // xmas13_rewards:demon_cost
        } else if ((MAP_MEMBERS() == 0)) {
            IF_SETTEXT("Members' only.", comp(513, 48));  // xmas13_rewards:demon_cost
        };
        IF_SETHIDE(true, comp(513, 49));  // xmas13_rewards:demon_buy
        IF_SETHIDE(false, comp(513, 50));  // xmas13_rewards:demon_buy_disabled
    };
    return;
}