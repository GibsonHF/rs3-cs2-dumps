//
function script12876(int0: number): void {
    var int1 = 118095886;
    var int2 = 118095935;
    var int3 = comp(1802, 64);  // timed_event:left_container
    var int4 = 118095902;
    var int5 = 118095901;
    var int6 = 118095888;
    var int7 = 118095890;
    var int8 = 118095889;
    var int9 = struct_getparam(int0, 6396);
    var int10 = -1 as graphic;
    if ((int9 != -1 as cs2enum)) {
        int10 = enum_getvalue(0, 23, int9, MAP_LANG());
    };
    var string0 = "";
    var int11 = 0;
    if ((struct_getparam(int0, 7899) == 1)) {
        if ((struct_getparam(int0, 825) == 1)) {
            IF_SETTEXT(`<col=FFF8C1>${struct_getparam(int0, 6135)}`, comp(1802, 6));  // timed_event:compact_title
        };
        IF_SETTEXT(struct_getparam(int0, 6137), 118095877);
        IF_SETHIDE(true, comp(1802, 157));  // timed_event:title_text
        IF_SETHIDE(true, comp(1802, 9));  // timed_event:desc_container
        IF_SETHIDE(false, comp(1802, 6));  // timed_event:compact_title
        IF_SETHIDE(false, comp(1802, 5));  // timed_event:compact_desc
    } else {
        if ((struct_getparam(int0, 825) == 1)) {
            IF_SETTEXT(struct_getparam(int0, 6135), 118096029);
        };
        IF_SETHIDE(true, comp(1802, 6));  // timed_event:compact_title
        IF_SETHIDE(true, comp(1802, 5));  // timed_event:compact_desc
        IF_SETHIDE(false, comp(1802, 157));  // timed_event:title_text
        IF_SETHIDE(false, comp(1802, 9));  // timed_event:desc_container
        IF_SETGRAPHIC(int10, comp(1802, 7));  // timed_event:title_graphic
        IF_SETTEXT(struct_getparam(int0, 6136), 118095883);
        IF_SETTEXT(struct_getparam(int0, 6137), 118095884);
        IF_SETSIZE(65, script7593(IF_GETTEXT(comp(1802, 12)), IF_GETWIDTH(comp(1802, 12)), IF_GETFONTMETRICS(comp(1802, 12)), 0), 1, 0, comp(1802, 12));  // timed_event:summary_desc
        IF_SETSIZE(IF_GETWIDTH(comp(1802, 9) /*timed_event:desc_container*/), (53 + IF_GETHEIGHT(comp(1802, 12) /*timed_event:summary_desc*/)), 0, 0, comp(1802, 9) /*timed_event:desc_container*/);
    };
    IF_SETGRAPHIC(struct_getparam(int0, 6138), comp(1802, 2));  // timed_event:background_graphic
    switch (script13032()) {
        case 4108:
        case 1764:
        case 7135:
        case 36740: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));  // timed_event:background_graphic
            break;
        }
        case 11660: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));  // timed_event:background_graphic
            while ((int11 < 6)) {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 6226, int11), enum_getvalue(0, 9, 6215, int11));
                IF_SETTEXT(enum_getvalue(0, 36, 6225, int11), enum_getvalue(0, 9, 6216, int11));
                int11 = (int11 + 1);
            };
            break;
        }
        case 47508: {
            IF_SETSIZE(738, 0, 0, 1, comp(1802, 2));  // timed_event:background_graphic
            break;
        }
        case 73: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));  // timed_event:background_graphic
            if ((script4148() == 1)) {
                IF_SETTEXT("Support our Charities by purchasing the Meditation bundle. For more information on CPSL Mind and Rise Above the Disorder please head to the Charities tab.<br><br>In the bundle you will receive:<br> The Cloak and Banner of Meditation", comp(1802, 12));  // timed_event:summary_desc
                IF_SETSIZE(65, script7593(IF_GETTEXT(comp(1802, 12)), IF_GETWIDTH(comp(1802, 12)), IF_GETFONTMETRICS(comp(1802, 12)), 0), 1, 0, comp(1802, 12));  // timed_event:summary_desc
                IF_SETSIZE(IF_GETWIDTH(comp(1802, 9) /*timed_event:desc_container*/), (53 + IF_GETHEIGHT(comp(1802, 12) /*timed_event:summary_desc*/)), 0, 0, comp(1802, 9) /*timed_event:desc_container*/);
            };
            IF_SETHIDE(false, comp(1802, 3));  // timed_event:background_shader
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 3));  // timed_event:background_shader
            script3954();
            break;
        }
        case 527: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));  // timed_event:background_graphic
            if (((script4148() == 1) || (varbitplayer_4365 == 3))) {
                IF_SETTEXT("Support our Charities by purchasing one of our Bundles. For more information on CPSL Mind and Rise Above the Disorder please head to the Charities tab.<br><br>Purchase the Cosmetic Equipment Bundle to claim a selection of items to help customise your avatar.<br><br>In the Cosmetic Equipment Bundle you will receive:<br>- 2 Dragon keepsake keys<br>- 1 Prismatic Dye<br>- 1 Chameleon Extract", comp(1802, 12));  // timed_event:summary_desc
                IF_SETSIZE(65, script7593(IF_GETTEXT(comp(1802, 12)), IF_GETWIDTH(comp(1802, 12)), IF_GETFONTMETRICS(comp(1802, 12)), 0), 1, 0, comp(1802, 12));  // timed_event:summary_desc
                IF_SETSIZE(IF_GETWIDTH(comp(1802, 9) /*timed_event:desc_container*/), (53 + IF_GETHEIGHT(comp(1802, 12) /*timed_event:summary_desc*/)), 0, 0, comp(1802, 9) /*timed_event:desc_container*/);
            };
            IF_SETPOSITION(3, 20, 0, 2, comp(1802, 12));  // timed_event:summary_desc
            IF_SETHIDE(false, comp(1802, 3));  // timed_event:background_shader
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 3));  // timed_event:background_shader
            break;
        }
        case 4268:
        case 31648: {
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 0));  // timed_event:universe
            IF_SETSIZE(688, 402, 0, 0, comp(1802, 2));  // timed_event:background_graphic
            break;
        }
        default: {
            IF_SETSIZE(683, 314, 0, 0, comp(1802, 2));  // timed_event:background_graphic
            break;
        }
    };
    int11 = 0;
    if (((struct_getparam(int0, 6139) == 0) || (struct_getparam(int0, 6139) == 1))) {
        if ((IF_GETNEXTSUBID(int3) == 0)) {
            IF_SETONVARTRANSMIT(callback(script12877, int0, 6625, 6625, 2), int3);
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(5, -15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(1));
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(120, -15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(3));
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(5, 15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(1));
            CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(120, 15, 0, 1);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(script10495(3));
            if ((struct_getparam(int0, 6140) != -1 as obj)) {
                IF_SETTEXT("The event has now ended and all currency<br>can be redeemed or converted for consumable rewards.", comp(1802, 102));  // timed_event:event_ended_text
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