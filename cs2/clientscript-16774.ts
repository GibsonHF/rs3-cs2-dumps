//
function script16774(int0: struct): int {
    var int1 = 150;
    switch (int0) {
        case 39853: {
            if ((varbitplayer_58203 == 0)) {
                int1 = 50;
            } else {
                int1 = struct_getparam(int0, 9276);
            };
            varbitplayer_58203 = 0;
            break;
        }
        case 51061: {
            if ((varbitplayer_58204 == 1)) {
                int1 = 40;
            } else {
                int1 = 0;
            };
            varbitplayer_58204 = 0;
            break;
        }
        default: {
            int1 = struct_getparam(int0, 9276);
            break;
        }
    };
    return int1;
}