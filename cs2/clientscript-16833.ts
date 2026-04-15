//
function script16833(int0: unknown_int): string {
    var int1 = varbitplayer_51872;
    var int2 = varbitplayer_51873;
    if ((int0 == 0)) {
        int1 = varbitplayer_51773;
        int2 = varbitplayer_51774;
    };
    var string0 = `+${inttostring((int1 / 10), 10)}%`;
    if ((int2 > 0)) {
        string0 = `${string0} XP Boost (skills level 70 and above)`;
    } else {
        string0 = `${string0} XP Boost`;
    };
    return string0;
}