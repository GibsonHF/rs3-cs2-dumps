//
function script3744(int0: number): void {
    IF_SETHIDE(false, comp(746, 15));  // trh143_lucky_strike:highlight_skill
    switch (int0) {
        case 1: {
            IF_SETPOSITION(5, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 6: {
            IF_SETPOSITION(55, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 13: {
            IF_SETPOSITION(105, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 2: {
            IF_SETPOSITION(155, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 8: {
            IF_SETPOSITION(205, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 14: {
            IF_SETPOSITION(255, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 5: {
            IF_SETPOSITION(305, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 9: {
            IF_SETPOSITION(355, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 15: {
            IF_SETPOSITION(405, 0, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 3: {
            IF_SETPOSITION(5, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 10: {
            IF_SETPOSITION(55, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 16: {
            IF_SETPOSITION(105, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 7: {
            IF_SETPOSITION(155, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 11: {
            IF_SETPOSITION(205, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 17: {
            IF_SETPOSITION(255, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 4: {
            IF_SETPOSITION(305, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 19: {
            IF_SETPOSITION(355, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 18: {
            IF_SETPOSITION(405, 50, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 12: {
            IF_SETPOSITION(5, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 20: {
            IF_SETPOSITION(55, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 21: {
            IF_SETPOSITION(105, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 22: {
            IF_SETPOSITION(155, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 23: {
            IF_SETPOSITION(205, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 24: {
            IF_SETPOSITION(255, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 25: {
            IF_SETPOSITION(305, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 26: {
            IF_SETPOSITION(355, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
        case 27: {
            IF_SETPOSITION(405, 100, 0, 0, comp(746, 15));  // trh143_lucky_strike:highlight_skill
            break;
        }
    };
    script7794(48889984, 21363);
    IF_SETONMOUSEOVER(callback(), comp(746, 128));  // trh143_lucky_strike:background_boosted_skill
    IF_SETONMOUSELEAVE(callback(), comp(746, 128));  // trh143_lucky_strike:background_boosted_skill
    var int1 = 0;
    CC_CREATE(comp(746, 7), 5, int1);  // trh143_lucky_strike:boosted_skill
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int0));
    var string0 = "Boosted Skill";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(746, 7));  // trh143_lucky_strike:boosted_skill
    script3975();
    return;
}