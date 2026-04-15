//
function script15198(int0: int): unknown_int {
    switch (int0) {
        case 1: {
            return 100;
        }
        case 2: {
            return 250;
        }
        case 3: {
            return 125;
        }
        case 4: {
            return 250;
        }
        case 5: {
            return 1;
        }
        case 6: {
            return 125;
        }
        case 7: {
            return 100;
        }
        case 8: {
            return 250;
        }
        case 9: {
            return 5;
        }
        case 10: {
            return 50;
        }
        case 11: {
            return 25;
        }
        case 12: {
            return 25;
        }
        case 13: {
            switch (script13471(int0)) {
                case 2: {
                    return 100;
                }
                case 3: {
                    return 66;
                }
                case 4: {
                }
                default: {
                    return 200;
                }
            };
            return 50;
        }
        case 14: {
            return 25;
        }
        case 15: {
            return 2;
        }
        case 16: {
            return 20;
        }
        case 17: {
            return 5;
        }
        case 18: {
            return 10;
        }
    };
    script12478(`Attempted to get var for unexpected burner type: ${inttostring(int0, 10)}`);
    return -1;
}