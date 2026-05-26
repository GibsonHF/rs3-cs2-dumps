//
function script5555(int0: number, int1: number): void {
    if (((int0 == 0) && (int1 == 0))) {
        IF_SETTEXT("---", 43384947);
        IF_SETTEXT("---", 43384842);
        return;
    };
    if ((int1 == 0)) {
        IF_SETTEXT(`${inttostring(int0, 10)}:00`, 43384947);
        IF_SETTEXT(`${inttostring(int0, 10)}:00`, 43384842);
    } else {
        IF_SETTEXT(`${inttostring(int0, 10)}:30`, 43384947);
        IF_SETTEXT(`${inttostring(int0, 10)}:30`, 43384842);
    };
    return;
}