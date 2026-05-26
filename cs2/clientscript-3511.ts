//
function script3511(int0: number): void {
    var int1 = 190;
    var int2 = 261;
    var int3 = IF_GETWIDTH(int0);
    var int4 = IF_GETHEIGHT(int0);
    if ((int3 <= int1)) {
        if ((int4 <= int2)) {
            IF_SETSIZE(int1, int2, 0, 0, 73203715);
        } else {
            IF_SETSIZE(int1, 0, 0, 1, 73203715);
        };
    } else if ((int4 <= int2)) {
        IF_SETSIZE(0, int2, 1, 0, 73203715);
    } else {
        IF_SETSIZE(0, 0, 1, 1, 73203715);
    };
    return;
}