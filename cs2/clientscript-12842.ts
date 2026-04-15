//
function script12842(int0: int): int {
    if (((int0 == 21) && (varclient_6484 > 0))) {
        return varclient_6484;
    };
    if ((varbitplayer_5994 != 40)) {
        return 0;
    };
    var int1 = enum_getvalue(0, 26, 5421 as cs2enum, int0);
    if ((int1 == -1 as cs2enum)) {
        return 0;
    };
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    while ((--int2 >= 0)) {
        if ((strcmp("Dungeoneering", enum_getvalue(0, 36, int1, int2)) == 0)) {
            return int2;
        };
    };
    return 0;
}