//
function script3287(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    var int10 = (IF_GETWIDTH(36503561) - 4);
    var int11 = ((int0 * 100) / 32);
    IF_SETTEXT(`${inttostring(int11, 10)}%`, 36503567);
    var int12 = ((int11 * int10) / 100);
    IF_SETSIZE(int12, 18, 0, 0, 36503562);
    if ((int1 == 1)) {
        IF_SETHIDE(0, 36503579);
    };
    if ((int2 == 1)) {
        IF_SETHIDE(0, 36503578);
    };
    if ((int3 == 1)) {
        IF_SETHIDE(0, 36503577);
    };
    if ((int4 == 1)) {
        IF_SETHIDE(0, 36503581);
    };
    if ((int5 == 1)) {
        IF_SETHIDE(0, 36503582);
    };
    if ((int6 == 1)) {
        IF_SETHIDE(0, 36503580);
    };
    if ((int7 == 1)) {
        IF_SETHIDE(0, 36503583);
    };
    IF_SETTEXT(`${inttostring(int8, 10)} / 7`, 36503568);
    if ((int9 == 1)) {
        IF_SETHIDE(0, 36503564);
    } else {
        IF_SETHIDE(1, 36503564);
    };
    return;
}