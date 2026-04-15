//
function script3878(int0: unknown_int, int1: unknown_int, long0: long): void {
    var string0 = "";
    var int2 = -1;
    [string0, int2] = script17399(long0);
    if ((int0 == 0)) {
        string0 = `-${REMOVETAGS(string0)}`;
        int2 = 16711680;
    } else if ((int0 == 1)) {
        string0 = `+${string0}`;
    };
    script14423(string0, int2, 96534537, comp(1473, 10), comp(1473, 11));
    script14423(string0, int2, 109182982, comp(1666, 1), comp(1666, 9));
    if ((script8292(0, 3) == 1)) {
        script14423(string0, int2, 96600076, comp(1474, 13), comp(1474, 14));
    };
    if (((varbitplayer_27169 == 1) && (varbitplayer_1192 == 1))) {
        script14423(string0, int2, 125829129, comp(1920, 13), comp(1920, 14));
    };
    if (((int1 == 0) && (script10906() == 1))) {
        script14423(string0, int2, -1, comp(517, 20), comp(517, 21));
    };
    return;
}