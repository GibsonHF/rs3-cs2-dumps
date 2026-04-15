//
function script8292(int0: int, int1: int): unknown_int {
    var int2 = 0;
    var int3 = struct_getparam(21301, 3503);
    if ((IF_GETHIDE(int3) == false)) {
        if ((int0 == varbitplayer_18994)) {
            if ((int1 == -1)) {
                int2 = 1;
            } else if ((int1 == script441(varbitplayer_18994))) {
                return 1;
            };
        } else if ((int0 == -1)) {
            int2 = 1;
        };
    };
    return int2;
}