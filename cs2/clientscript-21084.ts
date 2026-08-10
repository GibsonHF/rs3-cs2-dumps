//
function script21084(): void {
    CC_DELETEALL(int0);
    var int1 = script20117(varplayer_12314);
    if ((script20132(int1) == 0)) {
        return;
    };
    var int2 = dbrow_getfield(int1, 1335744, 0);
    var int3 = WORLDMAP_GETDISPLAYCOORD(int2);
    var int4 = dbrow_getfield(int1, 1335488, 0);
    var int5 = DB_GETFIELDCOUNT(int4, 1363968);
    var int6 = dbrow_getfield(int4, 1363969, (int5 - 1));
    var int7 = 4227654;
    var int8 = 6734126;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    stack(int0);
    stack(0);
    stack(int11);
    int11 = (int11 + 1);
    script8023(5, 0, 0, 1, 45, 40, 0, 0, 35251);
    stack(int0);
    stack(0);
    stack(int11);
    int11 = (int11 + 1);
    script15938(50, 12, 0, 2, 68, 18, 1, 0);
    [int11, int12] = script20247(0, int11, int6, int3, int7, int8, 0);
    stack(int0);
    stack(0);
    stack(int11);
    int11 = (int11 + 1);
    script15938(48, 0, 0, 2, 48, 24, 1, 0);
    stack(0);
    stack(int11);
    int11 = (int11 + 1);
    script15937(6, 0, 0, 2, 16, 0, 1, 1);
    var int13 = 0;
    var string0 = "";
    while ((int9 < int5)) {
        int10 = dbrow_getfield(int4, 1363969, int9);
        if ((int9 == 0)) {
            string0 = "Trophy Unlocks:";
        };
        string0 = `${string0}<br>${dbrow_getfield(int4, 1363971, int9)} requires ${TOSTRING_LOCALISED(int10, 1)} points.`;
        int13 = MAX(0, (SCALE(int10, int6, int12) - 9));
        stack(0);
        stack(int11);
        int11 = (int11 + 1);
        script7918(int13, 0, 0, 2, 18, 24, 0, 0, 36311);
        int9 = (int9 + 1);
    };
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    script3537(string0);
    stack(int0);
    stack(0);
    stack(int11);
    int11 = (int11 + 1);
    script15947(55, 2, 0, 0, 200, 20, 0, `${0}${2141}${inttostring(PUSH_CONSTANT_INT[16]("<col=", script10495(2)))}${inttostring(PUSH_CONSTANT_INT[16](">League points</col>: <col=", script10495(21)))}>${TOSTRING_LOCALISED(int3, 1)}`);
    CC_SETTEXTALIGN(0, 1, 0);
    return;
}