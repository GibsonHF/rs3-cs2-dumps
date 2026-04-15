//
function script19423(int0: int, int1: component, int2: unknown_int, int3: unknown_int, int4: component): void {
    stack(1249280);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int5 = stack();
    if ((int5 == -1)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int4);
        return;
    };
    var int6 = 18100;
    var string0 = dbrow_getfield(int5, 1249296, 0);
    var int7 = dbrow_getfield(int5, 1249312, 0);
    var int8 = script9464(int0, varbitplayer_56563);
    if ((int0 == varbitplayer_56563)) {
        int6 = 18102;
        IF_SETTEXT(string0, comp(1302, 3));
    };
    stack(int6);
    stack(int2);
    IF_SETGRAPHIC();
    stack(int7);
    stack(int3);
    IF_SETGRAPHIC();
    IF_SETOP(1, string0, int1);
    IF_SETPOSITION(0, (int0 * 72), 0, 0, int1);
    IF_SETONOP(callback(script19421, int0), int1);
    IF_SETHIDE(int8, int4);
    return;
}