//
function script4327(int0: number, int1: number): void {
    if ((CC_FIND(int1, int0) == 1)) {
        if ((int1 == comp(1089, 0))) {  // clan_flag_selection:flag_backgrounds_layer
            if ((varplayer_1854 == int0)) {
                CC_SETGRAPHIC(6039 as graphic);
            } else {
                CC_SETGRAPHIC(6036 as graphic);
            };
        } else {
            CC_SETGRAPHIC(6036 as graphic);
        };
    };
    return;
}