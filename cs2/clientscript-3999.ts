//
function script3999(int0: obj): int {
    if ((PLAYERMEMBER() == true)) {
        return script5777();
    };
    if ((OC_MEMBERS(OC_UNCERT(int0)) == 1)) {
        return script5777();
    };
    var int1 = script5778();
    var int2 = script14294();
    var int3 = script14337();
    var int4 = 0;
    if ((int2 < int1)) {
        int4 = (int3 + (int1 - int2));
        if ((varplayer_8970 != -1)) {
            int4 = (int4 - script14293(varplayer_8970, int3));
        };
        if ((int4 < script5777())) {
            return int4;
        };
        return script5777();
    };
    return int1;
}