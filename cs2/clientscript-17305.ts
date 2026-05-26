//
function script17305(): void {
    if ((IF_GETGRAPHIC(comp(1152, 6)) == -1 as graphic)) {
        switch (MAP_LANG()) {
            case 2: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28032 as graphic, comp(1152, 6));
                };
                IF_SETGRAPHIC(28013 as graphic, comp(1152, 6));
                break;
            }
            case 1: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28030 as graphic, comp(1152, 6));
                };
                IF_SETGRAPHIC(28011 as graphic, comp(1152, 6));
                break;
            }
            case 3: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28038 as graphic, comp(1152, 6));
                };
                IF_SETGRAPHIC(28015 as graphic, comp(1152, 6));
                break;
            }
            default: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28017 as graphic, comp(1152, 6));
                } else {
                    IF_SETGRAPHIC(28001 as graphic, comp(1152, 6));
                };
                break;
            }
        };
    };
    return;
}