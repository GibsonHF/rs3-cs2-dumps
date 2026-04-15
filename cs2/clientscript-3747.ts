//
function script3747(int0: component, int1: component): void {
    var int2 = 0;
    var int3 = 18542;
    var int4 = -1;
    while ((int2 <= ENUM_GETOUTPUTCOUNT(8659 as cs2enum))) {
        int4 = enum_getvalue(0, 0, 8659 as cs2enum, int2);
        if ((CC_FIND(int0, int2) == 1)) {
            if ((script3749(int4) == 1)) {
                CC_SETGRAPHIC(18543 as graphic);
                CC_SETONOP(callback(script5336, -2147483645, -2147483643, int3));
            } else {
                int3 = 18543;
                CC_SETGRAPHIC(18542 as graphic);
                CC_SETONOP(callback(script5336, -2147483645, -2147483643, int3));
            };
        };
        int2 = (int2 + 1);
    };
    var int5 = 0;
    var string0 = "";
    while ((enum_getvalue(0, 0, 8661 as cs2enum, int5) != -1)) {
        if ((CC_FIND[1](int1, int5) == 1)) {
            if ((script3751(int5) == 1)) {
                string0 = "Click here to deselect all messages in this section.";
                int3 = 18542;
                CC_SETGRAPHIC[1](18543 as graphic);
                CC_SETONOP[1](callback(script5336, -2147483645, -2147483643, int3));
                CC_SETOP[1](1, "Deselect All");
            } else {
                string0 = "Click here to select all messages in this section.";
                int3 = 18543;
                CC_SETGRAPHIC[1](18542 as graphic);
                CC_SETONOP[1](callback(script5336, -2147483645, -2147483643, int3));
                CC_SETOP[1](1, "Select All");
            };
            CC_SETONMOUSEREPEAT[1](callback(script8799, string0, int1, int5));
        };
        int5 = (int5 + 1);
    };
    return;
}