//
function script3588(int0: number): void {
    var int1 = enum_getvalue(9, 0, 15793 as cs2enum, int0);
    if ((IF_FIND(int0) == 1)) {
        if (((IF_GETHIDE(40108036) == 0) && (cc_getparam(3863) == int1))) {
            IF_SETHIDE(1, 40108036);
        } else {
            script3589(int0);
        };
    };
    return;
}