//
function script17196(int0: int): void {
    CC_DELETEALL(comp(1138, 22));
    var int1 = enum_getvalue(0, 74, 16852 as cs2enum, int0);
    var int2 = dbrow_getfield(int1, 884752, 0);
    var int3 = 0;
    var int4 = -1;
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = 0;
    var int8 = script17206(int2);
    var int9 = 113;
    var int10 = IF_GETNEXTSUBID(comp(1138, 22));
    var string0 = "";
    while ((++int3 <= int2)) {
        int4 = script6395(int0, int3);
        [int5, int6, int7] = dbrow_getfield(int1, 884800, int4);
        int5 = script2(int5);
        script2994(comp(1138, 22), int10, int8, 0, 0, 0, 90, 90, 0, 0, -1 as graphic);
        CC_SETOBJECT_HIGHRES(script17191(int5));
        if ((script13749() == false)) {
            script14994(int5, -1 as inv, -1, int5, 819 as inv, 1);
        } else {
            string0 = `${OC_NAME(int5)} x${TOSTRING_LOCALISED(int6, 1)}`;
            CC_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0));
        };
        int10 = (int10 + 1);
        script2995(comp(1138, 22), int10, (int8 - 10), 0, 0, 2, 110, 46, 0, 0, 2100 as dbrow, `${inttostring(int6, 10)}x ${OC_NAME(int5)}`);
        CC_SETCOLOUR(16777215);
        int10 = (int10 + 1);
        CC_SETTEXTFONT(208 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 12);
        int8 = (int8 + int9);
    };
    IF_SETHIDE(false, comp(1138, 51));
    return;
}