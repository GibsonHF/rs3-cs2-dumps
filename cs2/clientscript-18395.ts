//
function script18395(): void {
    var int0 = -1 as npc;
    var int1 = -1 as npc;
    var int2 = -1;
    if ((varbitplayer_54865 > 0)) {
        int0 = struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9029);
        int1 = struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9030);
        if ((int1 != -1 as npc)) {
            int0 = int1;
        };
        IF_SETHIDE(false, comp(1279, 24));
        IF_SETHIDE(true, comp(1279, 26));
        IF_SETNPCMODEL(int0, comp(1279, 0));
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9032), comp(1279, 25));
        IF_SETONTIMER(callback(), comp(1279, 0));
        switch (varbitplayer_54865) {
            case 14: {
                IF_SETMODELZOOM(3400, comp(1279, 0));
                IF_SETPOSITION(0, -50, 1, 1, comp(1279, 0));
                IF_SETMODELANIM(20316 as seq, comp(1279, 0));
                IF_SETONTIMER(callback(script18396, 83820544, 20369, 20356, 1, 0, 20316, ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 83820544);
                break;
            }
            case 5: {
                IF_SETMODELZOOM(2500, comp(1279, 0));
                IF_SETPOSITION(0, -70, 1, 1, comp(1279, 0));
                IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), comp(1279, 0));
                IF_SETONTIMER(callback(script18396, 83820544, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9036), struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9037), 0, 0, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 83820544);
                break;
            }
            default: {
                IF_SETPOSITION(0, 0, 1, 1, comp(1279, 0));
                IF_SETMODELZOOM(600, comp(1279, 0));
                IF_SETPOSITION(0, -40, 1, 1, comp(1279, 0));
                if ((varbitplayer_54865 == 4)) {
                    IF_SETMODELANIM(17837 as seq, comp(1279, 0));
                } else {
                    IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), comp(1279, 0));
                    IF_SETONTIMER(callback(script18396, 83820544, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9036), struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9037), 0, 0, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 83820544);
                };
                break;
            }
        };
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9034), comp(1279, 2));
        if (((varbitplayer_54817 == 35) && (TESTBIT(varbitplayer_54830, (varbitplayer_54865 - 1)) == 1))) {
            IF_SETTEXT("Delivered", comp(1279, 37));
            IF_SETHIDE(false, comp(1279, 35));
            return;
        };
        if (((MAP_MEMBERS() == 0) && (struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9033) == 1))) {
            IF_SETTEXT("Members only", comp(1279, 37));
            IF_SETHIDE(false, comp(1279, 35));
        } else if (((varbitplayer_54827 == 1) && ((varbitplayer_54826 + 1) == varbitplayer_54865))) {
            IF_SETTEXT("Current target", comp(1279, 37));
            IF_SETHIDE(false, comp(1279, 35));
        } else {
            IF_SETTEXT("Set for delivery", comp(1279, 37));
            IF_SETHIDE(true, comp(1279, 35));
        };
    } else {
        IF_SETHIDE(true, comp(1279, 24));
        IF_SETHIDE(false, comp(1279, 26));
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1279, 27));
    };
    return;
}