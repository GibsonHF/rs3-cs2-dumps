//
function script1643(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(20713 as graphic, comp(1034, 8));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(20712 as graphic, comp(1034, 8));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(20715 as graphic, comp(1034, 8));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(20716 as graphic, comp(1034, 8));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(20714 as graphic, comp(1034, 8));
            break;
        }
    };
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(1034, 10));
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1034, 12));
    IF_SETTEXT(TOSTRING_LOCALISED(800, 1), comp(1034, 14));
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(1034, 11));
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1034, 13));
    IF_SETTEXT(TOSTRING_LOCALISED(800, 1), comp(1034, 15));
    IF_SETTEXT(TOSTRING_LOCALISED(50, 1), comp(1034, 16));
    script1647();
    IF_SETHIDE(true, comp(1034, 23));
    varbitplayer_21623 = 0;
    return;
}