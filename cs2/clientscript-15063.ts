//
function script15063(int0: number): void {
    if ((script6431() == 0)) {
        var int0 = false;
    } else if ((int0 == false)) {
        if ((varclient_6403 != 0)) {
            int0 = true;
        } else if ((IF_GETHIDE(comp(1477, 805)) == false)) {  // toplevel_v2:escape_menu
            int0 = true;
        } else if ((IF_HASSUB(comp(1477, 693)) == 1)) {  // toplevel_v2:bank_window
            int0 = true;
        } else if ((script9096() == 1)) {
            int0 = true;
        };
    };
    varclient_6791 = int0;
    script14989();
    return;
}