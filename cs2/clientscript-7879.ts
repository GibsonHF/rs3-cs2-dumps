//
function script7879(): void {
    if ((IF_GETHIDE(comp(1420, 186)) == false)) {
        IF_SETHIDE(true, comp(1420, 186));
    } else if ((IF_GETHIDE(comp(1420, 147)) == false)) {
        script15554();
    } else if ((IF_GETHIDE(comp(1420, 185)) == true)) {
        if ((script6431() == true)) {
            script1188();
        } else {
            IF_SETHIDE(false, comp(1420, 187));
        };
    };
    return;
}