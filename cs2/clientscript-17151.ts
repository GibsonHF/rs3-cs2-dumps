//
function script17151(int0: int): void {
    var int1 = script438(script3026(int0));
    stack(761856);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    stack(int2);
    stack(761920);
    stack(0);
    dbrow_getfield();
    var int3 = stack();
    stack(int2);
    stack(761968);
    stack(0);
    dbrow_getfield();
    var int4 = stack();
    stack(int2);
    stack(761984);
    stack(0);
    dbrow_getfield();
    var int5 = stack();
    stack(int2);
    stack(761936);
    stack(0);
    dbrow_getfield();
    var int6 = stack();
    stack(int2);
    stack(761952);
    stack(0);
    dbrow_getfield();
    var int7 = stack();
    stack(int2);
    stack(762048);
    stack(0);
    dbrow_getfield();
    var int8 = stack();
    script17144(int6, int1);
    var int9 = IF_GETMODELXOF(int6);
    var int10 = IF_GETMODELYOF(int6);
    var int11 = script18397(int1);
    var int12 = IF_GETMODELANGLE_Y(int6);
    var int13 = IF_GETMODELANGLE_Z(int6);
    var int14 = script18398(int1);
    IF_SETMODELANGLE(int9, int10, int11, int12, int13, int14, int6);
    if ((script3027(int0) == 1)) {
        script17154(int0, 1);
        IF_SETMODELANIM(22646 as seq, int6);
        stack(25890);
        stack(int7);
        IF_SETGRAPHIC();
        stack(25888);
        stack(int8);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int8);
        IF_SETHIDE(0, int5);
    } else if ((script4574(int0) == 1)) {
        script17154(int0, 0);
        IF_SETMODELANIM(22646 as seq, int6);
        stack(25890);
        stack(int7);
        IF_SETGRAPHIC();
        stack(25889);
        stack(int8);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int8);
        IF_SETHIDE(0, int5);
    } else {
        IF_SETTEXT(dbrow_getfield(int1, 503856, 0), int4);
        IF_SETMODELANIM(22645 as seq, int6);
        stack(25893);
        stack(int7);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, int8);
        IF_SETHIDE(1, int5);
        stack(int1);
        stack(503824);
        stack(0);
        dbrow_getfield();
        IF_SETOPBASE(stack(), int6);
    };
    var string0 = script985(varbitplayer_51320, "You have opened all available chests.", "You can open 1 more free chest!", `You can open ${inttostring(varbitplayer_51320, 10)} more free chests!`);
    IF_SETTEXT(string0, comp(1120, 28));
    if ((varbitplayer_51320 == 0)) {
        script17285();
    };
    if ((script17143() < 4)) {
        IF_SETENABLED(false, comp(1120, 27));
        IF_CLEAROPS(comp(1120, 27));
        script3536(`You need to open and claim your rewards from ${inttostring(4, 10)} chests in total before continuing.`, comp(1120, 27), -1);
    } else {
        IF_SETENABLED(true, comp(1120, 27));
        IF_SETOP(1, "Select", comp(1120, 27));
        script16247(comp(1120, 27), -1);
    };
    return;
}