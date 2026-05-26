//
function script6060(int0: number): void {
    var int1 = 0;
    if ((int0 == 255)) {
        int1 = 1;
    };
    IF_SETTRANS(int0, 8978434);
    var int2 = (IF_GETNEXTSUBID(8978518) - 1);
    while ((int2 >= 0)) {
        if ((CC_FIND(8978518, int2) == 1)) {
            CC_SETTRANS(int0);
            CC_SETHIDE(int1);
        };
        int2 = (int2 - 1);
    };
    IF_SETHIDE(int1, 8978518);
    int2 = (IF_GETNEXTSUBID(8978519) - 1);
    while ((int2 >= 0)) {
        if ((CC_FIND(8978519, int2) == 1)) {
            CC_SETTRANS(int0);
            CC_SETHIDE(int1);
        };
        int2 = (int2 - 1);
    };
    if ((int1 == 1)) {
        IF_SETNOCLICKTHROUGH(0, 96797090);
        IF_SETNOCLICKTHROUGH(0, 8978519);
        script3415(1, 96797095);
    } else {
        IF_SETNOCLICKTHROUGH(1, 8978519);
        script1850(18, varbitplayer_20188);
    };
    IF_SETHIDE(int1, 8978517);
    return;
}