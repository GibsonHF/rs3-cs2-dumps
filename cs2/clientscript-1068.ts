//[proc,quickchat_return]
function script1068(int0: component, int1: int, int2: int): void {
    script8543(int2);
    var int3 = (int1 + 1);
    var int4 = enum_getvalue(0, 9, script8602(int2), int3);
    var int5 = enum_getvalue(0, 9, script8603(int2), int3);
    while ((int4 != comp(-1, 65535))) {
        CC_DELETEALL(int4);
        CC_DELETEALL(int5);
        IF_SETHIDE(true, int4);
        int3 = (int3 + 1);
        int4 = enum_getvalue(0, 9, script8602(int2), int3);
        int5 = enum_getvalue(0, 9, script8603(int2), int3);
    };
    int3 = (int1 + 1);
    while ((CC_FIND(int0, int3) == 1)) {
        CC_DELETE();
        if ((CC_FIND[1](script8601(int2), int3) == 1)) {
            CC_DELETE[1]();
        };
        int3 = (int3 + 1);
    };
    int3 = 0;
    int4 = enum_getvalue(0, 9, script8602(int2), int1);
    int5 = enum_getvalue(0, 9, script8603(int2), int1);
    if (((int4 != comp(-1, 65535)) && (int5 != comp(-1, 65535)))) {
        while ((CC_FIND(int4, int3) == 1)) {
            CC_SETONMOUSEOVER(callback(script1082, int1, int5, int3, int2));
            CC_SETONMOUSELEAVE(callback(script1083, int1, int5, int3, int2));
            if ((CC_FIND[1](int5, int3) == 1)) {
                CC_SETHIDE[1](true);
            };
            int3 = (int3 + 1);
        };
    };
    script8618(int2, -1);
    script1064(int1, int2);
    script1066(int0, int1, int2);
    return;
}