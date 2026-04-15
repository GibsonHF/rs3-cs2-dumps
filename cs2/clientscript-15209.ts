//
function script15209(int0: dbrow): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int1, int2] = dbrow_getfield(int0, 299040, 0);
    [int3, int4, int5] = script3985(int2, 1);
    if ((((int3 <= 0) && (int4 <= 0)) && (int5 <= 0))) {
        IF_SETTEXT("Event has finished", comp(634, 46));
        IF_SETONTIMER(callback(), comp(634, 44));
        return;
    };
    IF_SETTEXT(`${inttostring(int3, 10)} Days, ${inttostring(int4, 10)} Hrs, ${inttostring(int5, 10)} Mins`, comp(634, 46));
    return;
}