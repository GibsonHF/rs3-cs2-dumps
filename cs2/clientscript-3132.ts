//
function script3132(int0: component, int1: int, int2: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((((script20335(1) == int2) || (script20335(2) == int2)) || (script20335(3) == int2))) {
            if ((varbitplayer_58378 == 1)) {
                CC_SETGRAPHIC(35260 as graphic);
            } else {
                CC_SETGRAPHIC(23793 as graphic);
            };
        } else if ((varbitplayer_58378 == 1)) {
            CC_SETGRAPHIC(35261 as graphic);
        } else {
            CC_SETGRAPHIC(23795 as graphic);
        };
    };
    return;
}