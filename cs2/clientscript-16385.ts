//
function script16385(): int {
    var int0 = (varplayer_8747 - 1);
    var int1 = script16384(varplayer_8745, int0);
    while (((int0 >= 0) && (int1 == 1))) {
        int0 = (int0 - 1);
        int1 = script16384(varplayer_8745, int0);
    };
    if ((int0 >= 0)) {
        return int0;
    };
    return varplayer_8747;
}