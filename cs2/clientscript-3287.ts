//
function script3287(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: int, int9: unknown_int): void {
    var int10 = (IF_GETWIDTH(comp(557, 9)) - 4);
    var int11 = ((int0 * 100) / 32);
    IF_SETTEXT(`${inttostring(int11, 10)}%`, comp(557, 15));
    var int12 = ((int11 * int10) / 100);
    IF_SETSIZE(int12, 18, 0, 0, comp(557, 10));
    if ((int1 == 1)) {
        IF_SETHIDE(false, comp(557, 27));
    };
    if ((int2 == 1)) {
        IF_SETHIDE(false, comp(557, 26));
    };
    if ((int3 == 1)) {
        IF_SETHIDE(false, comp(557, 25));
    };
    if ((int4 == 1)) {
        IF_SETHIDE(false, comp(557, 29));
    };
    if ((int5 == 1)) {
        IF_SETHIDE(false, comp(557, 30));
    };
    if ((int6 == 1)) {
        IF_SETHIDE(false, comp(557, 28));
    };
    if ((int7 == 1)) {
        IF_SETHIDE(false, comp(557, 31));
    };
    IF_SETTEXT(`${inttostring(int8, 10)} / 7`, comp(557, 16));
    if ((int9 == 1)) {
        IF_SETHIDE(false, comp(557, 12));
    } else {
        IF_SETHIDE(true, comp(557, 12));
    };
    return;
}