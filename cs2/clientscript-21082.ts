//
function script21082(): void {
    var int1 = script20117(varplayer_12314);
    if ((script20132(int1) == 0)) {
        return;
    };
    CC_DELETEALL(int0);
    var int2 = dbrow_getfield(int1, 1335760, 0);
    var int3 = dbrow_getfield(int1, 1335424, 0);
    var int4 = WORLDMAP_GETDISPLAYCOORD(int2);
    if ((int4 == -1)) {
        unk11016("Trying to load the blessings progress bar with no combat progress var set on the leagues table");
        return;
    };
    var int5 = dbrow_getfield(int1, 1335456, 0);
    var int6 = DB_GETFIELDCOUNT(int5, 1339392);
    var int7 = dbrow_getfield(int5, 1339392, (int6 - 1));
    var int8 = 4227654;
    var int9 = 6734126;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    stack(int0);
    stack(0);
    stack(int12);
    int12 = (int12 + 1);
    script8023(5, 0, 0, 1, 40, 40, 0, 0, 36309);
    stack(int0);
    stack(0);
    stack(int12);
    int12 = (int12 + 1);
    script15938(50, 12, 0, 2, 68, 18, 1, 0);
    [int12, int13] = script20247(0, int12, int3, int4, int8, int9, 0);
    stack(int0);
    stack(0);
    stack(int12);
    int12 = (int12 + 1);
    script15938(48, 0, 0, 2, 48, 24, 1, 0);
    stack(0);
    stack(int12);
    int12 = (int12 + 1);
    script15937(6, 0, 0, 2, 16, 0, 1, 1);
    var int14 = 0;
    var string0 = "";
    while ((int10 < int6)) {
        int7 = dbrow_getfield(int5, 1339392, int10);
        int11 = dbrow_getfield(int7, 1343520, 0);
        if ((int10 == 0)) {
            string0 = `Blessing Unlocks:<br>Tier ${inttostring((int10 + 1), 10)} requires ${TOSTRING_LOCALISED(int11, 1)} blessing task.`;
        } else {
            stack(string0);
            stack("<br>");
            stack(int7);
            stack(int10);
            script21088();
            string0 = ` requires ${TOSTRING_LOCALISED(int11, 1)} blessing tasks.`;
        };
        int14 = MAX(0, (SCALE(int11, int3, int13) - 9));
        stack(0);
        stack(int12);
        int12 = (int12 + 1);
        script7918(int14, 0, 0, 2, 18, 24, 0, 0, 36311);
        int10 = (int10 + 1);
    };
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    script3537(string0);
    CC_GETDYNAMICLAYER();
    stack(int5);
    stack(int12);
    script21083();
    int12 = [];
    stack(int0);
    stack(0);
    stack(int12);
    int12 = (int12 + 1);
    script15947(55, 2, 0, 0, 200, 20, 0, `${0}${2141}${inttostring(PUSH_CONSTANT_INT[16]("<col=", script10495(2)))}${inttostring(PUSH_CONSTANT_INT[16](">Blessing tasks complete</col>: <col=", script10495(21)))}>${TOSTRING_LOCALISED(int4, 1)}`);
    CC_SETTEXTALIGN(0, 1, 0);
    return;
}