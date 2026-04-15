//
function script10725(): void {
    switch (varbitplayer_25764) {
        case 0: {
            IF_SETHIDE(true, comp(1548, 29));
            break;
        }
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7: {
            IF_SETMODEL(script10724(varbitplayer_25764), comp(1548, 29));
            IF_SETHIDE(false, comp(1548, 29));
            break;
        }
    };
    return;
}