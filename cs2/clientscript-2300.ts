//[clientscript,topstat_prayer_button_op]
function script2300(int0: unknown_int, int1: unknown_int, int2: component, int3: unknown_int, int4: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    if (((varplayer_7058 == 0) && (varplayer_7059 == 0))) {
        varbitplayer_5941 = 0;
        script2303(int1, int2, int3, int4);
        return;
    };
    if ((script6799(0) != varbitplayer_16789)) {
        varbitplayer_5941 = 0;
        script2303(int1, int2, int3, int4);
        return;
    };
    if ((varbitplayer_5941 == 1)) {
        script6739(23);
    } else {
        script6739(22);
    };
    varbitplayer_5941 = (1 - varbitplayer_5941);
    script2303(int1, int2, int3, int4);
    return;
}