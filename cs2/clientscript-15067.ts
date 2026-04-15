//
function script15067(int0: int, int1: int): string {
    var string0 = "All abilities are hidden by the filter.";
    switch (int0) {
        case 3: {
            if ((varbitplayer_27168 == 1)) {
                var int1 = (int1 + 1);
            };
            switch (int1) {
                case 0: {
                    var int0 = 8;
                    break;
                }
                case 1: {
                    int0 = 9;
                    break;
                }
                case 2: {
                    int0 = 10;
                    break;
                }
                case 3: {
                    int0 = 11;
                    break;
                }
            };
            break;
        }
        case 4: {
            switch (int1) {
                case 0: {
                    int0 = 14;
                    break;
                }
                case 1: {
                    int0 = 15;
                    break;
                }
            };
            break;
        }
    };
    switch (int0) {
        case 9:
        case 10:
        case 11: {
            string0 = "All spells are hidden by the filter.";
            break;
        }
        case 15: {
            string0 = "All incantations are hidden by the filter.";
            break;
        }
    };
    return string0;
}