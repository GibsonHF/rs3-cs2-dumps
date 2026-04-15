//
function script15021(): void {
    if ((INV_TOTAL(890 as inv, varplayer_135) > 0)) {
        script15023(36722, 11948 as struct, "Add to favourites", "Remove from favourites", -1);
    } else {
        script15023(11948, 36722 as struct, "Remove from favourites", "Add to favourites", -1);
    };
    return;
}