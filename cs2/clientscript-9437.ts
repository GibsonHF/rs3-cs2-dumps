//
function script9437(int0: unknown_int): void {
    var int1 = -1;
    switch (int0) {
        case 47054944: {
            int1 = 0;
            break;
        }
        case 47054948: {
            int1 = 1;
            break;
        }
        case 47054952: {
            int1 = 2;
            break;
        }
        case 47054956: {
            int1 = 3;
            break;
        }
        default: {
            return;
        }
    };
    if ((varbitplayer_21071 == int1)) {
        return;
    };
    IF_SETPOSITION((4 + (int1 * 120)), 0, 0, 0, comp(718, 92));
    IF_SETHIDE(false, comp(718, 68));
    return;
}