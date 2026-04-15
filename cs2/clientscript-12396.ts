//
function script12396(int0: component, int1: unknown_int): void {
    var int2 = 0;
    switch (int1) {
        case 0: {
            int2 = varbitplayer_30947;
            break;
        }
        case 2: {
            int2 = varbitplayer_30949;
            break;
        }
        case 1: {
            int2 = varbitplayer_30948;
            break;
        }
    };
    if ((int2 > 0)) {
        IF_SETTRANS(0, int0);
        IF_SETTEXT(inttostring(int2, 10), int0);
    } else {
        IF_SETTRANS(255, int0);
    };
    return;
}