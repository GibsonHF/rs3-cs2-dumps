//
function script19476(int0: int, int1: int, int2: component): void {
    script19342(964 as inv, int0, int1);
    if ((int0 <= 7)) {
        script19509();
    };
    if ((CC_FIND[1](int2, int1) == 1)) {
        cc_setparam[1](7540, 0);
        cc_setparam[1](7541, CC_GETINVOBJECT[1]());
        cc_setparam[1](7542, int1);
        cc_setparam[1](7543, 964);
    };
    return;
}