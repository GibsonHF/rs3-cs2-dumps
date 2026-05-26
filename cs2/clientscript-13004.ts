//
function script13004(): void {
    var int0 = 0;
    IF_SETHIDE(true, comp(1098, 67));
    IF_SETHIDE(true, comp(1098, 75));
    IF_SETHIDE(true, comp(1098, 83));
    IF_SETHIDE(true, comp(1098, 91));
    IF_SETHIDE(true, comp(1098, 99));
    IF_SETHIDE(true, comp(1098, 107));
    IF_SETHIDE(true, comp(1098, 115));
    IF_SETHIDE(true, comp(1098, 123));
    switch (varplayer_2047) {
        case 1: {
            IF_SETHIDE(false, comp(1098, 67));
            int0 = varbitplayer_8946;
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1098, 75));
            int0 = varbitplayer_8947;
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1098, 83));
            int0 = varbitplayer_8948;
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1098, 91));
            int0 = varbitplayer_8949;
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1098, 99));
            int0 = varbitplayer_8950;
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1098, 107));
            int0 = varbitplayer_8951;
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1098, 115));
            int0 = varbitplayer_8952;
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(1098, 123));
            int0 = varbitplayer_8953;
            break;
        }
    };
    IF_SETHIDE(script734(int0), comp(1098, 170));
    IF_SETTEXT("All events relative to game time", comp(1098, 54));
    return;
}