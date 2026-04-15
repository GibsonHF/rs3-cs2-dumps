//[clientscript,quickchat_menu_scroll]
function script1065(int0: component, int1: int): void {
    if ((IF_GETSCROLLX(int0) > int1)) {
        IF_SETSCROLLSIZE((IF_GETSCROLLWIDTH(int0) - 10), 0, int0);
        IF_SETSCROLLPOS((IF_GETSCROLLX(int0) - 10), 0, int0);
        if ((IF_GETSCROLLX(int0) < int1)) {
            IF_SETSCROLLSIZE((int1 + IF_GETWIDTH(int0)), 0, int0);
            IF_SETSCROLLPOS(int1, 0, int0);
            IF_SETONTIMER(callback(), int0);
            return;
        };
    } else if ((IF_GETSCROLLX(int0) < int1)) {
        IF_SETSCROLLSIZE((IF_GETSCROLLWIDTH(int0) + 10), 0, int0);
        IF_SETSCROLLPOS((IF_GETSCROLLX(int0) + 10), 0, int0);
        if ((IF_GETSCROLLX(int0) > int1)) {
            IF_SETSCROLLSIZE((int1 + IF_GETWIDTH(int0)), 0, int0);
            IF_SETSCROLLPOS(int1, 0, int0);
            IF_SETONTIMER(callback(), int0);
            return;
        };
    } else {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    return;
}