//
function script11753(): void {
    var int0 = comp(732, 3);
    var int1 = comp(732, 4);
    var int2 = comp(732, 5);
    var int3 = comp(732, 6);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int4 = IF_GETWIDTH(int1);
    var int5 = (int4 / 2);
    var int6 = 10305 as cs2enum;
    var int7 = ENUM_GETOUTPUTCOUNT(int6);
    var int8 = 0;
    var int9 = -1 as struct;
    var int10 = 0;
    var int11 = false;
    var int12 = 0;
    var int13 = 5;
    var int14 = 5;
    var int15 = (int5 - 5);
    var int16 = 70;
    var int17 = 5;
    var int18 = 20;
    var int19 = 20;
    var int20 = 32;
    var int21 = 32;
    var int22 = ((int15 - int20) - int17);
    var int23 = int21;
    while ((int8 < int7)) {
        int9 = enum_getvalue(0, 73, int6, int8);
        if (((int9 != -1 as struct) && (struct_getparam(int9, 5243) != -1 as obj))) {
            if (((int13 + int15) > int4)) {
                int14 = ((int14 + int16) + int17);
                int13 = 5;
            };
            script10764(int1, 21361 as struct, int13, int14, int15, int16, -1);
            CC_CREATE[1](int1, 5, IF_GETNEXTSUBID(int1));
            CC_SETGRAPHIC[1](23769 as graphic);
            CC_SETSIZE[1](int18, int19, 0, 0);
            CC_SETPOSITION[1]((int13 + ((int15 - int18) - 5)), (int14 + 5), 0, 0);
            CC_SETONMOUSEREPEAT[1](callback(script3876, struct_getparam(int9, 5248), -2147483645, -2147483643));
            CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION((int13 + 5), (int14 + 5), 0, 0);
            CC_SETSIZE(((int15 - int18) - 5), 20, 0, 0);
            CC_SETTEXTFONT(28);
            script11024(1);
            if ((strcmp(struct_getparam(int9, 5244), "") != 0)) {
                CC_SETTEXT(struct_getparam(int9, 5244));
            } else {
                CC_SETTEXT(OC_NAME(struct_getparam(int9, 5243)));
            };
            CC_CREATE[1](int1, 5, IF_GETNEXTSUBID(int1));
            CC_SETSIZE[1](int20, int21, 0, 0);
            CC_SETPOSITION[1]((int13 + 5), ((CC_GETY() + CC_GETHEIGHT()) + 5), 0, 0);
            CC_SETOBJECT_NONUM[1](struct_getparam(int9, 5243), 1);
            CC_SETONMOUSEREPEAT[1](callback(script9564, struct_getparam(int9, 5243), -2147483645, -2147483643));
            CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION(((CC_GETX[1]() + CC_GETWIDTH[1]()) + 5), CC_GETY[1](), 0, 0);
            CC_SETTEXTFONT(26);
            script11024(3);
            CC_SETTEXT(`Cost: ${inttostring(struct_getparam(int9, 5245), 10)}`);
            if ((struct_getparam(int9, 5246) == 0)) {
                CC_SETSIZE(int22, int23, 0, 0);
            } else {
                CC_SETSIZE(int22, (int23 / 2), 0, 0);
            };
            if ((struct_getparam(int9, 5246) != 0)) {
                CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
                CC_SETPOSITION(((CC_GETX[1]() + CC_GETWIDTH[1]()) + 5), (CC_GETY[1]() + (CC_GETHEIGHT[1]() / 2)), 0, 0);
                CC_SETTEXTFONT(26 as fontmetrics);
                script11024(3);
                CC_SETSIZE(int22, (int23 / 2), 0, 0);
                if ((struct_getparam(int9, 5246) == -1)) {
                    CC_SETTEXT(`Recharge: ${inttostring((struct_getparam(int9, 5245) / 10), 10)}`);
                } else {
                    CC_SETTEXT(`Recharge: ${inttostring(struct_getparam(int9, 5245), 10)}`);
                };
            };
            if (((varplayer_5835 < struct_getparam(int9, 5245)) || ((OC_MEMBERS(struct_getparam(int9, 5243)) == 1) && (MAP_MEMBERS() == 0)))) {
                int11 = true;
            } else {
                int11 = false;
            };
            int10 = script10410(int1, int2, 28556 as struct, (int13 + ((int15 - 80) - int17)), (int14 + ((int16 - 20) - int17)), 80, 20, int10, int11, "Buy");
            int13 = ((int13 + int15) + int17);
            int12 = (int12 + 1);
        };
        int8 = (int8 + 1);
    };
    int14 = ((int14 + int16) + int17);
    IF_SETSCROLLSIZE(0, 0, int0);
    if ((int14 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int14, int0);
    };
    script7791(int3, int0);
    return;
}