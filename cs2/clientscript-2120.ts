//
function script2120(int0: int): int {
    var int1 = ((int0 - 1) * 100);
    var int2 = MIN(((varplayer_1297 - int1) / 25), 4);
    switch (int0) {
        case 1: {
            return (int2 - (script259(44156 as obj) + varbitplayer_42065));
        }
        case 2: {
            return (int2 - (script259(44157 as obj) + varbitplayer_42066));
        }
        case 3: {
            return (int2 - (script259(44158 as obj) + varbitplayer_42067));
        }
        case 4: {
            return (int2 - (script259(44159 as obj) + varbitplayer_42068));
        }
        case 5: {
            return (int2 - (script259(44160 as obj) + varbitplayer_42069));
        }
    };
    return 0;
}