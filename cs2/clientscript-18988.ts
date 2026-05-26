//
function script18988(int0: number): [number, number, number] {
    switch (int0) {
        case 0:
        case 3:
        case 4:
        case 5:
        case 6:
        case 11:
        case 13:
        case 18:
        case 19:
        case 20:
        case 21:
        case 24: {
            return [33891, 33887, 33889];
        }
        case 1:
        case 2:
        case 7:
        case 8:
        case 9:
        case 10:
        case 14:
        case 15:
        case 16:
        case 17:
        case 22:
        case 23: {
            return [33892, 33888, 33890];
        }
        case 12: {
            if ((varbitplayer_55644 == 6)) {
                return [33893, 33893, 33893];
            };
            return [33894, 33894, 33895];
        }
    };
    script12478(`unexpected trh198 tile id: ${inttostring(int0, 10)}`);
    return [-1, -1, -1];
}