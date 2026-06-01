//
function script3159(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number): void {
    var int17 = script13749();
    if ((int17 == 0)) {
        IF_SETSIZE((IF_GETX(int9) - IF_GETX(int1)), 0, 0, 1, int2);
        IF_SETSIZE(((IF_GETWIDTH(int5) - IF_GETWIDTH(int2)) - 2), 0, 0, 1, int4);
        script15629(int0, int10, int11, int14);
    };
    IF_SETSCROLLSIZE(0, 0, int5);
    IF_SETSCROLLPOS(0, 0, int5);
    script31(int6, int5, 792, 789, 790, 791, 773, 788);
    IF_SETSCROLLSIZE(0, 0, int12);
    IF_SETSCROLLPOS(0, 0, int12);
    script31(int13, int12, 792, 789, 790, 791, 773, 788);
    IF_SETONCLANSETTINGSTRANSMIT(callback(script3164, int2, int3, int4, int7, int5, int6, int8, int9), int5);
    IF_SETONCLANCHANNELTRANSMIT(callback(script3164, int2, int3, int4, int7, int5, int6, int8, int9), int5);
    IF_SETONFRIENDTRANSMIT(callback(script11461, int2, int3, int4, int7, int5, int6, int8, int9), int5);
    if ((unk10993(0) == 1)) {
        script3165(int2, int3, int4, int7, int5, int6, int8, int9);
        if (((IF_GETHIDE(comp(906, 48)) == false) || ((int17 == 1) && (unk11097(68419591) == 1)))) {
            script3161(1);
        } else {
            script3161(0);
        };
    } else {
        script4547(int2, int3, int4, int7, int5, int6, int8, int9);
        script3161(0);
    };
    varclient_2479 = "";
    varclient_1098 = STRING_LENGTH(varclient_2479);
    IF_SETONCLICK(callback(script1335, -2147483647, int15, int16), int15);
    script1390(int15, int16, varclient_2479);
    IF_SETHIDE(1, int16);
    return;
}