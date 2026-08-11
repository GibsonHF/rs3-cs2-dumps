//
function script16741(int0: number): void {
    var string0 = "";
    switch (int0) {
        case 48758899:
        case 48759024: {
            if ((varclient_3681 == 1)) {
                varclient_3682 = 1;
                varclient_3681 = 0;
                varclient_3683 = "";
            } else {
                varclient_3681 = 1;
                varclient_3682 = 0;
            };
            if ((CC_FIND(comp(744, 115), 0) == 1)) {  // loginscreen:password_input_group
                script16740(varclient_3681);
            };
            if ((CC_FIND(comp(744, 240), 0) == 1)) {  // loginscreen:settings_border
                script16740(varclient_3681);
            };
            break;
        }
        case 48758900:
        case 48759025: {
            varclient_6406 = (1 - varclient_6406);
            string0 = script1346(varclient_2576);
            IF_SETTEXT(string0, comp(744, 111));  // loginscreen:toggle_remember_username_login
            if ((varclient_174 == 100)) {
                script3237(48758894, 48758895, 48758896, string0, 100, 212);
            };
            if ((CC_FIND(comp(744, 116), 0) == 1)) {  // loginscreen:password_input_group_graphic
                script16740(varclient_6406);
            };
            if ((CC_FIND(comp(744, 241), 0) == 1)) {  // loginscreen:settings_close
                script16740(varclient_6406);
            };
            break;
        }
    };
    return;
}