//
function script2591(int0: dbrow, int1: obj, int2: int): void {
    if ((varplayer_8331 == -1 as dbrow)) {
        script12478("Error, unable to find a material dbrow in smithing_interface_re_draw");
        return;
    };
    if ((int0 != -1 as dbrow)) {
        varplayer_8332 = int0;
    };
    if ((int1 != -1 as obj)) {
        varplayer_8333 = int1;
    };
    if ((int2 != -1)) {
        varbitplayer_43239 = int2;
    };
    script2584(varplayer_8331, comp(37, 13), comp(37, 51), comp(37, 52), comp(37, 14), comp(37, 61), comp(37, 62), comp(37, 15), comp(37, 71), comp(37, 72), comp(37, 16), comp(37, 81), comp(37, 82), comp(37, 24), comp(37, 91), comp(37, 92), 3, 0);
    script2584(varplayer_8332, comp(37, 93), comp(37, 102), comp(37, 103), comp(37, 104), comp(37, 113), comp(37, 114), comp(37, 115), comp(37, 124), comp(37, 125), comp(37, 126), comp(37, 135), comp(37, 136), comp(37, 137), comp(37, 146), comp(37, 147), 4, 0);
    script2598();
    return;
}