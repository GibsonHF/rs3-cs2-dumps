//
function script6514(): void {
    var int0 = -1;
    var int1 = ENUM_GETOUTPUTCOUNT(12587 as cs2enum);
    var int2 = -1 as cs2enum;
    switch (varbitplayer_43967) {
        case 1: {
            stack(434);
            stack(3211265);
            IF_SETGRAPHIC();
            stack(435);
            stack(3211266);
            IF_SETGRAPHIC();
            int2 = 12963;
            IF_SETHIDE(0, 3211264);
            break;
        }
        case 2: {
            stack(433);
            stack(3211265);
            IF_SETGRAPHIC();
            stack(436);
            stack(3211266);
            IF_SETGRAPHIC();
            int2 = 15182;
            IF_SETHIDE(0, 3211264);
            break;
        }
        case 3: {
            stack(432);
            stack(3211265);
            IF_SETGRAPHIC();
            stack(437);
            stack(3211266);
            IF_SETGRAPHIC();
            int2 = 15184;
            IF_SETHIDE(0, 3211264);
            break;
        }
        case 4: {
            stack(430);
            stack(3211265);
            IF_SETGRAPHIC();
            stack(454);
            stack(3211266);
            IF_SETGRAPHIC();
            int2 = 15186;
            IF_SETHIDE(0, 3211264);
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
    while ((++int0 < int1)) {
        stack(enum_getvalue(0, 23, int2, int0));
        stack(enum_getvalue(0, 9, 12587 as cs2enum, int0));
        IF_SETGRAPHIC();
    };
    IF_SETONTIMER(callback(script6515, 1), comp(49, 1));
    script6517();
    IF_SETONVARTRANSMIT(callback(script6516, 8283, 1), 3211266);
    return;
}