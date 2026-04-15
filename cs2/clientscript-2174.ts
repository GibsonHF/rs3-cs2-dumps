//
function script2174(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(964 as cs2enum);
    var int2 = true;
    while ((int0 < int1)) {
        if ((script2189(varbitplayer_4673, int0) == 1)) {
            int2 = true;
        } else {
            int2 = false;
        };
        IF_SETHIDE(int2, enum_getvalue(0, 9, 964 as cs2enum, int0));
        int0 = (int0 + 1);
    };
    return;
}