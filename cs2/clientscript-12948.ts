//
function script12948(): boolean {
    if (((((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(DATE_RUNEDAY_FROMDATE(12, 7, 2019))) / 60) >= 12) && (((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(DATE_RUNEDAY_FROMDATE(18, 7, 2019))) / 60) < 12))) {
        return true;
    };
    return false;
}