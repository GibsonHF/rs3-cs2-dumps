//
function script4608(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
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
    if ((int1 == -1 as graphic)) {
        IF_SETOBJECT(int2, int3, comp(1802, 150));
    } else {
        IF_SETGRAPHIC(int1, comp(1802, 150));
    };
    IF_SETTEXT(`Unlocked at : ${TOSTRING_LOCALISED(int4, 1)}<br> Current state : ${string0}`, comp(1802, 153));
    return;
}