//
function script13748(int0: number): void {
    if ((IF_GETHIDE(comp(517, 91)) == false)) {  // bank:default_options_container
        if ((IF_GETHIDE(comp(517, 116)) == false)) {  // bank:share_preset_quick_buttons
            script13972(33882264, -1, 28595, "Transfer", 1);
            script13972(33882265, -1, 28595, "Presets", 1);
        } else {
            script13972(33882264, -1, 28595, "Transfer", script9670(int0, 0));
            script13972(33882265, -1, 28595, "Presets", script9670(int0, 1));
        };
    } else {
        script13972(33882264, -1, 28595, "Transfer", script9670(int0, 0));
        script13972(33882265, -1, 28595, "Presets", script9670(int0, 1));
    };
    return;
}