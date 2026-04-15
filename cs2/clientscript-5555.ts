//
function script5555(int0: int, int1: int): void {
    if (((int0 == 0) && (int1 == 0))) {
        IF_SETTEXT("---", comp(662, 115));
        IF_SETTEXT("---", comp(662, 10));
        return;
    };
    if ((int1 == 0)) {
        IF_SETTEXT(`${inttostring(int0, 10)}:00`, comp(662, 115));
        IF_SETTEXT(`${inttostring(int0, 10)}:00`, comp(662, 10));
    } else {
        IF_SETTEXT(`${inttostring(int0, 10)}:30`, comp(662, 115));
        IF_SETTEXT(`${inttostring(int0, 10)}:30`, comp(662, 10));
    };
    return;
}