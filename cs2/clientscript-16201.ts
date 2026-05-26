//
function script16201(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    script16729();
    var int8 = -1;
    if ((int6 == 1)) {
        int8 = script16202(int0, int7);
    } else {
        int8 = script16723(int0);
    };
    if ((IF_FIND(int2) == 1)) {
        script7919(0, int5, int3, int4, 0, 0, 82, 100, 0, 0, int8, 0, 0, 0, 0);
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5836, 2);
        script12642(script12641(2000, ((CC_GETID() - 33) * 4)));
        script12643(script12641(40, 180));
        cc_setparam(5828, 1);
        cc_setparam(2977, 0);
    };
    return;
}