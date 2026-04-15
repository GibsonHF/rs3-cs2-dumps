//
function script2593(): void {
    if (((AUTOSETUP_GETLEVEL() == 1) || (AUTOSETUP_GETLEVEL() == 2))) {
        CLIENTOPTION_SET(7, 0);
    } else if ((CLIENTOPTION_GET(8) == 0)) {
        CLIENTOPTION_SET(7, 0);
    };
    return;
}