//
function script5378(): void {
    if ((IF_FIND(comp(1150, 56)) == 1)) {  // hw11_dancefloor_manual:spread1
        CC_SETHIDE(false);
    };
    if ((IF_FIND(comp(1150, 57)) == 1)) {  // hw11_dancefloor_manual:spread2
        CC_SETHIDE(true);
    };
    if ((IF_FIND(comp(1150, 58)) == 1)) {  // hw11_dancefloor_manual:spread3
        CC_SETHIDE(true);
    };
    if ((IF_FIND(comp(1150, 50)) == 1)) {  // hw11_dancefloor_manual:pagenum_left
        CC_SETTEXT("Page 1");
    };
    if ((IF_FIND(comp(1150, 51)) == 1)) {  // hw11_dancefloor_manual:pagenum_right
        CC_SETTEXT("Page 2");
    };
    return;
}