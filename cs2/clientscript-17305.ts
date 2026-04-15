//
function script17305(): void {
    if ((IF_GETGRAPHIC(comp(1152, 6)) == -1 as graphic)) {
        switch (MAP_LANG()) {
            case 2: {
                if ((varbitplayer_52887 == 1)) {
                    stack(28032);
                    stack(75497478);
                    IF_SETGRAPHIC();
                };
                stack(28013);
                stack(75497478);
                IF_SETGRAPHIC();
                break;
            }
            case 1: {
                if ((varbitplayer_52887 == 1)) {
                    stack(28030);
                    stack(75497478);
                    IF_SETGRAPHIC();
                };
                stack(28011);
                stack(75497478);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                if ((varbitplayer_52887 == 1)) {
                    stack(28038);
                    stack(75497478);
                    IF_SETGRAPHIC();
                };
                stack(28015);
                stack(75497478);
                IF_SETGRAPHIC();
                break;
            }
            default: {
                if ((varbitplayer_52887 == 1)) {
                    stack(28017);
                    stack(75497478);
                    IF_SETGRAPHIC();
                } else {
                    stack(28001);
                    stack(75497478);
                    IF_SETGRAPHIC();
                };
                break;
            }
        };
    };
    return;
}