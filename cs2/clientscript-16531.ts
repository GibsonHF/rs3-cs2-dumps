//
function script16531(): void {
    var int0 = -1 as dbrow;
    var string0 = "None";
    var int1 = -1 as graphic;
    if ((varbitplayer_51239 > 0)) {
        int0 = script16519(varbitplayer_51239);
        string0 = dbrow_getfield(int0, 725008, 0);
        int1 = dbrow_getfield(int0, 725104, 0);
        script3536(dbrow_getfield(int0, 725040, 0), comp(970, 22), -1);
    };
    IF_SETTEXT(string0, comp(970, 39));
    stack(int1);
    stack(63569943);
    IF_SETGRAPHIC();
    var int2 = 63569935;
    if ((varbitplayer_51240 > 0)) {
        int0 = script16519(varbitplayer_51240);
        string0 = dbrow_getfield(int0, 725008, 0);
        int1 = dbrow_getfield(int0, 725104, 0);
        script3536(dbrow_getfield(int0, 725040, 0), comp(970, 42), -1);
        IF_SETMODEL(dbrow_getfield(int0, 725024, 0), int2);
        if ((script16513() == 1)) {
            IF_SETMODELANIM(34768 as seq, int2);
            IF_SETONMOUSEOVER(callback(script16529, int2), int2);
            IF_SETONMOUSELEAVE(callback(script16530, int2, 34768), int2);
        } else {
            IF_SETMODELANIM(-1 as seq, int2);
            IF_SETONMOUSEOVER(callback(), int2);
            IF_SETONMOUSELEAVE(callback(), int2);
        };
    } else {
        string0 = "None";
    };
    IF_SETTEXT(string0, comp(970, 46));
    stack(int1);
    stack(63569963);
    IF_SETGRAPHIC();
    return;
}