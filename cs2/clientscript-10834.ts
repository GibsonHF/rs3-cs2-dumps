//
function script10834(): void {
    var int0 = -1 as npc;
    var int1 = -1;
    if ((varbitplayer_26382 > 0)) {
        int0 = struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4718);
        IF_SETHIDE(false, comp(1567, 43));
        IF_SETHIDE(true, comp(1567, 45));
        IF_SETNPCMODEL(int0, comp(1567, 2));
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4720), comp(1567, 44));
        IF_SETONTIMER(callback(), comp(1567, 2));
        if ((varbitplayer_26382 != 14)) {
            IF_SETPOSITION(0, 0, 1, 1, comp(1567, 2));
            IF_SETMODELZOOM(600, comp(1567, 2));
            IF_SETPOSITION(0, -40, 1, 1, comp(1567, 2));
            if ((varbitplayer_26382 == 4)) {
                IF_SETMODELANIM(17837 as seq, comp(1567, 2));
            } else if ((varbitplayer_26382 == 9)) {
                IF_SETMODELANIM(2715 as seq, comp(1567, 2));
            } else {
                IF_SETMODELANIM(struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4723), comp(1567, 2));
                IF_SETONTIMER(callback(script10835, 102694914, struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4724), struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4725), 0, 0, struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4723), ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 102694914);
            };
        } else {
            IF_SETMODELZOOM(2500, comp(1567, 2));
            IF_SETPOSITION(0, 0, 1, 1, comp(1567, 2));
            IF_SETMODELANIM(20316 as seq, comp(1567, 2));
            IF_SETONTIMER(callback(script10835, 102694914, 20369, 20356, 1, 0, 20316, ((CLIENTCLOCK() + 250) + RANDOMINC(500))), 102694914);
        };
        IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4722), comp(1567, 4));
        if (((MAP_MEMBERS() == 0) && (struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, MAX(0, (varbitplayer_26382 - 1))), 4721) == 1))) {
            IF_SETTEXT("Members only", comp(1567, 72));
            IF_SETHIDE(false, comp(1567, 70));
        } else if (((varbitplayer_26359 == 1) && ((varbitplayer_26358 + 1) == varbitplayer_26382))) {
            IF_SETTEXT("Current target", comp(1567, 72));
            IF_SETHIDE(false, comp(1567, 70));
        } else {
            IF_SETTEXT("Set for delivery", comp(1567, 72));
            IF_SETHIDE(true, comp(1567, 70));
        };
    } else {
        IF_SETHIDE(true, comp(1567, 43));
        IF_SETHIDE(false, comp(1567, 45));
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1567, 46));
    };
    return;
}