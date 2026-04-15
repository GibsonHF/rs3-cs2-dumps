//
function script13153(int0: component): void {
    IF_LIST_SETISSELECTED(varbitplayer_54611, 1, 0, int0);
    var int1 = comp(590, 11);
    var int2 = comp(590, 1);
    var int3 = comp(590, 12);
    if ((int0 == comp(1438, 18))) {
        int1 = comp(1438, 12);
        int2 = comp(1438, 10);
        int3 = comp(1438, 13);
    };
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, int3);
    switch (varbitplayer_54611) {
        case 0: {
            IF_SETHIDE(false, int1);
            break;
        }
        case 1: {
            IF_SETHIDE(false, int2);
            break;
        }
        case 2: {
            IF_SETHIDE(false, int3);
            break;
        }
    };
    return;
}