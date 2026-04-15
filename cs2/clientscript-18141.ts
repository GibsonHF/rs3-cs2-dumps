//
function script18141(int0: int, int1: int): int {
    switch (int0) {
        case 0: {
            switch (int1) {
                case 0: {
                    return varbitplayer_50529;
                }
                case 1: {
                    return varbitplayer_50530;
                }
                case 2: {
                    return varbitplayer_50531;
                }
                case 3: {
                    return varbitplayer_50532;
                }
                case 4: {
                    return varbitplayer_50533;
                }
                case 5: {
                    return varbitplayer_50534;
                }
                case 6: {
                    return varbitplayer_50535;
                }
            };
            script12478(`Unhandled reward tier #${inttostring(int0, 10)},${inttostring(int1, 10)}.`);
            return 0;
        }
        case 1: {
            switch (int1) {
                case 0: {
                    return varbitplayer_50536;
                }
                case 1: {
                    return varbitplayer_50537;
                }
                case 2: {
                    return varbitplayer_50538;
                }
                case 3: {
                    return varbitplayer_50539;
                }
                case 4: {
                    return varbitplayer_50540;
                }
                case 5: {
                    return varbitplayer_50541;
                }
                case 6: {
                    return varbitplayer_50542;
                }
            };
            script12478(`Unhandled reward tier #${inttostring(int0, 10)},${inttostring(int1, 10)}.`);
            return 0;
        }
    };
    script12478(`Unhandled reward slot #${inttostring(int0, 10)},${inttostring(int1, 10)}.`);
    return 0;
}