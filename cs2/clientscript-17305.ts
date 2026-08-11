//
function script17305(): void {
    if ((IF_GETGRAPHIC(comp(1152, 6)) == -1 as graphic)) {  // trh192_overlay:fire_btn_graphic
        switch (MAP_LANG()) {
            case 2: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28032 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                };
                IF_SETGRAPHIC(28013 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                break;
            }
            case 1: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28030 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                };
                IF_SETGRAPHIC(28011 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                break;
            }
            case 3: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28038 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                };
                IF_SETGRAPHIC(28015 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                break;
            }
            default: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28017 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                } else {
                    IF_SETGRAPHIC(28001 as graphic, comp(1152, 6));  // trh192_overlay:fire_btn_graphic
                };
                break;
            }
        };
    };
    return;
}