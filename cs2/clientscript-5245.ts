//
function script5245(): void {
    var int0 = 0;
    var int1 = 0;
    if ((IF_GETGRAPHIC(73924664) == 6007)) {
        int0 = (int0 + 20);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(73924665) == 6007)) {
        int0 = (int0 + 20);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(73924666) == 6007)) {
        int0 = (int0 + 30);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(73924670) == 6007)) {
        int0 = (int0 + 28);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(73924674) == 6007)) {
        int0 = (int0 + 24);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(73924678) == 6007)) {
        int0 = (int0 + 26);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(73924682) == 6007)) {
        int0 = (int0 + 200);
        int1 = (int1 + 200);
    };
    if ((IF_GETGRAPHIC(73924759) == 6007)) {
        int0 = (int0 + 100);
    };
    if ((IF_GETGRAPHIC(73924773) == 6007)) {
        int0 = (int0 + 100);
    };
    if (((varbitplayer_5047 < int0) || (varbitplayer_5047 < int1))) {
        IF_SETCOLOUR(16711680, 73924659);
    } else {
        IF_SETCOLOUR(script693(255, 255, 255), 73924659);
    };
    return;
}