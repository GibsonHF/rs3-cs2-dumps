//
function script16386(): number {
    var int0 = (varplayer_8747 + 1);
    var int1 = script16384(varplayer_8745, int0);
    var int2 = script16380(varplayer_8745);
    while ((int0 < int2)) {
        if ((int1 == 1)) {
            int0 = (int0 + 1);
            int1 = script16384(varplayer_8745, int0);
        };
        if ((int0 < int2)) {
            return int0;
        };
        return varplayer_8747;
    };
    if ((int0 < int2)) {
        return int0;
    };
    return varplayer_8747;
}