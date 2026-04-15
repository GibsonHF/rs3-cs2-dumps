//
function script10727(): void {
    switch (varbitplayer_25766) {
        case 0: {
            IF_SETHIDE(true, comp(1548, 25));
            break;
        }
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7: {
            IF_SETMODEL(script10724(varbitplayer_25766), comp(1548, 25));
            IF_SETHIDE(false, comp(1548, 25));
            break;
        }
    };
    return;
}