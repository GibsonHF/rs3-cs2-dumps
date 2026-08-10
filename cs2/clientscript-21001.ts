//
function script21001(): void {
    var int1 = 0;
    if ((enum_hasoutput(33, 13250 as cs2enum, int0) == 1)) {
        int1 = enum_getreverseindex(33, 0, 13250 as cs2enum, int0, 0);
        if (((int1 > -1) && (int1 < 23))) {
            stack(int1);
            return;
        };
    };
    stack(-1);
    return;
}