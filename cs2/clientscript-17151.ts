//
function script17151(int0: number): void {
    var int1 = script438(script3026(int0));
    stack(761856);
    stack(int0);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    var int3 = dbrow_getfield(int2, 761920, 0);
    var int4 = dbrow_getfield(int2, 761968, 0);
    var int5 = dbrow_getfield(int2, 761984, 0);
    var int6 = dbrow_getfield(int2, 761936, 0);
    var int7 = dbrow_getfield(int2, 761952, 0);
    var int8 = dbrow_getfield(int2, 762048, 0);
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
        IF_SETGRAPHIC(25890 as graphic, int7);
        IF_SETGRAPHIC(25888 as graphic, int8);
        IF_SETHIDE(false, int8);
        IF_SETHIDE(false, int5);
    } else if ((script4574(int0) == 1)) {
        script17154(int0, 0);
        IF_SETMODELANIM(22646 as seq, int6);
        IF_SETGRAPHIC(25890 as graphic, int7);
        IF_SETGRAPHIC(25889 as graphic, int8);
        IF_SETHIDE(false, int8);
        IF_SETHIDE(false, int5);
    } else {
        IF_SETTEXT(dbrow_getfield(int1, 503856, 0), int4);
        IF_SETMODELANIM(22645 as seq, int6);
        IF_SETGRAPHIC(25893 as graphic, int7);
        IF_SETHIDE(true, int8);
        IF_SETHIDE(true, int5);
        IF_SETOPBASE(dbrow_getfield(int1, 503824, 0), int6);
    };
    var string0 = script985(varbitplayer_51320, "You have opened all available chests.", "You can open 1 more free chest!", `You can open ${inttostring(varbitplayer_51320, 10)} more free chests!`);
    IF_SETTEXT(string0, comp(1120, 28));
    if ((varbitplayer_51320 == 0)) {
        script17285();
    };
    if ((script17143() < 4)) {
        IF_SETENABLED(false, comp(1120, 27));
        IF_CLEAROPS(comp(1120, 27));
        script3536(`You need to open and claim your rewards from ${inttostring(4, 10)} chests in total before continuing.`, 73400347, -1);
    } else {
        IF_SETENABLED(true, comp(1120, 27));
        IF_SETOP(1, "Select", comp(1120, 27));
        script16247(73400347, -1);
    };
    return;
}