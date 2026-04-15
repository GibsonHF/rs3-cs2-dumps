//
function script1029(int0: cs2enum, int1: int): void {
    CC_DELETEALL(comp(157, 2));
    CC_DELETEALL(comp(157, 3));
    IF_SETTEXT("Quick Chat - Shortcut Reference", comp(157, 0));
    IF_SETHIDE(true, comp(157, 1));
    if ((script6431() == true)) {
        IF_SETONCLICK(callback(script784, 12906, 0, 7), 10289158);
    } else {
        IF_SETONCLICK(callback(script784, 1486, 0, 7), 10289158);
    };
    script13993(comp(157, 6), comp(-1, 65535), 28556 as struct, "User Guide");
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    while ((int2 < int1)) {
        int2 = (int2 + 1);
        script1034(int4, 35, int3, 400, 100, enum_getvalue(0, 36, int0, int5), 16776960);
        int4 = (int4 + 1);
        int5 = (int5 + 1);
        string0 = enum_getvalue(0, 36, int0, int5);
        int6 = (PARAHEIGHT(string0, 300, 27 as fontmetrics) * 12);
        script1034(int4, 150, int3, 300, int6, string0, 16777215);
        int4 = (int4 + 1);
        int5 = (int5 + 1);
        int3 = ((int3 + int6) + 10);
    };
    return;
}