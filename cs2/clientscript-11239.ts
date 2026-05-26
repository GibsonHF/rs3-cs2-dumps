//
function script11239(): void {
    var int0 = varplayer_5196;
    if ((int0 == -1 as struct)) {
        return;
    };
    var int1 = struct_getparam(int0, 4973);
    if ((int1 == -1 as cs2enum)) {
        int1 = 9910 as cs2enum;
    };
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    if ((int2 == 0)) {
        return;
    };
    var int3 = 0;
    IF_SETTEXT(struct_getparam(int0, 4950), comp(1609, 9));
    var int4 = 0;
    var int5 = 0;
    if ((int2 <= 7)) {
        while ((int4 < int2)) {
            int5 = (IF_GETWIDTH(comp(1609, 0)) / int2);
            int3 = script11240(int1, int4, (int4 * int5), 10, int5, (IF_GETHEIGHT(comp(1609, 0)) - 10), int3);
            int4 = (int4 + 1);
        };
    };
    return;
}