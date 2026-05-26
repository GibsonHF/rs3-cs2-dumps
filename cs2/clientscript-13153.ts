//
function script13153(int0: number): void {
    IF_LIST_SETISSELECTED(varbitplayer_54611, 1, 0, int0);
    var int1 = 38666251;
    var int2 = 38666241;
    var int3 = 38666252;
    if ((int0 == 94240786)) {
        int1 = 94240780;
        int2 = 94240778;
        int3 = 94240781;
    };
    IF_SETHIDE(1, int1);
    IF_SETHIDE(1, int2);
    IF_SETHIDE(1, int3);
    switch (varbitplayer_54611) {
        case 0: {
            IF_SETHIDE(0, int1);
            break;
        }
        case 1: {
            IF_SETHIDE(0, int2);
            break;
        }
        case 2: {
            IF_SETHIDE(0, int3);
            break;
        }
    };
    return;
}