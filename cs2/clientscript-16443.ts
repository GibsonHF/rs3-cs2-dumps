//
function script16443(int0: number): void {
    if ((IF_GETWIDTH(82116927) >= IF_GETWIDTH(82116928))) {
        return;
    };
    var int1 = IF_GETSCROLLX(82116927);
    var int2 = (IF_GETSCROLLWIDTH(82116927) - IF_GETWIDTH(82116927));
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
    IF_SETSCROLLPOS(int1, 0, 82116927);
    if ((int1 == 0)) {
        script13959(82116930, 37674, 1);
        script13959(82116932, 37674, 0);
    } else if ((int1 == int2)) {
        script13959(82116930, 37674, 0);
        script13959(82116932, 37674, 1);
    } else {
        script13959(82116930, 37674, 0);
        script13959(82116932, 37674, 0);
    };
    return;
}