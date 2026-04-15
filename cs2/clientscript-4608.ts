//
function script4608(int0: struct, int1: unknown_int, int2: obj, int3: int, int4: int, int5: unknown_int): void {
    var string0 = "";
    switch (int5) {
        case 2: {
            string0 = "<col=FF0000>Locked";
            break;
        }
        case 0: {
            string0 = "<col=FFFF00>Unclaimed";
            break;
        }
        case 1: {
            string0 = "<col=00FF00>Claimed";
            break;
        }
    };
    if ((struct_getparam(int0, 4926) > 1)) {
        var int4 = (int4 / struct_getparam(int0, 4926));
    };
    IF_SETHIDE(false, comp(1802, 146));
    IF_SETTEXT(OC_NAME(int2), comp(1802, 152));
    if ((int1 == -1)) {
        IF_SETOBJECT(int2, int3, comp(1802, 150));
    } else {
        stack(int1);
        stack(118096022);
        IF_SETGRAPHIC();
    };
    IF_SETTEXT(`Unlocked at : ${TOSTRING_LOCALISED(int4, 1)}<br> Current state : ${string0}`, comp(1802, 153));
    return;
}