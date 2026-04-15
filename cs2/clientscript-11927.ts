//
function script11927(int0: stat): int {
    var int1 = 1;
    if ((varbitplayer_48190 == 1)) {
        switch (int0) {
            case 27:
            case 14: {
                int1 = (int1 + 1);
                break;
            }
            default: {
                script12478(`Invalid skill attempting to multiply - ${enum_getvalue(17, 36, 680 as cs2enum, int0)}`);
                break;
            }
        };
    };
    return int1;
}