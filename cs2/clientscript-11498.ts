//
function script11498(int0: int, int1: int, int2: int, int3: unknown_int): string {
    if ((int2 == 4)) {
        return script11499(int1, int0);
    };
    var string0 = "";
    if (((int3 == 1) || ((int3 != 0) && (varbitplayer_28120 == 1)))) {
        string0 = TOSTRING_LOCALISED(int0, 1);
    } else {
        string0 = script11478(int0);
    };
    if ((int2 == 19)) {
        string0 = strconcat(string0, "%");
    };
    return string0;
}