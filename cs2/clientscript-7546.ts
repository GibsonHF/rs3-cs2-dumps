//
function script7546(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(16414);
            stack(14549008);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(16413);
            stack(14549008);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(16415);
            stack(14549008);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(16416);
            stack(14549008);
            IF_SETGRAPHIC();
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