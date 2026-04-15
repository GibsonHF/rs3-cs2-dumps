//
function script7438(int0: component, int1: int, int2: int): void {
    var int3 = -1 as graphic;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((((int2 == script20335(1)) || (int2 == script20335(2))) || (int2 == script20335(3)))) {
            int3 = 23793 as graphic;
        } else {
            int3 = 23795 as graphic;
        };
        if ((varbitplayer_58378 == 1)) {
            if ((int3 == 23793 as graphic)) {
                int3 = 35260 as graphic;
            } else {
                int3 = 35261 as graphic;
            };
        };
        CC_SETGRAPHIC(int3);
    };
    return;
}