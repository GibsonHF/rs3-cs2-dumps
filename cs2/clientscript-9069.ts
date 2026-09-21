//
function script9069(int0: number): void {
    switch (int0) {
        case 100: {
            if ((varclient_174 == 100)) {
                IF_SENDTOFRONT(comp(744, 94));  // loginscreen:username_input_group_graphic_active
            } else {
                IF_SENDTOFRONT(comp(744, 102));  // loginscreen:username_input_group_graphic_normal
            };
            break;
        }
        case 101: {
            if ((varclient_174 == 101)) {
                IF_SENDTOFRONT(comp(744, 117));  // loginscreen:password_input_group_graphic_active
            } else {
                IF_SENDTOFRONT(comp(744, 125));  // loginscreen:password_input_group_graphic_normal
            };
            break;
        }
        case 114: {
            if ((varclient_174 == 114)) {
                IF_SENDTOFRONT(comp(744, 148));  // loginscreen:auth_input_group_graphic_active
            } else {
                IF_SENDTOFRONT(comp(744, 156));  // loginscreen:auth_input_group_graphic_normal
            };
            break;
        }
    };
    return;
}