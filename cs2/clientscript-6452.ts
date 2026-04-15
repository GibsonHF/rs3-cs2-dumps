//
function script6452(int0: unknown_int, int1: unknown_int, int2: int, int3: int, int4: unknown_int): void {
    if ((int2 >= int3)) {
        IF_SETONTIMER(callback(script6449, int0, int1, 0, int4), int0);
        if ((CC_FIND(int1, 0) == 1)) {
            if ((int4 == 1)) {
                CC_SETMODELANIM(12287 as seq);
            } else if ((varclient_1963 != 5)) {
                if ((varclient_779 != -1 as bas)) {
                    CC_SETMODELANIM(BAS_GETANIM_READY(varclient_779));
                } else {
                    CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
                };
                CC_SETONVARCTRANSMIT(callback(script1517, -2147483645, -2147483643, 779, 1));
            };
        };
    } else {
        IF_SETONTIMER(callback(script6452, int0, int1, (int2 + 1), int3, int4), int0);
    };
    return;
}