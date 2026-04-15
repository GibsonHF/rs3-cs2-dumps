//
function script3588(int0: component): void {
    var int1 = enum_getvalue(9, 0, 15793 as cs2enum, int0);
    if ((IF_FIND(int0) == 1)) {
        if (((IF_GETHIDE(comp(612, 4)) == false) && (cc_getparam(3863) == int1))) {
            IF_SETHIDE(true, comp(612, 4));
        } else {
            script3589(int0);
        };
    };
    return;
}