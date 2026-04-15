//
function script17420(): void {
    if ((CLIENTOPTION_GET(19) == 1)) {
        CLIENTOPTION_SET(19, 0);
    };
    if ((CLIENTOPTION_GET(21) == 0)) {
        CLIENTOPTION_SET(21, 1);
    };
    if ((CLIENTOPTION_GET(0) == 1)) {
        CLIENTOPTION_SET(0, 0);
    };
    if ((CLIENTOPTION_GET(8) == 0)) {
        CLIENTOPTION_SET(8, 1);
    };
    return;
}