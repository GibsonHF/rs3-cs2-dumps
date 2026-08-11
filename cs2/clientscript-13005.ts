//
function script13005(int0: number): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = -1 as cs2enum;
    var int4 = -1 as cs2enum;
    var string0 = "";
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    switch (int0) {
        case 71958546: {
            int1 = 71958543;
            int2 = comp(1098, 19);  // clan_noticeboard_event_edit:event_world_dropdown_click
            int3 = 3700 as cs2enum;
            string0 = "Select the world number the event is to take place.";
            int6 = script13010(varplayer_2047);
            break;
        }
        case 71958549: {
            int1 = 71958550;
            int2 = comp(1098, 23);  // clan_noticeboard_event_edit:event_time_dropdown_click
            int3 = 3695 as cs2enum;
            string0 = "Select the time the event is to take place.";
            int7 = 233;
            int6 = script13011(varplayer_2047);
            break;
        }
        case 71958554: {
            int1 = 71958555;
            int2 = comp(1098, 28);  // clan_noticeboard_event_edit:event_day_dropdown_click
            int3 = 3697 as cs2enum;
            string0 = "Select the day of the month the event is to take place.";
            [int6, int9, int10] = script13013(varplayer_2047);
            if (((((int6 + int9) + int10) == 0) && (varplayer_2048 > 0))) {
                int6 = varplayer_2048;
            };
            break;
        }
        case 71958558: {
            int1 = 71958559;
            int2 = comp(1098, 32);  // clan_noticeboard_event_edit:event_month_dropdown_click
            int3 = 3698 as cs2enum;
            string0 = "Select the month the event is to take place.";
            [int8, int6, int10] = script13013(varplayer_2047);
            if (((((int8 + int6) + int10) == 0) && (varplayer_2049 > 0))) {
                int6 = varplayer_2049;
            };
            break;
        }
        case 71958562: {
            int1 = 71958563;
            int2 = comp(1098, 36);  // clan_noticeboard_event_edit:event_year_dropdown_click
            int3 = 3699 as cs2enum;
            string0 = "Select the year the event is to take place.";
            int7 = 30;
            [int8, int9, int6] = script13013(varplayer_2047);
            if (((((int8 + int9) + int6) == 0) && (varplayer_2050 > 0))) {
                int6 = varplayer_2050;
            };
            int6 = (int6 - 2000);
            break;
        }
        case 71958539: {
            int1 = 71958654;
            int2 = comp(1098, 127);  // clan_noticeboard_event_edit:event_attendees_dropdown_click
            int3 = 3725 as cs2enum;
            string0 = "Select which rank (and above) this event is for.";
            int7 = 126;
            int6 = script13008(varplayer_2047);
            break;
        }
        case 71958541: {
            int1 = 71958656;
            int2 = comp(1098, 129);  // clan_noticeboard_event_edit:event_place_dropdown_click
            int3 = 3696 as cs2enum;
            string0 = "Select the location the event is to take place.";
            int5 = 1;
            int6 = script13012(varplayer_2047);
            if ((int6 == 0)) {
                int6 = (int6 + 1);
            };
            break;
        }
        case 71958577: {
            int1 = 71958658;
            int2 = comp(1098, 131);  // clan_noticeboard_event_edit:event_type_dropdown_click
            int3 = 3687 as cs2enum;
            string0 = "Select the type of event.";
            int5 = 1;
            int6 = script13009(varplayer_2047);
            int4 = enum_getvalue(0, 26, 3689 as cs2enum, int6);
            CC_DELETEALL(comp(1098, 132));  // clan_noticeboard_event_edit:event_subtype_dropdown_build
            IF_CLEAROPS(comp(1098, 133));  // clan_noticeboard_event_edit:event_subtype_dropdown_click
            IF_SETONOP(callback(), comp(1098, 133));  // clan_noticeboard_event_edit:event_subtype_dropdown_click
            if ((int4 == -1 as cs2enum)) {
                script13971(71958660, -1, 28619, "No subcategories.", 1);
            } else if ((script13007(varplayer_2047) == 0)) {
                script3376(71958660, 71958661, 0, 0, IF_GETWIDTH(comp(1098, 133)), -1, int4, -1, ENUM_GETOUTPUTCOUNT(int4), "Select the sub type of event.", script13007(varplayer_2047), 0, 0, "Select", 0);  // clan_noticeboard_event_edit:event_subtype_dropdown_click
            } else {
                script10428(71958660, 71958661, int4, ENUM_GETOUTPUTCOUNT(int4), "Select the sub type of event.", script13007(varplayer_2047), int5);
            };
            break;
        }
        default: {
            return;
        }
    };
    if ((int7 == -1)) {
        int7 = (ENUM_GETOUTPUTCOUNT(int3) + 1);
    };
    if ((int6 <= 0)) {
        script3376(int1, int2, 0, 0, IF_GETWIDTH(int2), -1, int3, -1, int7, string0, int6, 0, 0, "Select", 0);
    } else {
        script10428(int1, int2, int3, int7, string0, int6, int5);
    };
    return;
}