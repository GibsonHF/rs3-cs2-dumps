//
function script9069(int0: number): void {
    switch (int0) {
        case 100: {
            if ((varclient_174 == 100)) {
                IF_SENDTOFRONT(comp(744, 98));  // loginscreen:username_input_group_graphic_hover
            } else {
                IF_SENDTOFRONT(comp(744, 106));  // loginscreen:username_layer
            };
            break;
        }
        case 101: {
            if ((varclient_174 == 101)) {
                IF_SENDTOFRONT(comp(744, 121));  // loginscreen:password_input_group_graphic_hover
            } else {
                IF_SENDTOFRONT(comp(744, 129));  // loginscreen:password_layer
            };
            break;
        }
        case 114: {
            if ((varclient_174 == 114)) {
                IF_SENDTOFRONT(comp(744, 152));  // loginscreen:auth_input_group_graphic_hover
            } else {
                IF_SENDTOFRONT(comp(744, 160));  // loginscreen:auth_input_layer
            };
            break;
        }
    };
    return;
}