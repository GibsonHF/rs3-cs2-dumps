//
function script1643(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(20713);
            stack(67764232);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(20712);
            stack(67764232);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(20715);
            stack(67764232);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(20716);
            stack(67764232);
            IF_SETGRAPHIC();
            break;
        }
        case 6: {
            stack(20714);
            stack(67764232);
            IF_SETGRAPHIC();
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