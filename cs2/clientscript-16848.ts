//
function script16848(int0: int): int {
    return MAX(0, ((DATE_MINUTES_FROMRUNEDAY(int0) + 720) - DATE_MINUTES()));
}