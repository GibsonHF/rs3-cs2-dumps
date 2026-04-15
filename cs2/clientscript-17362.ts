//
function script17362(): void {
    var int0 = -1 as graphic;
    if ((varplayer_10850 != -1 as struct)) {
        switch (MAP_LANG()) {
            case 0: {
                int0 = struct_getparam(varplayer_10850, 3030);
                break;
            }
            case 1: {
                int0 = struct_getparam(varplayer_10850, 3031);
                break;
            }
            case 2: {
                int0 = struct_getparam(varplayer_10850, 3032);
                break;
            }
            case 3: {
                int0 = struct_getparam(varplayer_10850, 3033);
                break;
            }
        };
        stack(int0);
        stack(118096157);
        IF_SETGRAPHIC();
        IF_SETSIZE(200, 364, 0, 0, 118096157);
    };
    return;
}