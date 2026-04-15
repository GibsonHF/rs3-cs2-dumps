//
function script16982(): void {
    var int0 = script16949();
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = -1 as dbrow;
    var int2 = 0;
    [int1, int2] = dbrow_getfield(int0, 401440, 0);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int3 = -1;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(int1, 847872);
    while ((++int3 < int6)) {
        [int4, int5] = dbrow_getfield(int1, 847872, int3);
        if ((int4 != -1 as obj)) {
            if ((item_getparam(int4, 8711) != -1 as graphic)) {
                stack(item_getparam(int4, 8711));
                stack(script17002(int3));
                IF_SETGRAPHIC();
                IF_SETHIDE(0, script17003(int3));
                IF_SETTEXT(inttostring(int5, 10), script17003(int3));
                stack(int4);
                stack(8711);
                item_getparam();
                stack(script17005(int3));
                IF_SETGRAPHIC();
                IF_SETHIDE(0, script17004(int3));
                IF_SETTEXT(inttostring(int5, 10), script17004(int3));
            } else {
                IF_SETOBJECT(int4, int5, script17002(int3));
                IF_SETHIDE(true, script17003(int3));
                IF_SETOBJECT(int4, int5, script17005(int3));
                IF_SETHIDE(true, script17004(int3));
            };
            script16983(int4, int5, script17002(int3));
            if ((int5 > 1)) {
                IF_SETTEXT(`${inttostring(int5, 10)}x ${OC_NAME(int4)}`, script17006(int3));
            } else {
                IF_SETTEXT(OC_NAME(int4), script17006(int3));
            };
            IF_SETTEXT(item_getparam(int4, 4085), script17007(int3));
        };
    };
    var int7 = false;
    if ((int6 != 2)) {
        int7 = true;
        IF_SETPOSITION(0, 0, 1, 1, comp(1068, 33));
        IF_SETPOSITION(0, 0, 1, 1, comp(1068, 32));
    } else {
        IF_SETPOSITION(0, 0, 0, 1, comp(1068, 33));
        IF_SETPOSITION(-63, 0, 0, 1, comp(1068, 32));
    };
    IF_SETHIDE(int7, comp(1068, 76));
    IF_SETHIDE(int7, comp(1068, 42));
    IF_SETHIDE(int7, comp(1068, 41));
    return;
}