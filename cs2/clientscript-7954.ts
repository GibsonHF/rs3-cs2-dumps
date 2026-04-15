//
function script7954(int0: coordgrid): void {
    varclient_622 = int0;
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = WORLDMAP_GETDISPLAYCOORD(int0);
    if (((int1 < 0) || (int2 < 0))) {
        var int0 = MOVECOORD(pos(0,0,0,0,0), COORDX(int0), script686((COORDY(int0) - 1), 4), COORDZ(int0));
        [int1, int2] = WORLDMAP_GETDISPLAYCOORD(int0);
        if (((int1 < 0) || (int2 < 0))) {
            int0 = MOVECOORD(pos(0,0,0,0,0), COORDX(int0), script686((COORDY(int0) - 1), 4), COORDZ(int0));
            [int1, int2] = WORLDMAP_GETDISPLAYCOORD(int0);
            if (((int1 < 0) || (int2 < 0))) {
                int0 = MOVECOORD(pos(0,0,0,0,0), COORDX(int0), script686((COORDY(int0) - 1), 4), COORDZ(int0));
                [int1, int2] = WORLDMAP_GETDISPLAYCOORD(int0);
                if (((int1 < 0) || (int2 < 0))) {
                    return;
                };
            };
        };
    };
    int0 = MOVECOORD(pos(0,0,0,0,0), int1, 0, int2);
    script7955(int0);
    return;
}