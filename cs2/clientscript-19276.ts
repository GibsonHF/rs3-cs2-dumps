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
    IF_SETHIDE(true, int2);
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
    var int13 = DB_GETFIELDCOUNT(int9, 1216560);
    var int14 = -1;
    var int15 = 0;
    var int16 = -1;
    int16 = (int16 + 1);
    while ((int16 < int13)) {
        int14 = dbrow_getfield(int9, 1216560, int16);
        if ((DB_GETROWTABLE(int14) == 298)) {
            int15 = (int15 + (DB_GETFIELDCOUNT(int14, 1220688) - 1));
        };
    };
    IF_SETTEXT(`Keys required: ${inttostring(int15, 10)}`, int6);
    script19221(dbrow_getfield(int14, 1228848, 0), int7);
    if ((IF_FIND(int7) == 1)) {
        stack(CC_GETMODELXOF());
        stack(CC_GETMODELYOF());
        CC_GETMODELANGLE_X();
        CC_SETMODELANGLE(CC_GETMODELANGLE_Y(), CC_GETMODELANGLE_Z(), SCALE(250, 100, CC_GETMODELZOOM()));
        CC_SETPOSITION(0, -10, 1, 1);
    };
    var int17 = DB_GETFIELDCOUNT(int9, 1216576);
    var int18 = 1;
    var int19 = 0;
    int19 = (int19 + 1);
    while ((int19 <= 8)) {
        int18 = dbrow_getfield(int9, 1216576, (int19 - 1));
        script15938(int8, int19, 0, 0, 0, 1, 1, 35, 43, 0, 0);
        script7918(int19, 2, 0, 0, 1, 1, 0, 0, 1, 1, script227(int18));
        script3537(script10876(int18));
    };
    return;
}