//
function script7546(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(16414 as graphic, comp(222, 16));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(16413 as graphic, comp(222, 16));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(16415 as graphic, comp(222, 16));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(16416 as graphic, comp(222, 16));
            break;
        }
    };
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(222, 18));
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(222, 20));
    IF_SETTEXT(TOSTRING_LOCALISED(750, 1), comp(222, 22));
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(222, 19));
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(222, 21));
    IF_SETTEXT(TOSTRING_LOCALISED(750, 1), comp(222, 23));
    IF_SETTEXT(TOSTRING_LOCALISED(50, 1), comp(222, 24));
    script7548();
    IF_SETHIDE(true, comp(222, 27));
    IF_SETHIDE(true, comp(222, 28));
    varbitplayer_17987 = 0;
    return;
}