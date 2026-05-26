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
        IF_SETHIDE(0, 83820568);
        IF_SETHIDE(1, 83820570);
        IF_SETNPCMODEL(int0, 83820544);
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9032), 83820569);
        IF_SETONTIMER(callback(), 83820544);
        switch (varbitplayer_54865) {
            case 14: {
                IF_SETMODELZOOM(3400, 83820544);
                IF_SETPOSITION(0, -50, 1, 1, 83820544);
                IF_SETMODELANIM(20316 as seq, 83820544);
                IF_SETONTIMER(callback(script18396, 83820544, 20369, 20356, 1, 0, 20316, ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 83820544);
                break;
            }
            case 5: {
                IF_SETMODELZOOM(2500, 83820544);
                IF_SETPOSITION(0, -70, 1, 1, 83820544);
                IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), 83820544);
                IF_SETONTIMER(callback(script18396, 83820544, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9036), struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9037), 0, 0, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 83820544);
                break;
            }
            default: {
                IF_SETPOSITION(0, 0, 1, 1, 83820544);
                IF_SETMODELZOOM(600, 83820544);
                IF_SETPOSITION(0, -40, 1, 1, 83820544);
                if ((varbitplayer_54865 == 4)) {
                    IF_SETMODELANIM(17837 as seq, 83820544);
                } else {
                    IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), 83820544);
                    IF_SETONTIMER(callback(script18396, 83820544, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9036), struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9037), 0, 0, struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9035), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 83820544);
                };
                break;
            }
        };
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9034), 83820546);
        if (((varbitplayer_54817 == 35) && (TESTBIT(varbitplayer_54830, (varbitplayer_54865 - 1)) == 1))) {
            IF_SETTEXT("Delivered", 83820581);
            IF_SETHIDE(0, 83820579);
            return;
        };
        if (((MAP_MEMBERS() == 0) && (struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, MAX(0, (varbitplayer_54865 - 1))), 9033) == 1))) {
            IF_SETTEXT("Members only", 83820581);
            IF_SETHIDE(0, 83820579);
        } else if (((varbitplayer_54827 == 1) && ((varbitplayer_54826 + 1) == varbitplayer_54865))) {
            IF_SETTEXT("Current target", 83820581);
            IF_SETHIDE(0, 83820579);
        } else {
            IF_SETTEXT("Set for delivery", 83820581);
            IF_SETHIDE(1, 83820579);
        };
    } else {
        IF_SETHIDE(1, 83820568);
        IF_SETHIDE(0, 83820570);
        IF_SETTEXT("Select a delivery target in the left panel for more information", 83820571);
    };
    return;
}