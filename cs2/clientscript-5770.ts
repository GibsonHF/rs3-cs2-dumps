//
function script5770(): void {
    var int0 = 10;
    var int1 = 5000000;
    if ((varbitplayer_12425 >= 30)) {
        int0 = 15;
        int1 = 7500000;
    };
    script4542(SCALE(varbitplayer_10059, int1, 100), comp(391, 172), comp(391, 177));
    script4212(comp(391, 177), `${TOSTRING_LOCALISED(varbitplayer_10059, 1)} / ${TOSTRING_LOCALISED(int1, 1)}`, 26 as fontmetrics, 16777215, 0);
    return;
}