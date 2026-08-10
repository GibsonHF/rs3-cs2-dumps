//
function script21081(): void {
    var int1 = script20117(varplayer_12314);
    if ((script20132(int1) == 0)) {
        return;
    };
    CC_DELETEALL(int0);
    var int2 = varbitplayer_58389;
    var int3 = 450;
    var int4 = 9287 as cs2enum;
    var int5 = 0;
    var int6 = ENUM_GETOUTPUTCOUNT(int4);
    var int7 = 4227654;
    var int8 = 6734126;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    stack(int0);
    stack(0);
    stack(int10);
    int10 = (int10 + 1);
    script8023(5, 0, 0, 1, 45, 40, 0, 0, 35251);
    stack(int0);
    stack(0);
    stack(int10);
    int10 = (int10 + 1);
    script15938(50, 12, 0, 2, 68, 18, 1, 0);
    [int10, int11] = script20247(0, int10, int3, int2, int7, int8, 0);
    stack(int0);
    stack(0);
    stack(int10);
    int10 = (int10 + 1);
    script15938(48, 0, 0, 2, 48, 24, 1, 0);
    stack(0);
    stack(int10);
    int10 = (int10 + 1);
    script15937(6, 0, 0, 2, 16, 0, 1, 1);
    var int12 = 0;
    var string0 = "";
    while ((int9 < int6)) {
        int5 = enum_getvalue(0, 0, int4, int9);
        if ((int9 == 0)) {
            string0 = `Region Unlocks:<br>Karamja requires ${TOSTRING_LOCALISED(int5, 1)} tasks.`;
        } else {
            string0 = `${string0}<br>Region ${inttostring((int9 + 1), 10)} requires ${TOSTRING_LOCALISED(int5, 1)} tasks.`;
        };
        int12 = MAX(0, (SCALE(int5, int3, int11) - 9));
        stack(0);
        stack(int10);
        int10 = (int10 + 1);
        script7918(int12, 0, 0, 2, 18, 24, 0, 0, 36311);
        int9 = (int9 + 1);
    };
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    script3537(string0);
    stack(int0);
    stack(0);
    stack(int10);
    int10 = (int10 + 1);
    script15947(55, 2, 0, 0, 200, 20, 0, `${0}${2141}${inttostring(PUSH_CONSTANT_INT[16]("<col=", script10495(2)))}${inttostring(PUSH_CONSTANT_INT[16](">League tasks completed</col>: <col=", script10495(21)))}>${TOSTRING_LOCALISED(int2, 1)}`);
    CC_SETTEXTALIGN(0, 1, 0);
    return;
}