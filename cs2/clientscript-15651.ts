//
function script15651(int0: number): void {
    if ((varclient_174 != int0)) {
        varclient_174 = int0;
        switch (varclient_174) {
            case 100: {
                IF_SENDTOFRONT(comp(744, 98));  // loginscreen:username_input_group_graphic_hover
                break;
            }
            case 101: {
                IF_SENDTOFRONT(comp(744, 121));  // loginscreen:password_input_group_graphic_hover
                break;
            }
            case 114: {
                IF_SENDTOFRONT(comp(744, 152));  // loginscreen:auth_input_group_graphic_hover
                break;
            }
        };
    };
    return;
}