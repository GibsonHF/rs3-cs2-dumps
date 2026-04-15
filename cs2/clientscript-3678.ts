//[clientscript,statue_bag_init]
function script3678(int0: component, int1: component, int2: component, int3: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int4 = 0;
    var int5 = 5;
    var int6 = 0;
    var int7 = 36;
    var int8 = 32;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var string0 = "You have added this skill's pieces to the statue.";
    while ((int4 < 30)) {
        int13 = enum_getvalue(0, 0, 3480 as cs2enum, int4);
        int10 = (int9 * (int6 + 32));
        CC_CREATE(int0, 5, int4);
        CC_SETSIZE(int7, int8, 0, 0);
        CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 3272 as cs2enum, int13), TESTBIT(varclient_1352, int13));
        if ((MODULO(int4, 2) == 0)) {
            CC_CREATE[1](int2, 5, int11);
            CC_SETSIZE[1](35, 35, 0, 0);
            if ((int4 < 16)) {
                CC_SETPOSITION[1](0, int10, 0, 0);
            } else {
                CC_SETPOSITION[1]((int5 + (IF_GETWIDTH(int2) / 2)), int10, 0, 0);
            };
            int12 = CC_GETX[1]();
            CC_SETGRAPHIC[1](enum_getvalue(0, 23, 8283 as cs2enum, (int13 / 2)));
            CC_CREATE[1](int1, 4, int11);
            CC_SETSIZE[1](90, 35, 0, 0);
            CC_SETPOSITION[1](((int12 + int6) + 35), int10, 0, 0);
            int12 = CC_GETX[1]();
            CC_SETTEXT[1](enum_getvalue(0, 36, 8284 as cs2enum, (int13 / 2)));
            CC_SETTEXTFONT[1](27 as fontmetrics);
            CC_SETCOLOUR[1](14931919);
            CC_SETTEXTALIGN[1](0, 1, 0);
            CC_SETPOSITION((int12 + CC_GETWIDTH[1]()), int10, 0, 0);
            int12 = CC_GETX();
            CC_CREATE[1](int3, 5, int11);
            CC_SETSIZE[1](25, 25, 0, 0);
            CC_SETPOSITION[1](((int12 + (2 * CC_GETWIDTH())) + int5), (int10 + 5), 0, 0);
            if ((script9555(item_getparam(enum_getvalue(0, 33, 3272 as cs2enum, int13), 25)) == 1)) {
                string0 = "You have added this skill's pieces to the statue.";
                CC_SETGRAPHIC[1](19713 as graphic);
                CC_SETONMOUSEREPEAT[1](callback(script8799, string0, int3, int11));
            } else {
                string0 = "You have not added this skill's pieces to the statue.";
                CC_SETGRAPHIC[1](19712 as graphic);
                CC_SETONMOUSEREPEAT[1](callback(script8799, string0, int3, int11));
            };
            int11 = (int11 + 1);
        } else {
            CC_SETPOSITION((int12 + int7), int10, 0, 0);
            if ((++int9 == 8)) {
                int9 = 0;
            };
        };
        if ((TESTBIT(varclient_1352, int13) == 1)) {
            CC_SETOP(1, "Take<col=ff9040>");
            CC_SETOUTLINE(2);
            CC_SETOPCURSOR(1, 45);
        } else {
            CC_SETTRANS(100);
        };
        CC_SETOP(5, "Examine<col=ff9040>");
        CC_SETOPBASE(`<col=FF981F>${enum_getvalue(0, 36, 3274 as cs2enum, int13)} piece`);
        CC_SETONOP(callback(script3679, -2147483645, int13));
        int4 = (int4 + 1);
    };
    return;
}