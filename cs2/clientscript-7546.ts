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