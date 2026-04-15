//
function script6060(int0: int): void {
    var int1 = false;
    if ((int0 == 255)) {
        int1 = true;
    };
    IF_SETTRANS(int0, comp(137, 2));
    var int2 = (IF_GETNEXTSUBID(comp(137, 86)) - 1);
    while ((int2 >= 0)) {
        if ((CC_FIND(comp(137, 86), int2) == 1)) {
            CC_SETTRANS(int0);
            CC_SETHIDE(int1);
        };
        int2 = (int2 - 1);
    };
    IF_SETHIDE(int1, comp(137, 86));
    int2 = (IF_GETNEXTSUBID(comp(137, 87)) - 1);
    while ((int2 >= 0)) {
        if ((CC_FIND(comp(137, 87), int2) == 1)) {
            CC_SETTRANS(int0);
            CC_SETHIDE(int1);
        };
        int2 = (int2 - 1);
    };
    if ((int1 == true)) {
        IF_SETNOCLICKTHROUGH(0, comp(1477, 418));
        IF_SETNOCLICKTHROUGH(0, comp(137, 87));
        script3415(true, comp(1477, 423));
    } else {
        IF_SETNOCLICKTHROUGH(1, comp(137, 87));
        script1850(18, varbitplayer_20188);
    };
    IF_SETHIDE(int1, comp(137, 85));
    return;
}