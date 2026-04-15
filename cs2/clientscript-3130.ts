//
function script3130(int0: component, int1: unknown_int, int2: int, int3: int): void {
    if ((CC_FIND(int0, int2) == 1)) {
        if ((((script20335(1) == int3) || (script20335(2) == int3)) || (script20335(3) == int3))) {
            if ((varbitplayer_58378 == 1)) {
                CC_SETGRAPHIC(35261 as graphic);
            } else {
                CC_SETGRAPHIC(23794 as graphic);
            };
        } else if ((varbitplayer_58378 == 1)) {
            CC_SETGRAPHIC(35260 as graphic);
        } else {
            CC_SETGRAPHIC(23794 as graphic);
        };
    };
    return;
}