//
function script7731(int0: int, int1: int, int2: int): boolean {
    switch (int2) {
        case 0: {
            if (((((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(int0)) / 60) >= 12) && (((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(int1)) / 60) < 12))) {
                return true;
            };
            return false;
        }
        case 2: {
            if (((DATE_RUNEDAY() >= int0) && (((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(int1)) / 60) < 12))) {
                return true;
            };
            return false;
        }
        case 1: {
            if (((DATE_RUNEDAY() >= int0) && (DATE_RUNEDAY() <= int1))) {
                return true;
            };
            return false;
        }
    };
    return false;
}