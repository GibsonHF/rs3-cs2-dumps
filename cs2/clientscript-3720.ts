//
function script3720(int0: component, int1: component, int2: cs2enum): void {
    var int3 = 0;
    var int4 = -1 as struct;
    var string0 = "";
    var int5 = 0;
    var int6 = 0;
    while ((int3 < ENUM_GETOUTPUTCOUNT(int2))) {
        int4 = enum_getvalue(0, 73, int2, int3);
        string0 = struct_getparam(int4, 5029);
        int5 = (20 * PARAHEIGHT(string0, (IF_GETWIDTH(int0) - 5), 27 as fontmetrics));
        CC_CREATE(int1, 3, int3);
        CC_SETSIZE(0, int5, 1, 0);
        CC_SETPOSITION(0, int6, 0, 0);
        CC_SETFILL(1);
        if ((MODULO(int3, 2) == 0)) {
            CC_SETCOLOUR(1846324);
        } else {
            CC_SETCOLOUR(464928);
        };
        CC_CREATE(int0, 4, int3);
        CC_SETSIZE(5, int5, 1, 0);
        CC_SETPOSITION(5, int6, 0, 0);
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT(string0);
        script11374(int0, int3, int4);
        CC_SETONVARTRANSMIT(callback(script10794, int0, int3, int4, 4410, 1));
        int6 = (CC_GETY() + CC_GETHEIGHT());
        int3 = (int3 + 1);
    };
    IF_SETSIZE(0, int6, 1, 0, IF_GETPARENTLAYER(int0));
    IF_SETPARAM_INT(4052, int6, IF_GETPARENTLAYER(int0));
    IF_CALLONRESIZE(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0)));
    return;
}