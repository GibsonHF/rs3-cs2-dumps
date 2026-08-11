//
function script1317(): void {
    IF_SETMODEL(18789 as model, comp(262, 0));  // elem_magicpress_pipes:sparepipe1m
    IF_SETMODEL(18813 as model, comp(262, 28));  // elem_magicpress_pipes:sparepipe2m
    IF_SETMODEL(18814 as model, comp(262, 29));  // elem_magicpress_pipes:sparepipe3m
    if ((varbitplayer_13704 < 1)) {
        IF_SETMODEL(-1 as model, comp(262, 29));  // elem_magicpress_pipes:sparepipe3m
    };
    if ((varbitplayer_13704 < 2)) {
        IF_SETMODEL(-1 as model, comp(262, 28));  // elem_magicpress_pipes:sparepipe2m
    };
    if ((varbitplayer_13704 < 3)) {
        IF_SETMODEL(-1 as model, comp(262, 0));  // elem_magicpress_pipes:sparepipe1m
    };
    return;
}