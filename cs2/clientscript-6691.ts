//
function script6691(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number): void {
    var int12 = (STRINGWIDTH(IF_GETTEXT(int8), IF_GETFONTMETRICS(int8)) + 5);
    var int13 = MIN(IF_GETWIDTH(int0), 200);
    script6693(int1, int10, int11, int13);
    IF_SETONVARCTRANSMIT(callback(script6692, int1, int10, int11, int13, 2011, 1), int1);
    IF_SETONMOUSELEAVE(callback(script40, int11), int1);
    script6695(int4, int5, int11);
    IF_SETONVARTRANSMIT(callback(script6694, int4, int5, int11, 1572, 1), int0);
    var string0 = "This shows the number of points you have scored during this hunt.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int4);
    script6698(int2, int3, int9, int11, int13);
    IF_SETONVARCTRANSMIT(callback(script6697, int2, int3, int9, int11, int13, 2013, 1), int2);
    script6700(int6, int7, 15);
    IF_SETONVARCTRANSMIT(callback(script6699, int6, int7, 2012, 1), int6);
    string0 = "This is the remaining time during which moths may be caught.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int6);
    return;
}