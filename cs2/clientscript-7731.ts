//
function script7731(int0: number, int1: number, int2: number): number {
    switch (int2) {
        case 0: {
            if (((((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(int0)) / 60) >= 12) && (((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(int1)) / 60) < 12))) {
                return 1;
            };
            return 0;
        }
        case 2: {
            if (((DATE_RUNEDAY() >= int0) && (((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(int1)) / 60) < 12))) {
                return 1;
            };
            return 0;
        }
        case 1: {
            if (((DATE_RUNEDAY() >= int0) && (DATE_RUNEDAY() <= int1))) {
                return 1;
            };
            return 0;
        }
    };
    return -1;
}