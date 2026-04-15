//
function script16443(int0: unknown_int): void {
    if ((IF_GETWIDTH(comp(1253, 319)) >= IF_GETWIDTH(comp(1253, 320)))) {
        return;
    };
    var int1 = IF_GETSCROLLX(comp(1253, 319));
    var int2 = (IF_GETSCROLLWIDTH(comp(1253, 319)) - IF_GETWIDTH(comp(1253, 319)));
    switch (int0) {
        case 1: {
            int1 = MIN((int1 + 80), int2);
            break;
        }
        case -1: {
            int1 = MAX((int1 - 80), 0);
            break;
        }
    };
    IF_SETSCROLLPOS(int1, 0, comp(1253, 319));
    if ((int1 == 0)) {
        script13959(comp(1253, 322), 37674 as struct, true);
        script13959(comp(1253, 324), 37674 as struct, false);
    } else if ((int1 == int2)) {
        script13959(comp(1253, 322), 37674 as struct, false);
        script13959(comp(1253, 324), 37674 as struct, true);
    } else {
        script13959(comp(1253, 322), 37674 as struct, false);
        script13959(comp(1253, 324), 37674 as struct, false);
    };
    return;
}