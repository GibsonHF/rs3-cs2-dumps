//
function script12232(int0: number, int1: number): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(struct_getparam(int1, 8128));
    var int2 = script6431();
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = script11994(script12006(int0), int0);
    if ((int1 == 37672)) {
        int7 = ENUM_GETOUTPUTCOUNT(script12006(int0));
    };
    [int3, int4, int5, int6] = script12235(int0, int1, int7);
    script12233(int0, int1, int6, int5, int4, int3, int7);
    script12107(struct_getparam(37671, 8148));
    script12169(struct_getparam(37671, 8660));
    script12241(struct_getparam(37671, 8149), 37671, int7);
    script12107(struct_getparam(37670, 8148));
    script12169(struct_getparam(37670, 8660));
    script12241(struct_getparam(37670, 8149), 37670, int7);
    return;
}