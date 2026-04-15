//
function script1159(): void {
    var int0 = 0;
    var int1 = 13325 as cs2enum;
    if ((varbitplayer_20924 == 0)) {
        int1 = 13324 as cs2enum;
    };
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    while ((int0 < int2)) {
        script2386(int0, enum_getvalue(0, 0, int1, int0));
        int0 = (int0 + 1);
    };
    while ((int0 < 30)) {
        script2386(int0, -1);
        int0 = (int0 + 1);
    };
    script13862();
    varbitclient_49616 = 1;
    return;
}