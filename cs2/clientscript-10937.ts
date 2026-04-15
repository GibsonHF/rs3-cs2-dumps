//
function script10937(): void {
    var int0 = 0;
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    while ((int0 < 12)) {
        int1 = enum_getvalue(0, 9, 9622 as cs2enum, int0);
        int2 = IF_GETPARENTLAYER(int1);
        if ((IF_GETNEXTSUBID(int1) != 0)) {
            IF_SETHIDE(false, int2);
        } else {
            IF_SETHIDE(true, int2);
        };
        int0 = (int0 + 1);
    };
    script10941();
    return;
}