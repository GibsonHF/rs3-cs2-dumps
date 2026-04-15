//
function script15371(): void {
    if ((CC_SETONMOUSEOVER() == 1)) {
        WORLDMAP_3DVIEW_ACTIVE(0);
    } else {
        CLIENTOPTION_SET(29, 1);
        WORLDMAP_3DVIEW_ACTIVE(1);
    };
    return;
}