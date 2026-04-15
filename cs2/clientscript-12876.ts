//
function script12876(int0: struct): void {
    var int1 = comp(1802, 14);
    var int2 = 118095935;
    var int3 = comp(1802, 64);
    var int4 = comp(1802, 30);
    var int5 = comp(1802, 29);
    var int6 = comp(1802, 16);
    var int7 = comp(1802, 18);
    var int8 = comp(1802, 17);
    var int9 = struct_getparam(int0, 6396);
    var int10 = -1 as graphic;
    if ((int9 != -1 as cs2enum)) {
        int10 = enum_getvalue(0, 23, int9, MAP_LANG());
    };
    var string0 = "";
    var int11 = 0;
    if ((struct_getparam(int0, 7899) == 1)) {
        if ((struct_getparam(int0, 825) == 1)) {
            IF_SETTEXT(`<col=FFF8C1>${struct_getparam(int0, 6135)}`, comp(1802, 6));
        };
        IF_SETTEXT(struct_getparam(int0, 6137), comp(1802, 5));
        IF_SETHIDE(true, comp(1802, 157));
        IF_SETHIDE(true, comp(1802, 9));
        IF_SETHIDE(false, comp(1802, 6));
        IF_SETHIDE(false, comp(1802, 5));
    } else {
        if ((struct_getparam(int0, 825) == 1)) {
            IF_SETTEXT(struct_getparam(int0, 6135), comp(1802, 157));
        };
        IF_SETHIDE(true, comp(1802, 6));
        IF_SETHIDE(true, comp(1802, 5));
        IF_SETHIDE(false, comp(1802, 157));
        IF_SETHIDE(false, comp(1802, 9));
        stack(int10);
        stack(118095879);
        IF_SETGRAPHIC();
        stack(int0);
        stack(6136);
        struct_getparam();
        IF_SETTEXT(stack(), 118095883);
        stack(int0);
        stack(6137);
        struct_getparam();
        IF_SETTEXT(stack(), 118095884);
        IF_SETSIZE(65, script7593(IF_GETTEXT(118095884), IF_GETWIDTH(118095884), IF_GETFONTMETRICS(118095884), 0), 1, 0, 118095884);
        IF_SETSIZE(IF_GETWIDTH(118095881), (53 + IF_GETHEIGHT(118095884)), 0, 0, 118095881);
    };
    stack(struct_getparam(int0, 6138));
    stack(118095874);
    IF_SETGRAPHIC();
    switch (script13032()) {
        case 4108:
        case 1764:
        case 7135:
        case 36740: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));
            break;
        }
        case 11660: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));
            while ((int11 < 6)) {
                stack(enum_getvalue(0, 23, 6226 as cs2enum, int11));
                stack(enum_getvalue(0, 9, 6215 as cs2enum, int11));
                IF_SETGRAPHIC();
                stack(0);
                stack(36);
                stack(6225);
                stack(int11);
                enum_getvalue();
                stack(0);
                stack(9);
                stack(6216);
                stack(int11);
                enum_getvalue();
                IF_SETTEXT(stack());
                int11 = (int11 + 1);
            };
            break;
        }
        case 47508: {
            IF_SETSIZE(738, 0, 0, 1, comp(1802, 2));
            break;
        }
        case 73: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));
            if ((script4148() == true)) {
                IF_SETTEXT("Support our Charities by purchasing the Meditation bundle. For more information on CPSL Mind and Rise Above the Disorder please head to the Charities tab.<br><br>In the bundle you will receive:<br> The Cloak and Banner of Meditation", comp(1802, 12));
                IF_SETSIZE(65, script7593(IF_GETTEXT(comp(1802, 12)), IF_GETWIDTH(comp(1802, 12)), IF_GETFONTMETRICS(comp(1802, 12)), 0), 1, 0, comp(1802, 12));
                IF_SETSIZE(IF_GETWIDTH(comp(1802, 9)), (53 + IF_GETHEIGHT(comp(1802, 12))), 0, 0, comp(1802, 9));
            };
            IF_SETHIDE(false, comp(1802, 3));
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 3));
            script3954();
            break;
        }
        case 527: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));
            if (((script4148() == true) || (varbitplayer_4365 == 3))) {
                IF_SETTEXT("Support our Charities by purchasing one of our Bundles. For more information on CPSL Mind and Rise Above the Disorder please head to the Charities tab.<br><br>Purchase the Cosmetic Equipment Bundle to claim a selection of items to help customise your avatar.<br><br>In the Cosmetic Equipment Bundle you will receive:<br>- 2 Dragon keepsake keys<br>- 1 Prismatic Dye<br>- 1 Chameleon Extract", comp(1802, 12));
                IF_SETSIZE(65, script7593(IF_GETTEXT(comp(1802, 12)), IF_GETWIDTH(comp(1802, 12)), IF_GETFONTMETRICS(comp(1802, 12)), 0), 1, 0, comp(1802, 12));
                IF_SETSIZE(IF_GETWIDTH(comp(1802, 9)), (53 + IF_GETHEIGHT(comp(1802, 12))), 0, 0, comp(1802, 9));
            };
            IF_SETPOSITION(3, 20, 0, 2, comp(1802, 12));
            IF_SETHIDE(false, comp(1802, 3));
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 3));
            break;
        }
        case 4268:
        case 31648: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 0));
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));
            break;
        }
        default: {
            IF_SETSIZE(683, 314, 0, 0, comp(1802, 2));
            break;
        }
    };
    int11 = 0;
    if (((struct_getparam(int0, 6139) == 0) || (struct_getparam(int0, 6139) == 1))) {
        if ((IF_GETNEXTSUBID(int3) == 0)) {
            IF_SETONVARTRANSMIT(callback(script12877, int0, 6625, 6625, 2), int3);
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(5, -15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(1));
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(120, -15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(3));
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(5, 15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(1));
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(120, 15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(3));
            if ((struct_getparam(int0, 6140) != -1)) {
                IF_SETTEXT("The event has now ended and all currency<br>can be redeemed or converted for consumable rewards.", comp(1802, 102));
            };
        };
        if ((CC_FIND(int3, 0) == 1)) {
            CC_SETTEXT("Daily Progress:");
        };
        if ((CC_FIND(int3, 2) == 1)) {
            CC_SETTEXT("Limit Extender:");
        };
        script12878(int0);
        script15091(int5, int4, int6, int7, int8, int1, int0);
    };
    return;
}