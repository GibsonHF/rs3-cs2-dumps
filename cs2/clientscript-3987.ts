//
function script3987(): void {
    var int0 = 0;
    var int1 = 1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    CC_DELETEALL(comp(1239, 14));
    while ((int1 <= 30)) {
        CC_CREATE(comp(1239, 14), 5, int0);
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(int2, int3, 0, 0);
        if ((script3986(int1) == 0)) {
            CC_SETGRAPHIC(enum_getvalue(0, 23, 5494 as cs2enum, int1));
            CC_SETONMOUSEREPEAT(callback(script688, 81199118, int0, enum_getvalue(0, 23, 5495 as cs2enum, int1)));
            CC_SETONMOUSELEAVE(callback(script688, 81199118, int0, enum_getvalue(0, 23, 5494, int1)));
        } else {
            CC_SETGRAPHIC(30259 as graphic);
        };
        CC_SETOP(1, "Search");
        if ((MODULO(int1, 5) == 0)) {
            int2 = 0;
            int3 = (int3 + 50);
        } else {
            int2 = (int2 + 50);
        };
        int0 = (int0 + 1);
        int1 = (int1 + 1);
    };
    script3995();
    script3990();
    return;
}