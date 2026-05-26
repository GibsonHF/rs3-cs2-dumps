//
function script20205(): void {
    IF_SETTEXT(enum_getvalue(0, 36, 9057 as cs2enum, varbitplayer_58391), comp(1409, 48));
    if ((script20135(varbitplayer_58391) == 1)) {
        IF_SETENABLED(true, comp(1409, 84));
        IF_SETCOLOUR(16777215, comp(1409, 85));
    } else {
        IF_SETENABLED(false, comp(1409, 84));
        IF_SETCOLOUR(3289650, comp(1409, 85));
    };
    IF_SETGRAPHIC(18100 as graphic, comp(1409, 59));
    IF_SETGRAPHIC(18100 as graphic, comp(1409, 62));
    IF_SETGRAPHIC(18100 as graphic, comp(1409, 66));
    IF_SETGRAPHIC(18100 as graphic, comp(1409, 81));
    IF_SETHIDE(true, comp(1409, 73));
    IF_SETHIDE(true, comp(1409, 75));
    IF_SETHIDE(true, comp(1409, 77));
    IF_SETHIDE(true, comp(1409, 79));
    switch (varbitplayer_58390) {
        case 1: {
            IF_SETGRAPHIC(18102 as graphic, comp(1409, 59));
            IF_SETHIDE(false, comp(1409, 73));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(18102 as graphic, comp(1409, 62));
            IF_SETHIDE(false, comp(1409, 75));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(18102 as graphic, comp(1409, 66));
            IF_SETHIDE(false, comp(1409, 77));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(18102 as graphic, comp(1409, 81));
            IF_SETHIDE(false, comp(1409, 79));
            break;
        }
        default: {
            return;
        }
    };
    return;
}