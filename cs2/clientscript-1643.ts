//
function script1643(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(20713, 67764232);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(20712, 67764232);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(20715, 67764232);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(20716, 67764232);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(20714, 67764232);
            break;
        }
    };
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), 67764234);
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), 67764236);
    IF_SETTEXT(TOSTRING_LOCALISED(800, 1), 67764238);
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), 67764235);
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), 67764237);
    IF_SETTEXT(TOSTRING_LOCALISED(800, 1), 67764239);
    IF_SETTEXT(TOSTRING_LOCALISED(50, 1), 67764240);
    script1647();
    IF_SETHIDE(1, 67764247);
    varbitplayer_21623 = 0;
    return;
}