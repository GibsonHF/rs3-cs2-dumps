//
function script3130(int0: number, int1: number, int2: number, int3: number): void {
    if ((CC_FIND(int0, int2) == 1)) {
        if ((((script20335(1) == int3) || (script20335(2) == int3)) || (script20335(3) == int3))) {
            if ((varbitplayer_58378 == 1)) {
                CC_SETGRAPHIC(35261);
            } else {
                CC_SETGRAPHIC(23794);
            };
        } else if ((varbitplayer_58378 == 1)) {
            CC_SETGRAPHIC(35260);
        } else {
            CC_SETGRAPHIC(23794);
        };
    };
    return;
}