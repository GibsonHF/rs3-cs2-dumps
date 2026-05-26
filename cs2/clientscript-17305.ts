//
function script17305(): void {
    if ((IF_GETGRAPHIC(75497478) == -1)) {
        switch (MAP_LANG()) {
            case 2: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28032, 75497478);
                };
                IF_SETGRAPHIC(28013, 75497478);
                break;
            }
            case 1: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28030, 75497478);
                };
                IF_SETGRAPHIC(28011, 75497478);
                break;
            }
            case 3: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28038, 75497478);
                };
                IF_SETGRAPHIC(28015, 75497478);
                break;
            }
            default: {
                if ((varbitplayer_52887 == 1)) {
                    IF_SETGRAPHIC(28017, 75497478);
                } else {
                    IF_SETGRAPHIC(28001, 75497478);
                };
                break;
            }
        };
    };
    return;
}