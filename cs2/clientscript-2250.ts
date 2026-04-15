//[clientscript,rand_rewards_clickinformation]
function script2250(int0: int): void {
    var int1 = (int0 / 4);
    var int2 = 3016 as cs2enum;
    SOUND_VORBIS_RATE(6185 as vorbis, 1, 0, 100, 350);
    if ((MAP_MEMBERS() == 1)) {
        int2 = 3015 as cs2enum;
    };
    var string0 = OC_NAME(struct_getparam(enum_getvalue(0, 73, int2, int1), 1070));
    IF_SETTEXTFONT(27 as fontmetrics, comp(940, 156));
    var int3 = enum_getvalue(0, 73, int2, int1);
    var int4 = script10664(int3);
    var int5 = 1000;
    if ((((MAP_MEMBERS() == 1) && (int3 == 1004 as struct)) || ((MAP_MEMBERS() == 0) && (int3 == 1004 as struct)))) {
        IF_SETHIDE(true, comp(940, 154));
        IF_SETTEXT(struct_getparam(int3, 1078), comp(940, 152));
        IF_SETHIDE(false, comp(940, 156));
        IF_SETTEXT(OC_NAME(struct_getparam(int3, 1070)), comp(940, 156));
        IF_SETHIDE(false, comp(940, 157));
        IF_SETOBJECT(struct_getparam(int3, 1070), -1, comp(940, 157));
        IF_SETHIDE(false, comp(940, 153));
        IF_SETHIDE(false, comp(940, 161));
        IF_SETHIDE(false, comp(940, 159));
        IF_SETHIDE(false, comp(940, 160));
        IF_SETHIDE(true, comp(940, 162));
        IF_SETHIDE(true, comp(940, 163));
        IF_SETTEXT("1 : 1xp", comp(940, 159));
    } else if ((STAT_BASE(24 as stat) < struct_getparam(int3, 1071))) {
        IF_SETHIDE(true, comp(940, 154));
        IF_SETTEXT(struct_getparam(int3, 1078), comp(940, 152));
        IF_SETHIDE(false, comp(940, 156));
        IF_SETTEXT(OC_NAME(struct_getparam(int3, 1070)), comp(940, 156));
        IF_SETHIDE(false, comp(940, 157));
        IF_SETOBJECT(struct_getparam(int3, 1070), -1, comp(940, 157));
        IF_SETHIDE(false, comp(940, 153));
        IF_SETHIDE(true, comp(940, 161));
        IF_SETHIDE(true, comp(940, 159));
        IF_SETHIDE(true, comp(940, 160));
        IF_SETHIDE(false, comp(940, 162));
        IF_SETHIDE(false, comp(940, 163));
        IF_SETTEXT(`Dungeoneering ${inttostring(struct_getparam(int3, 1071), 10)} required`, comp(940, 163));
    } else if ((((MAP_MEMBERS() == 1) && (enum_getvalue(0, 73, int2, int1) == 28315 as struct)) && (varbitplayer_2456 == 0))) {
        IF_SETHIDE(true, comp(940, 154));
        IF_SETTEXT(struct_getparam(int3, 1078), comp(940, 152));
        IF_SETHIDE(false, comp(940, 156));
        IF_SETTEXT(OC_NAME(struct_getparam(int3, 1070)), comp(940, 156));
        IF_SETHIDE(false, comp(940, 157));
        IF_SETOBJECT(struct_getparam(int3, 1070), -1, comp(940, 157));
        IF_SETHIDE(false, comp(940, 153));
        IF_SETHIDE(true, comp(940, 161));
        IF_SETHIDE(true, comp(940, 159));
        IF_SETHIDE(true, comp(940, 160));
        IF_SETHIDE(false, comp(940, 162));
        IF_SETHIDE(false, comp(940, 163));
        IF_SETTEXT("You already have 1 reset available to you", comp(940, 163));
    } else if (((((MAP_MEMBERS() == 1) && (enum_getvalue(0, 73, int2, int1) == 28317 as struct)) && (varbitplayer_22586 == 1)) || (((enum_getvalue(0, 73, int2, int1) == 28318 as struct) && (varbitplayer_22588 == 1)) || (((enum_getvalue(0, 73, int2, int1) == 28319 as struct) && (varbitplayer_22590 == 1)) || ((enum_getvalue(0, 73, int2, int1) == 1159 as struct) && (varbitplayer_49269 == 1)))))) {
        IF_SETHIDE(true, comp(940, 154));
        IF_SETTEXT(struct_getparam(int3, 1078), comp(940, 152));
        IF_SETHIDE(false, comp(940, 156));
        IF_SETTEXT(OC_NAME(struct_getparam(int3, 1070)), comp(940, 156));
        IF_SETHIDE(false, comp(940, 157));
        IF_SETOBJECT(struct_getparam(int3, 1070), -1, comp(940, 157));
        IF_SETHIDE(false, comp(940, 153));
        IF_SETHIDE(true, comp(940, 161));
        IF_SETHIDE(true, comp(940, 159));
        IF_SETHIDE(true, comp(940, 160));
        IF_SETHIDE(false, comp(940, 162));
        IF_SETHIDE(false, comp(940, 163));
        IF_SETTEXT("You already own this pet.", comp(940, 163));
    } else if (((((MAP_MEMBERS() == 1) && (enum_getvalue(0, 73, int2, int1) == 28314 as struct)) && (INV_TOTAL(93 as inv, 31436 as obj) == 0)) || (((enum_getvalue(0, 73, int2, int1) == 28316 as struct) && (INV_TOTAL(93 as inv, 18338 as obj) == 0)) || ((enum_getvalue(0, 73, int2, int1) == 4264 as struct) && (INV_TOTAL(93 as inv, 47069 as obj) == 0))))) {
        IF_SETHIDE(true, comp(940, 154));
        IF_SETTEXT(struct_getparam(int3, 1078), comp(940, 152));
        IF_SETHIDE(false, comp(940, 156));
        IF_SETTEXT(OC_NAME(struct_getparam(int3, 1070)), comp(940, 156));
        IF_SETHIDE(false, comp(940, 157));
        IF_SETOBJECT(struct_getparam(int3, 1070), -1, comp(940, 157));
        IF_SETHIDE(false, comp(940, 153));
        IF_SETHIDE(true, comp(940, 161));
        IF_SETHIDE(true, comp(940, 159));
        IF_SETHIDE(true, comp(940, 160));
        IF_SETHIDE(false, comp(940, 162));
        IF_SETHIDE(false, comp(940, 163));
        if ((int3 == 28316 as struct)) {
            int3 = 982 as struct;
        };
        if ((int3 == 4264 as struct)) {
            int3 = 43654 as struct;
        };
        IF_SETTEXT(`You need to have a ${OC_NAME(struct_getparam(int3, 1070))} in your inventory.`, comp(940, 163));
    } else if ((int4 > 0)) {
        IF_SETHIDE(true, comp(940, 154));
        IF_SETTEXT(struct_getparam(int3, 1078), comp(940, 152));
        IF_SETHIDE(false, comp(940, 156));
        IF_SETTEXT(OC_NAME(struct_getparam(int3, 1070)), comp(940, 156));
        IF_SETHIDE(false, comp(940, 157));
        IF_SETOBJECT(struct_getparam(int3, 1070), -1, comp(940, 157));
        IF_SETHIDE(false, comp(940, 153));
        IF_SETHIDE(true, comp(940, 161));
        IF_SETHIDE(true, comp(940, 159));
        IF_SETHIDE(true, comp(940, 160));
        IF_SETHIDE(false, comp(940, 162));
        IF_SETHIDE(false, comp(940, 163));
        if ((int3 == 28316 as struct)) {
            int3 = 982 as struct;
        };
        if ((int3 == 4264 as struct)) {
            int3 = 43654 as struct;
        };
        switch (int4) {
            case 1: {
                IF_SETTEXT(`You have already unlocked: ${OC_NAME(struct_getparam(int3, 1070))}.`, comp(940, 163));
                break;
            }
            case 2: {
                IF_SETTEXT(`You can only have one: ${OC_NAME(struct_getparam(int3, 1070))}.`, comp(940, 163));
                break;
            }
            case 3: {
                IF_SETTEXT("You must have a gold accumulator in your inventory.", comp(940, 163));
                break;
            }
            case 4: {
                IF_SETTEXT("You must reach the maximum gold accumulator price.", comp(940, 163));
                break;
            }
            case 5: {
                IF_SETTEXT("You already have one of those. Go read it.", comp(940, 163));
                break;
            }
        };
    } else {
        IF_SETHIDE(true, comp(940, 154));
        IF_SETTEXT(struct_getparam(int3, 1078), comp(940, 152));
        IF_SETHIDE(false, comp(940, 156));
        IF_SETTEXT(OC_NAME(struct_getparam(int3, 1070)), comp(940, 156));
        IF_SETHIDE(false, comp(940, 157));
        IF_SETOBJECT(struct_getparam(int3, 1070), -1, comp(940, 157));
        IF_SETHIDE(false, comp(940, 153));
        IF_SETHIDE(false, comp(940, 161));
        IF_SETHIDE(false, comp(940, 159));
        IF_SETHIDE(false, comp(940, 160));
        IF_SETHIDE(true, comp(940, 162));
        IF_SETHIDE(true, comp(940, 163));
        if ((struct_getparam(int3, 4275) != 0)) {
            if ((varbitplayer_4290 == 0)) {
                int5 = struct_getparam(int3, 4275);
            } else if (((varbitplayer_4290 == 1) && (struct_getparam(int3, 4276) != 0))) {
                int5 = struct_getparam(int3, 4276);
            } else {
                int5 = struct_getparam(int3, 1072);
            };
            if ((script1282() == 5)) {
                int5 = ADDPERCENT(int5, -7);
            };
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(940, 159));
        } else {
            int5 = struct_getparam(int3, 1072);
            if ((script1282() == 5)) {
                int5 = ADDPERCENT(int5, -7);
            };
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(940, 159));
            IF_SETHIDE(true, comp(940, 173));
        };
    };
    return;
}