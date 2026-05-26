//
function script18196(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = 20;
    if ((IF_FIND[1](IF_GETLAYER(struct_getparam(int0, 4037))) == 1)) {
        cc_setparam[1](6361, dbrow_getfield(int1, 667648, 0));
        CC_SETPOSITION[1](0, ((int2 * (20 + 4)) - int3), 0, 0);
        if ((((int1 != -1 as dbrow) && (DB_GETFIELDCOUNT(int1, 667920) > 0)) && (script15764(int1) == -1))) {
            int6 = 155;
        };
        CC_SETSIZE[1](int5, int6, 0, 0);
    };
    return;
}