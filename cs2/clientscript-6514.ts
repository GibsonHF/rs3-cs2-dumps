//
function script6514(): void {
    var int0 = -1;
    var int1 = ENUM_GETOUTPUTCOUNT(12587 as cs2enum);
    var int2 = -1 as cs2enum;
    switch (varbitplayer_43967) {
        case 1: {
            IF_SETGRAPHIC(434 as graphic, comp(49, 1));
            IF_SETGRAPHIC(435 as graphic, comp(49, 2));
            int2 = 12963 as cs2enum;
            IF_SETHIDE(false, comp(49, 0));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(433 as graphic, comp(49, 1));
            IF_SETGRAPHIC(436 as graphic, comp(49, 2));
            int2 = 15182 as cs2enum;
            IF_SETHIDE(false, comp(49, 0));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(432 as graphic, comp(49, 1));
            IF_SETGRAPHIC(437 as graphic, comp(49, 2));
            int2 = 15184 as cs2enum;
            IF_SETHIDE(false, comp(49, 0));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(430 as graphic, comp(49, 1));
            IF_SETGRAPHIC(454 as graphic, comp(49, 2));
            int2 = 15186 as cs2enum;
            IF_SETHIDE(false, comp(49, 0));
            break;
        }
        default: {
            IF_SETHIDE(true, comp(49, 0));
            break;
        }
    };
    if ((int2 == -1 as cs2enum)) {
        return;
    };
    int0 = (int0 + 1);
    while ((int0 < int1)) {
        IF_SETGRAPHIC(enum_getvalue(0, 23, int2, int0), enum_getvalue(0, 9, 12587 as cs2enum, int0));
    };
    IF_SETONTIMER(callback(script6515, 1), comp(49, 1));
    script6517();
    IF_SETONVARTRANSMIT(callback(script6516, 8283, 1), comp(49, 2));
    return;
}