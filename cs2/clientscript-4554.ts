//
function script4554(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, int17: number, int18: number): void {
    var int19 = script13749();
    if ((int19 == 0)) {
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
    IF_SETONCLANTRANSMIT(callback(script4558, int2, int3, int4, int7, int5, int6, int8, int9, int17, int18), int5);
    IF_SETONFRIENDTRANSMIT(callback(script4558, int2, int3, int4, int7, int5, int6, int8, int9, int17, int18), int5);
    script4559(int2, int3, int4, int7, int5, int6, int8, int9, int17, int18);
    if ((CLAN_GETCHATCOUNT() > 0)) {
        IF_SETTEXT("Leave Channel", int17);
        IF_SETOP(1, "Leave chat channel", int17);
    } else {
        IF_SETTEXT("Join Channel", int17);
        IF_SETOP(1, "Join chat channel", int17);
    };
    varclient_2480 = "";
    varclient_1507 = STRING_LENGTH(varclient_2480);
    IF_SETONCLICK(callback(script4570, -2147483647, int15, int16), int15);
    script4571(int15, int16, varclient_2480);
    IF_SETHIDE(true, int16);
    return;
}