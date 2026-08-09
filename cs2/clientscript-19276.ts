//
function script19276(int0: number): void {
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    switch (int0) {
        case 1: {
            int1 = varbitplayer_56171;
            int2 = 84541501;
            int3 = 84541623;
            int4 = 84541506;
            int5 = 84541509;
            int6 = 84541510;
            int7 = 84541632;
            int8 = 84541512;
            break;
        }
        case 2: {
            int1 = varbitplayer_56172;
            int2 = 84541502;
            int3 = 84541630;
            int4 = 84541514;
            int5 = 84541626;
            int6 = 84541627;
            int7 = 84541633;
            int8 = 84541629;
            break;
        }
    };
    if ((int1 == 0)) {
        return;
    };
    var int9 = script19210(int1);
    var int10 = dbrow_getfield(int9, 1216528, 0);
    var string0 = dbrow_getfield(int9, 1216544, 0);
    var int11 = dbrow_getfield(int10, 1212465, 0);
    var int12 = dbrow_getfield(int10, 1212466, 0);
    var int13 = dbrow_getfield(int10, 1212433, 0);
    var int14 = dbrow_getfield(int10, 1212434, 0);
    IF_SETOPBASE(`<col=B8D1D1>${dbrow_getfield(int10, 1212416, 0)} Token</col>`, int2);
    IF_SETOPCURSOR(1, 5, int2);
    if ((IF_GETGRAPHIC(int2) != int14)) {
        IF_SETGRAPHIC(int13, int2);
    };
    IF_SETONMOUSEOVER(callback(script44, int2, int14), int2);
    IF_SETONMOUSELEAVE(callback(script44, int2, int13), int2);
    IF_SETOPBASE(`<col=00FFFF>${string0}</col>`, int3);
    if ((int0 == varplayer_11903)) {
        IF_SETGRAPHIC(dbrow_getfield(int10, 1212467, 0), int4);
        IF_SETONMOUSEOVER(callback(), int3);
        IF_SETONMOUSELEAVE(callback(), int3);
    } else {
        if ((IF_GETGRAPHIC(int4) != int12)) {
            IF_SETGRAPHIC(int11, int4);
        };
        IF_SETONMOUSEOVER(callback(script44, int4, int12), int3);
        IF_SETONMOUSELEAVE(callback(script44, int4, int11), int3);
    };
    if ((int0 == 2)) {
        IF_SETGRAPHIC(1 as graphic, int4);
    };
    IF_SETTEXT(string0, int5);
    var int15 = DB_GETFIELDCOUNT(int9, 1216560);
    var int16 = -1;
    var int17 = 0;
    var int18 = -1;
    int18 = (int18 + 1);
    while ((int18 < int15)) {
        int16 = dbrow_getfield(int9, 1216560, int18);
        if ((DB_GETROWTABLE(int16) == 298)) {
            int17 = (int17 + (DB_GETFIELDCOUNT(int16, 1220688) - 1));
        };
    };
    IF_SETTEXT(`Keys required: ${inttostring(int17, 10)}`, int6);
    script19221(dbrow_getfield(int16, 1228848, 0), int7);
    if ((IF_FIND(int7) == 1)) {
        stack(CC_GETMODELXOF());
        stack(CC_GETMODELYOF());
        CC_GETMODELANGLE_X();
        CC_SETMODELANGLE(CC_GETMODELANGLE_Y(), CC_GETMODELANGLE_Z(), SCALE(250, 100, CC_GETMODELZOOM()));
        CC_SETPOSITION(0, -10, 1, 1);
    };
    var int19 = DB_GETFIELDCOUNT(int9, 1216576);
    var int20 = 1;
    var int21 = 0;
    int21 = (int21 + 1);
    while ((int21 <= 8)) {
        int20 = dbrow_getfield(int9, 1216576, (int21 - 1));
        script15938(int8, int21, 0, 0, 0, 1, 1, 35, 43, 0, 0);
        script7918(int21, 2, 0, 0, 1, 1, 0, 0, 1, 1, script227(int20));
        script3537(script10876(int20));
    };
    return;
}