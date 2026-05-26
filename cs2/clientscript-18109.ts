//
function script18109(int0: number): void {
    if ((int0 > IF_GETHEIGHT(26411017))) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(26411017), (int0 + 10), 26411017);
        script7791(26411019, 26411017);
    } else {
        IF_SETSCROLLSIZE(0, 0, 26411017);
        CC_DELETEALL(26411019);
    };
    return;
}