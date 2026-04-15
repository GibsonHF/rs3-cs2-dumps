//
function script20328(): unknown_int {
    if ((varbitplayer_58366 == 0)) {
        return 0;
    };
    if (((DATE_MINUTES() - varplayer_12428) < 30)) {
        return 0;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = unk11024();
    if (((int0 == 0) || (int0 == 1))) {
        return 0;
    };
    return 1;
}