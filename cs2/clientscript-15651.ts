//
function script15651(int0: number): void {
    if ((varclient_174 != int0)) {
        varclient_174 = int0;
        switch (varclient_174) {
            case 100: {
                IF_SENDTOFRONT(comp(744, 94));  // loginscreen:username_input_group_graphic_active
                break;
            }
            case 101: {
                IF_SENDTOFRONT(comp(744, 117));  // loginscreen:password_input_group_graphic_active
                break;
            }
            case 114: {
                IF_SENDTOFRONT(comp(744, 148));  // loginscreen:auth_input_group_graphic_active
                break;
            }
        };
    };
    return;
}