//
function script20243(int0: component): void {
    var int1 = script20117(varplayer_12314);
    if ((script20132(int1) == 0)) {
        return;
    };
    var int2 = dbrow_getfield(int1, 1335648, 0);
    var int3 = dbrow_getfield(int1, 1335392, 0);
    var int4 = WORLDMAP_GETDISPLAYCOORD(int2);
    var int5 = dbrow_getfield(int1, 1335424, 0);
    var int6 = DB_GETFIELDCOUNT(int5, 1339392);
    var int7 = dbrow_getfield(int5, 1339392, (int6 - 1));
    var int8 = dbrow_getfield(int7, 1343520, 0);
    var int9 = dbrow_getfield(int1, 1335456, 0);
    var int10 = 12202555;
    var int11 = 16464712;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    if (((int4 < int8) && (varbitplayer_58406 != 1048575))) {
        int3 = int8;
        int6 = DB_GETFIELDCOUNT(int9, 1363968);
    };
    script8023(int0, 0, int14++, 5, 0, 0, 1, 44, 40, 0, 0, 35251 as graphic);
    script15938(int0, 0, int14++, 50, 12, 0, 2, 68, 18, 1, 0);
    [int14, int15] = script20247(0, int14, int3, int4, int10, int11, 0);
    script15938(int0, 0, int14++, 48, 0, 0, 2, 48, 24, 1, 0);
    script15937(0, int14++, 6, 0, 0, 2, 16, 0, 1, 1);
    var int16 = 0;
    var string0 = "";
    if ((int4 < int8)) {
        while ((int12 < int6)) {
            int7 = dbrow_getfield(int5, 1339392, int12);
            int13 = dbrow_getfield(int7, 1343520, 0);
            if ((int12 == 0)) {
                string0 = `Relic Unlocks:<br>Tier ${inttostring((int12 + 1), 10)} requires ${TOSTRING_LOCALISED(int13, 1)} points.`;
            } else {
                string0 = `${string0}<br>Tier ${inttostring((int12 + 1), 10)} requires ${TOSTRING_LOCALISED(int13, 1)} points.`;
                int16 = MAX(0, (SCALE(int13, int3, int15) - 9));
                script7918(0, int14++, int16, 0, 0, 2, 18, 24, 0, 0, 35259 as graphic);
            };
            int12 = (int12 + 1);
        };
    } else {
        while ((int12 < int6)) {
            int13 = dbrow_getfield(int9, 1363969, int12);
            if ((int12 == 0)) {
                string0 = "Trophy Unlocks:";
            };
            string0 = `${string0}<br>${dbrow_getfield(int9, 1363971, int12)} requires ${TOSTRING_LOCALISED(int13, 1)} points.`;
            int16 = MAX(0, (SCALE(int13, int3, int15) - 9));
            script7918(0, int14++, int16, 0, 0, 2, 18, 24, 0, 0, 35259 as graphic);
            int12 = (int12 + 1);
        };
    };
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    script3537(string0);
    stack(int0);
    stack(0);
    stack(int14++);
    stack(55);
    stack(2);
    stack(0);
    stack(0);
    stack(200);
    stack(20);
    stack(0);
    stack(0);
    stack(2141 as dbrow);
    stack(PUSH_CONSTANT_INT[16]("<col=", script10495(2)));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">League points</col>: <col=", script10495(21)));
    script15947(stack(), `${stack()}${inttostring()}>${inttostring(int4, 10)}`);
    CC_SETTEXTALIGN(0, 1, 0);
    return;
}