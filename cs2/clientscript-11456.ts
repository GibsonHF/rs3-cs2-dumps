//
function script11456(): int {
    var int0 = varbitplayer_28116;
    var int1 = INV_SIZE(676 as inv);
    var int2 = 0;
    while ((int0 < int1)) {
        switch (script17138(script11472(int0))) {
            case -4:
            case -6:
            case -5: {
                int2 = (int2 + 1);
                break;
            }
        };
        int0 = (int0 + 1);
    };
    return int2;
}