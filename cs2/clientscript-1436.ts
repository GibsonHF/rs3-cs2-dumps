//
function script1436(): void {
    IF_SETPOSITION(RANDOM((IF_GETWIDTH(comp(458, 6) /*safes_if:notch_pane*/) - IF_GETWIDTH(comp(458, 20) /*safes_if:notch_holder*/))), RANDOM((IF_GETHEIGHT(comp(458, 6) /*safes_if:notch_pane*/) - IF_GETHEIGHT(comp(458, 20) /*safes_if:notch_holder*/))), 0, 0, comp(458, 20) /*safes_if:notch_holder*/);
    IF_SET2DANGLE(((RANDOM(4) * 16384) - 1), comp(458, 23));  // safes_if:notch
    return;
}