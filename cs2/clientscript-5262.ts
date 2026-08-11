//
function script5262(int0: number, int1: number, int2: number): void {
    if ((int1 == 50)) {
        if ((int0 == 1)) {
            switch (int2) {
                case 74186764: {
                    IF_SETHIDE(true, comp(1132, 15));  // myq5_vanescula_combat:shriek_fade
                    IF_SETHIDE(true, comp(1132, 16));  // myq5_vanescula_combat:shriek_count
                    IF_SETONTIMER(callback(), int2);
                    break;
                }
                case 74186770: {
                    IF_SETHIDE(true, comp(1132, 21));  // myq5_vanescula_combat:melee_fade
                    IF_SETHIDE(true, comp(1132, 22));  // myq5_vanescula_combat:melee_count
                    IF_SETONTIMER(callback(), int2);
                    break;
                }
            };
        } else {
            switch (int2) {
                case 74186764: {
                    IF_SETTEXT(inttostring((int0 - 1), 10), comp(1132, 16));  // myq5_vanescula_combat:shriek_count
                    IF_SETONTIMER(callback(script5262, (int0 - 1), 0, int2), int2);
                    break;
                }
                case 74186770: {
                    IF_SETTEXT(inttostring((int0 - 1), 10), comp(1132, 22));  // myq5_vanescula_combat:melee_count
                    IF_SETONTIMER(callback(script5262, (int0 - 1), 0, int2), int2);
                    break;
                }
            };
        };
    } else {
        switch (int2) {
            case 74186764: {
                IF_SETONTIMER(callback(script5262, int0, (int1 + 1), 74186764), int2);
                break;
            }
            case 74186770: {
                IF_SETONTIMER(callback(script5262, int0, (int1 + 1), 74186770), int2);
                break;
            }
        };
    };
    return;
}