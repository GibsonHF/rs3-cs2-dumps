//
function script3511(int0: component): void {
    var int1 = 190;
    var int2 = 261;
    var int3 = IF_GETWIDTH(int0);
    var int4 = IF_GETHEIGHT(int0);
    if ((int3 <= int1)) {
        if ((int4 <= int2)) {
            IF_SETSIZE(int1, int2, 0, 0, comp(1117, 3));
        } else {
            IF_SETSIZE(int1, 0, 0, 1, comp(1117, 3));
        };
    } else if ((int4 <= int2)) {
        IF_SETSIZE(0, int2, 1, 0, comp(1117, 3));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1117, 3));
    };
    return;
}