//
function script5245(): void {
    var int0 = 0;
    var int1 = 0;
    if ((IF_GETGRAPHIC(comp(1128, 56)) == 6007 as graphic)) {
        int0 = (int0 + 20);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(comp(1128, 57)) == 6007 as graphic)) {
        int0 = (int0 + 20);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(comp(1128, 58)) == 6007 as graphic)) {
        int0 = (int0 + 30);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(comp(1128, 62)) == 6007 as graphic)) {
        int0 = (int0 + 28);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(comp(1128, 66)) == 6007 as graphic)) {
        int0 = (int0 + 24);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(comp(1128, 70)) == 6007 as graphic)) {
        int0 = (int0 + 26);
        int1 = (int1 + 20);
    };
    if ((IF_GETGRAPHIC(comp(1128, 74)) == 6007 as graphic)) {
        int0 = (int0 + 200);
        int1 = (int1 + 200);
    };
    if ((IF_GETGRAPHIC(comp(1128, 151)) == 6007 as graphic)) {
        int0 = (int0 + 100);
    };
    if ((IF_GETGRAPHIC(comp(1128, 165)) == 6007 as graphic)) {
        int0 = (int0 + 100);
    };
    if (((varbitplayer_5047 < int0) || (varbitplayer_5047 < int1))) {
        IF_SETCOLOUR(16711680, comp(1128, 51));
    } else {
        IF_SETCOLOUR(script693(255, 255, 255), comp(1128, 51));
    };
    return;
}