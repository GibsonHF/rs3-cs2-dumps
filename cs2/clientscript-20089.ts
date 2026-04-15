//
function script20089(): [int, int] {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    int0 = ((DATE_MINUTES() / 1440) - DATE_RUNEDAY());
    int1 = (DATE_MINUTES() - ((int0 + DATE_RUNEDAY()) * 1440));
    int2 = (int1 / 60);
    return [int2, MODULO(int1, 60)];
}