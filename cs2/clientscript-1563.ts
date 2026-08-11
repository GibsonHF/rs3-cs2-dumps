//
function script1563(): void {
    var int0 = script10405(1043);
    IF_SETHIDE(script734((1 - varplayer_7879)), struct_getparam(int0, 3503));
    script2638();
    script11429();
    script14159();
    script13901();
    script15869();
    varclient_6676 = varplayer_7879;
    varclient_7055 = varbitplayer_51268;
    switch (varplayer_7879) {
        case 0: {
            IF_SETGRAPHIC(13350 as graphic, comp(1923, 2));  // toplevel_v2_combat_bar_mobile:combat_mode_button_icon
            break;
        }
        case 1: {
            IF_SETGRAPHIC(13351 as graphic, comp(1923, 2));  // toplevel_v2_combat_bar_mobile:combat_mode_button_icon
            break;
        }
    };
    if ((((varbitclient_38843 > 0) && (varclient_3692 <= 0)) && (varclient_3693 <= 0))) {
        script3379((varbitclient_38843 - 1), 1, 0);
    };
    return;
}