//
function script4554(int0: component, int1: component, int2: component, int3: unknown_int, int4: component, int5: component, int6: component, int7: unknown_int, int8: unknown_int, int9: component, int10: component, int11: component, int12: component, int13: component, int14: component, int15: unknown_int, int16: unknown_int, int17: component, int18: unknown_int): void {
    var int19 = script13749();
    if ((int19 == false)) {
        IF_SETSIZE((IF_GETX(int9) - IF_GETX(int1)), 0, 0, 1, int2);
        IF_SETSIZE(((IF_GETWIDTH(int5) - IF_GETWIDTH(int2)) - 2), 0, 0, 1, int4);
        script15629(int0, int10, int11, int14);
    };
    IF_SETSCROLLSIZE(0, 0, int5);
    IF_SETSCROLLPOS(0, 0, int5);
    script31(int6, int5, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    IF_SETSCROLLSIZE(0, 0, int12);
    IF_SETSCROLLPOS(0, 0, int12);
    script31(int13, int12, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
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
    IF_SETHIDE(1, int16);
    return;
}