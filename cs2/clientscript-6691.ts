//
function script6691(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: component, int9: unknown_int, int10: unknown_int, int11: unknown_int): void {
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