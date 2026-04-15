//
function script4738(int0: component, int1: component): void {
    var int2 = (36 / 4);
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
    var int9 = 0;
    var string0 = "Store";
    var int10 = INV_SIZE(int8);
    while ((int3 < int10)) {
        if ((CC_FIND(int0, int3) == 1)) {
            int4 = INV_GETOBJ(int8, int3);
            int5 = INV_TOTAL(int8, int4);
            if ((script8232(int4) != -1)) {
                if ((script6551(int4) == 0)) {
                    string0 = "Delete";
                } else {
                    string0 = "Store";
                };
                int9 = (int9 + int5);
                if (((int7 + 36) >= IF_GETWIDTH(int0))) {
                    int7 = 0;
                    int6 = ((int6 + int2) + 36);
                };
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(int7, int6, 0, 0);
                CC_SETHIDE(false);
                CC_SETOBJECT(int4, int5);
                CC_SETOUTLINE(1);
                CC_SETOP(1, string0);
                CC_SETOP(10, "Examine");
                CC_SETOPBASE(`<col=ff9040>${OC_NAME(int4)}`);
                int7 = ((int7 + int2) + 36);
                CC_SETONOP(callback(script4739, -2147483645, -2147483643, -2147483644));
                CC_SETONMOUSEREPEAT(callback(script4745, -2147483645, -2147483643));
                CC_SETONMOUSELEAVE(callback(script4746, -2147483645, -2147483643));
            } else {
                CC_SETSIZE(0, 0, 0, 0);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETHIDE(true);
                CC_SETONOP(callback());
            };
        };
        int3 = (int3 + 1);
    };
    IF_SETTEXT(`Items found: ${inttostring(int9, 10)}`, comp(1144, 5));
    if ((int7 > 0)) {
        int6 = (int6 + 32);
    };
    if ((int6 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int6, int0);
        IF_SETPOSITION(-8, IF_GETY(int0), 1, 0, int0);
        script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
        if ((CC_FIND(int1, 1) == 1)) {
            if ((varclient_4743 > -1)) {
                script37(int1, int0, varclient_4743, 1);
            } else {
                script37(int1, int0, IF_GETSCROLLY(int0), 1);
            };
        };
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        CC_DELETEALL(int1);
        IF_SETPOSITION(0, IF_GETY(int0), 1, 0, int0);
    };
    return;
}