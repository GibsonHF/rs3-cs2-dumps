//
function script21002(): void {
    var int1 = 0;
    if ((enum_hasoutput(33, 13250 as cs2enum, int0) == 1)) {
        int1 = enum_getreverseindex(33, 0, 13250 as cs2enum, int0, 0);
        if (((int1 > -1) && (int1 < 23))) {
            stack(INV_GETNUM(1011 as inv, int1));
            return;
        };
    };
    stack(0);
    return;
}