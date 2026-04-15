//
function script16834(int0: unknown_int): string {
    var int1 = varbitplayer_51872;
    var int2 = varbitplayer_51873;
    if ((int0 == 0)) {
        int1 = varbitplayer_51773;
        int2 = varbitplayer_51774;
    };
    if ((int2 <= 0)) {
        return "";
    };
    var string0 = `+${inttostring(((int1 + int2) / 10), 10)}% XP Boost (skills below level 70)`;
    return string0;
}