//
function script19276(int0: unknown_int): void {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = varbitplayer_56171;
            int2 = comp(1290, 61);
            int3 = comp(1290, 183);
            int4 = comp(1290, 66);
            int5 = comp(1290, 69);
            int6 = comp(1290, 70);
            int7 = comp(1290, 192);
            int8 = comp(1290, 72);
            break;
        }
        case 2: {
            int1 = varbitplayer_56172;
            int2 = comp(1290, 62);
            int3 = comp(1290, 190);
            int4 = comp(1290, 74);
            int5 = comp(1290, 186);
            int6 = comp(1290, 187);
            int7 = comp(1290, 193);
            int8 = comp(1290, 189);
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
    IF_SETOPCURSOR(1, 5 as cursor, int2);
    if ((IF_GETGRAPHIC(int2) != int14)) {
        stack(int13);
        stack(int2);
        IF_SETGRAPHIC();
    };
    IF_SETONMOUSEOVER(callback(script44, int2, int14), int2);
    IF_SETONMOUSELEAVE(callback(script44, int2, int13), int2);
    IF_SETOPBASE(`<col=00FFFF>${string0}</col>`, int3);
    if ((int0 == varplayer_11903)) {
        stack(dbrow_getfield(int10, 1212467, 0));
        stack(int4);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(), int3);
        IF_SETONMOUSELEAVE(callback(), int3);
    } else {
        if ((IF_GETGRAPHIC(int4) != int12)) {
            stack(int11);
            stack(int4);
            IF_SETGRAPHIC();
        };
        IF_SETONMOUSEOVER(callback(script44, int4, int12), int3);
        IF_SETONMOUSELEAVE(callback(script44, int4, int11), int3);
    };
    if ((int0 == 2)) {
        stack(1);
        stack(int4);
        IF_SETGRAPHIC();
    };
    IF_SETTEXT(string0, int5);
    var int15 = DB_GETFIELDCOUNT(int9, 1216560);
    var int16 = -1 as dbrow;
    var int17 = 0;
    var int18 = -1;
    while ((++int18 < int15)) {
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
        CC_SETMODELANGLE(stack(), CC_GETMODELANGLE_Y(), CC_GETMODELANGLE_Z(), SCALE(250, 100, CC_GETMODELZOOM()));
        CC_SETPOSITION(0, -10, 1, 1);
    };
    var int19 = DB_GETFIELDCOUNT(int9, 1216576);
    var int20 = 1;
    var int21 = 0;
    while ((++int21 <= 8)) {
        int20 = dbrow_getfield(int9, 1216576, (int21 - 1));
        script15938(int8, int21, 0, 0, 0, 1, 1, 35, 43, 0, 0);
        script7918(int21, 2, 0, 0, 1, 1, 0, 0, 1, 1, script227(int20));
        script3537(script10876(int20));
    };
    return;
}