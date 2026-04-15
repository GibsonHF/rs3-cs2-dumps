//
function script9263(int0: component, int1: obj, int2: inv): void {
    var int3 = 0;
    if ((script17378(int1) == 1)) {
        IF_SETOBJECT_LONG(995, script17402(int2, -1 as inv), int0);
        int3 = script17138(script17402(int2, -1 as inv));
    } else {
        int3 = INV_TOTAL(int2, int1);
        IF_SETOBJECT(int1, int3, int0);
    };
    IF_CLEAROPS(int0);
    if ((int1 != -1 as obj)) {
        IF_SETONDRAGCOMPLETE(callback(script9268, -2147483645, -2147483642, -2147483641), int0);
        IF_SETONOP(callback(script9267, -2147483645, -2147483644), int0);
        IF_SETONMOUSELEAVE(callback(script5495, -1), int0);
        if ((OC_CERT(int1) != int1)) {
            IF_SETONMOUSEREPEAT(callback(script5495, int1), int0);
            if ((int3 > 1)) {
                IF_SETOP(1, "Collect-notes", int0);
                IF_SETOP(2, "Collect-items", int0);
            } else {
                IF_SETOP(1, "Collect-item", int0);
                IF_SETOP(2, "Collect-note", int0);
            };
        } else {
            IF_SETONMOUSEREPEAT(callback(script5495, OC_UNCERT(int1)), int0);
            IF_SETOP(1, "Collect", int0);
        };
        IF_SETOPBASE(OC_NAME(int1), int0);
    } else {
        IF_SETONDRAGCOMPLETE(callback(), int0);
        IF_SETONOP(callback(), int0);
        IF_SETONMOUSEREPEAT(callback(), int0);
        IF_SETONMOUSELEAVE(callback(), int0);
        IF_SETOPBASE("", int0);
    };
    return;
}