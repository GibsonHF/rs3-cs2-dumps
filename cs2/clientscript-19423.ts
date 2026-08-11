//
function script19423(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    stack(1249280);
    stack(int0);
    DB_FIND(0);
    var int5 = dbrow_findnext();
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
        IF_SETTEXT(string0, comp(1302, 3));  // group_ironman_parent:tab_title
    };
    IF_SETGRAPHIC(int6, int2);
    IF_SETGRAPHIC(int7, int3);
    IF_SETOP(1, string0, int1);
    IF_SETPOSITION(0, (int0 * 72), 0, 0, int1);
    IF_SETONOP(callback(script19421, int0), int1);
    IF_SETHIDE(int8, int4);
    return;
}