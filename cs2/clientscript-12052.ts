//
function script12052(int0: unknown_int): int {
    var int1 = 0;
    switch (int0) {
        case 1:
        case 2: {
            int1 = varbitplayer_30224;
            break;
        }
        case 3: {
            int1 = varbitplayer_30225;
            break;
        }
        default: {
            return -1;
        }
    };
    if ((MAP_MEMBERS() == 0)) {
        return 0;
    };
    return int1;
}