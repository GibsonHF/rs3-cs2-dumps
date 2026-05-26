//[clientscript,wilderness_level_update]
function script54(int0: number): void {
    var int1 = 0;
    if (((script133(48238016, 861573375, COORD()) == 1) || (script133(47189824, 853528447, COORD()) == 1))) {
        int1 = (((COORDZ(COORD()) - 3520) / 8) + 1);
    } else if ((script133(48244416, 860875391, COORD()) == 1)) {
        int1 = (((COORDZ(COORD()) - 9920) / 8) + 1);
    } else {
        IF_SETTEXT("", int0);
        return;
    };
    int1 = MAX(MIN(int1, 99), 0);
    IF_SETTEXT(`Level: ${inttostring(int1, 10)}`, int0);
    return;
}