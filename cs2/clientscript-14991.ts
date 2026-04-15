//
function script14991(int0: unknown_int, string0: string): void {
    if ((STRING_LENGTH(string0) == 0)) {
        script17111();
        return;
    };
    switch (int0) {
        case 1: {
            CC_SETONMOUSEREPEAT[1](callback(script2674, string0, -2147483645, -2147483643));
            break;
        }
        case 2: {
            CC_SETONMOUSEREPEAT[1](callback(script3876, string0, -2147483645, -2147483643));
            break;
        }
        default: {
            CC_SETONMOUSEREPEAT[1](callback(script8799, string0, -2147483645, -2147483643));
            break;
        }
    };
    cc_setparam[1](7540, 2);
    CC_SETPARAM_STRING[1](4277, string0);
    return;
}