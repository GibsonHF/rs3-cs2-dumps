//
function script12949(): unknown_int {
    if (((((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(DATE_RUNEDAY_FROMDATE(3, 7, 2018))) / 60) >= 12) && (((DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(DATE_RUNEDAY_FROMDATE(6, 7, 2018))) / 60) < 12))) {
        return 1;
    };
    return 0;
}