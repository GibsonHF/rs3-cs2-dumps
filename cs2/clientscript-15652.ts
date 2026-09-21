//
function script15652(): void {
    if ((script13749() == 0)) {
        return;
    };
    if (((IF_GETHIDE(comp(744, 191)) == false) && (varclient_174 == 113))) {  // loginscreen:softkeyboard_close_layer
        IF_SETPOSITION(0, 0, 1, 0, comp(744, 310));  // loginscreen:account_recovery_entry
        return;
    };
    IF_SETPOSITION(0, 0, 1, 1, comp(744, 310));  // loginscreen:account_recovery_entry
    return;
}