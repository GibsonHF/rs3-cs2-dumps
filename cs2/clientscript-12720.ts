//
function script12720(int0: unknown_int): void {
    var int1 = cc_getparam(4156);
    if ((int1 != -1)) {
        switch (cc_getparam(4157)) {
            case 0: {
                if ((int0 == 1)) {
                    script12721(int1);
                };
                break;
            }
            default: {
                script7005(int1);
                cc_setparam(4156, -1);
                break;
            }
        };
    };
    return;
}