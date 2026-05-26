//
function script2174(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(964);
    var int2 = 1;
    while ((int0 < int1)) {
        if ((script2189(varbitplayer_4673, int0) == 1)) {
            int2 = 1;
        } else {
            int2 = 0;
        };
        IF_SETHIDE(int2, enum_getvalue(0, 9, 964 as cs2enum, int0));
        int0 = (int0 + 1);
    };
    return;
}