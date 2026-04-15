//
function script5262(int0: int, int1: int, int2: component): void {
    if ((int1 == 50)) {
        if ((int0 == 1)) {
            switch (int2) {
                case 74186764: {
                    IF_SETHIDE(true, comp(1132, 15));
                    IF_SETHIDE(true, comp(1132, 16));
                    IF_SETONTIMER(callback(), int2);
                    break;
                }
                case 74186770: {
                    IF_SETHIDE(true, comp(1132, 21));
                    IF_SETHIDE(true, comp(1132, 22));
                    IF_SETONTIMER(callback(), int2);
                    break;
                }
            };
        } else {
            switch (int2) {
                case 74186764: {
                    IF_SETTEXT(inttostring((int0 - 1), 10), comp(1132, 16));
                    IF_SETONTIMER(callback(script5262, (int0 - 1), 0, int2), int2);
                    break;
                }
                case 74186770: {
                    IF_SETTEXT(inttostring((int0 - 1), 10), comp(1132, 22));
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