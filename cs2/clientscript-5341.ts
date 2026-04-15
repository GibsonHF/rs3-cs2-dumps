//
function script5341(int0: int): void {
    if ((int0 == 2)) {
        varclient_1278 = 2;
        if ((varbitplayer_4185 == 1)) {
            CAM_MOVETO(39472143, 1350, 1000, 100);
            CAM_LOOKAT(39537685, 25, 1000, 100);
        } else if ((varbitplayer_4195 == 1)) {
            CAM_MOVETO(39160881, 1350, 1000, 100);
            CAM_LOOKAT(39095339, 25, 1000, 100);
        };
        stack(18526);
        stack(3538952);
        IF_SETGRAPHIC();
        stack(18525);
        stack(3539072);
        IF_SETGRAPHIC();
        stack(18526);
        stack(3539074);
        IF_SETGRAPHIC();
    } else if ((int0 == 3)) {
        varclient_1278 = 3;
        if ((varbitplayer_4185 == 1)) {
            CAM_MOVETO(39275534, 1325, 1000, 100);
            CAM_LOOKAT(39455756, 25, 1000, 100);
        } else if ((varbitplayer_4195 == 1)) {
            CAM_MOVETO(39357491, 1325, 1000, 100);
            CAM_LOOKAT(39177268, 25, 1000, 100);
        };
        stack(18526);
        stack(3538952);
        IF_SETGRAPHIC();
        stack(18526);
        stack(3539072);
        IF_SETGRAPHIC();
        stack(18525);
        stack(3539074);
        IF_SETGRAPHIC();
    } else {
        varclient_1278 = 1;
        if ((varbitplayer_4185 == 1)) {
            CAM_MOVETO(39832592, 1575, 1000, 100);
            CAM_LOOKAT(39734295, 25, 1000, 100);
        } else if ((varbitplayer_4195 == 1)) {
            CAM_MOVETO(38800431, 1575, 1000, 100);
            CAM_LOOKAT(38898728, 25, 1000, 100);
        };
        stack(18525);
        stack(3538952);
        IF_SETGRAPHIC();
        stack(18526);
        stack(3539072);
        IF_SETGRAPHIC();
        stack(18526);
        stack(3539074);
        IF_SETGRAPHIC();
    };
    return;
}