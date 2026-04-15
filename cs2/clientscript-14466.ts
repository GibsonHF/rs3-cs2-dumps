//
function script14466(int0: cs2enum, int1: cs2enum, int2: component): void {
    if ((((int0 == -1 as cs2enum) || (int1 == -1 as cs2enum)) || (int2 == comp(-1, 65535)))) {
        return;
    };
    var int3 = -1;
    var int4 = -1 as obj;
    var int5 = 1;
    CC_DELETEALL(int2);
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(int0);
    var int8 = 0;
    while ((++int3 < int7)) {
        int4 = enum_getvalue(0, 33, int0, int3);
        int5 = enum_getvalue(33, 0, int1, int4);
        CC_CREATE(int2, 4, int8++);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script14462, int3, 1));
        CC_SETOPCURSOR(1, 46);
        CC_SETPOSITION(50, ((40 * int3) + 7), 0, 0);
        CC_SETTEXT(OC_NAME(int4));
        CC_SETTEXTFONT(208);
        if ((script14468(int4) == 1)) {
            CC_SETCOLOUR(7829367);
        } else {
            CC_SETCOLOUR(script10495(16777215));
        };
        CC_SETSIZE(IF_GETWIDTH(int2), 32, 0, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        int6 = (int6 + 40);
        CC_CREATE(int2, 5, int8++);
        CC_SETOBJECT(int4, int5);
        CC_SETPOSITION(10, ((40 * int3) + 10), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOP(1, "Select");
        CC_SETOPCURSOR(1, 46);
        CC_SETONOP(callback(script14462, int3, 1));
        CC_CREATE(int2, 5, int8++);
        if ((script14468(int4) == 1)) {
            CC_SETGRAPHIC(9964 as graphic);
        };
        CC_SETPOSITION(12, ((40 * int3) + 10), 0, 0);
        CC_SETSIZE(32, 32, 0, 0);
        CC_CREATE(int2, 5, int8++);
        if ((enum_hasoutput(33, 15937 as cs2enum, int4) == 1)) {
            CC_SETGRAPHIC(11464 as graphic);
            script3537("New!");
        };
        CC_SETPOSITION(328, ((40 * int3) + 16), 0, 0);
        CC_SETSIZE(5, 13, 0, 0);
    };
    int6 = (int6 + 10);
    IF_SETSCROLLSIZE(0, int6, int2);
    return;
}