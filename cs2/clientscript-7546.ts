//
function script7546(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(16414, 14549008);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(16413, 14549008);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(16415, 14549008);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(16416, 14549008);
            break;
        }
    };
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), 14549010);
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), 14549012);
    IF_SETTEXT(TOSTRING_LOCALISED(750, 1), 14549014);
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), 14549011);
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), 14549013);
    IF_SETTEXT(TOSTRING_LOCALISED(750, 1), 14549015);
    IF_SETTEXT(TOSTRING_LOCALISED(50, 1), 14549016);
    script7548();
    IF_SETHIDE(1, 14549019);
    IF_SETHIDE(1, 14549020);
    varbitplayer_17987 = 0;
    return;
}