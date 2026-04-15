//
function script4444(int0: int, int1: component): void {
    var int2 = script411(int1);
    var int3 = struct_getparam(int2, 7318);
    var int4 = struct_getparam(int2, 7317);
    var int5 = struct_getparam(int2, 7319);
    var int6 = struct_getparam(int2, 7320);
    var int7 = struct_getparam(int2, 7321);
    var int8 = struct_getparam(int2, 7322);
    var int9 = struct_getparam(int2, 7301);
    var int10 = struct_getparam(int2, 7323);
    var int11 = struct_getparam(int2, 7324);
    var int12 = struct_getparam(int2, 7325);
    var int13 = struct_getparam(int2, 7326);
    var int14 = struct_getparam(int2, 7327);
    var int15 = struct_getparam(int2, 7307);
    var int16 = struct_getparam(int2, 7308);
    var int17 = struct_getparam(int2, 7328);
    var int18 = struct_getparam(int2, 7329);
    var int19 = struct_getparam(int2, 7330);
    var int20 = 0;
    var int21 = 0;
    var int22 = ACTIVECLANCHANNEL_GETUSERCOUNT();
    var int23 = IF_GETWIDTH(int4);
    var int24 = 2;
    var int25 = (19 * int22);
    var int26 = IF_GETSCROLLY(int12);
    var int27 = script3365(int19);
    var int28 = ((int0 + int27) - script3365(int5));
    var int29 = (IF_GETWIDTH(int7) - ((int0 + (int27 - script3365(int7))) + int23));
    var int30 = 0;
    if (((PLAYER_GROUP_FIND() == 1) && (script10281(script10275()) == 1))) {
        int30 = 1;
    };
    IF_SETONCLANCHANNELTRANSMIT(callback(script4443, -1, int1), int5);
    stack(6255);
    stack(int14);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, int10);
    IF_SETTEXT("", int11);
    if ((int0 <= -1)) {
        var int0 = IF_GETX(int4);
    };
    int0 = MAX(0, MIN(int0, (IF_GETWIDTH(int19) - int23)));
    varclient_1506 = int0;
    IF_SETPOSITION(int0, 0, 0, 1, int4);
    IF_SETHIDE(false, int4);
    IF_SETOP(1, "Leave chat", int18);
    stack(6255);
    stack(int14);
    IF_SETGRAPHIC();
    IF_SETSIZE(int29, 0, 0, 1, int7);
    IF_SETSIZE(int29, 0, 0, 1, int8);
    IF_SETTEXT(`<col=EE7600>${ACTIVECLANCHANNEL_GETCLANNAME()}</col> - ${inttostring(int22, 10)}/500`, int17);
    var string0 = "Leave another clan's clanchat";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int18);
    IF_SETONMOUSELEAVE(callback(script8805), int18);
    IF_SETOP(1, "Leave Clan Chat channel", int18);
    while ((int20 < int22)) {
        int21 = ACTIVECLANCHANNEL_GETSORTEDUSERSLOT(int20);
        int24 = (int20 * 19);
        if ((CC_FIND(int6, int21) == 1)) {
            script455(int24, ACTIVECLANCHANNEL_GETUSERRANK(int21), -1);
        };
        if ((CC_FIND(int5, int21) == 1)) {
            script454(REMOVETAGS(ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int21)), REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()), int28, int24, int30, 0);
        };
        if (((CC_FIND(int8, int21) == 1) && (CC_FIND[1](int7, int21) == 1))) {
            script459(int29, int24, ACTIVECLANCHANNEL_GETUSERWORLD(int21), int7, int1);
        };
        int20 = (int20 + 1);
    };
    while ((int20 < 600)) {
        if ((CC_FIND(int5, int20) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int6, int20) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int7, int20) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int8, int20) == 1)) {
            CC_SETHIDE(true);
        };
        int20 = (int20 + 1);
    };
    if ((int25 > IF_GETHEIGHT(int12))) {
        script7791(int13, int12);
        IF_SETHIDE(false, int13);
        IF_SETSIZE(16, 60, 1, 1, int12);
        IF_SETSCROLLSIZE(0, int25, int12);
        IF_SETSCROLLPOS(0, int26, int12);
        int26 = MIN(int26, IF_GETSCROLLHEIGHT(int12));
        script72(int13, int12, int26);
    } else {
        IF_SETHIDE(true, int13);
        IF_SETSIZE(0, 60, 1, 1, int12);
        IF_SETSCROLLSIZE(0, 0, int12);
        IF_SETSCROLLPOS(0, 0, int12);
        script72(int13, int12, 0);
    };
    return;
}