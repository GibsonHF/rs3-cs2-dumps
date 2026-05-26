//
function script15675(): void {
    if ((script14236() == 0)) {
        IF_SETHIDE(1, IF_GETPARENTLAYER(54132736));
        IF_SETHIDE(1, 54132736);
        script15673();
        return;
    };
    var int0 = 0;
    var int1 = 16776960;
    if ((PRELOAD_DOWNLOAD_COMPLETE() == 1)) {
        int0 = SCALE(MIN(10, PRELOAD_PROGRESS()), 10, 100);
        IF_SETTEXT(`Verifying Cache (${inttostring(int0, 10)}% complete)`, 54132737);
    } else {
        int0 = SCALE((PRELOAD_PROGRESS() - 10), 90, 100);
        if ((int0 >= 100)) {
            IF_SETHIDE(1, IF_GETPARENTLAYER(54132736));
            IF_SETHIDE(1, 54132736);
            script15673();
            return;
        };
        if ((int0 < 10)) {
            int1 = 8912896;
        } else if ((int0 < 50)) {
            int1 = 8947712;
        } else {
            int1 = 34816;
        };
        PRELOAD_DOWNLOAD_DOWNLOADEDSIZE("Preparing Cache (", inttostring(int0, 10), "% downloaded - ");
        stack(inttostring(stack(), 10));
        stack("mb / ");
        PRELOAD_DOWNLOAD_TOTALSIZE();
        stack(inttostring(stack(), 10));
        stack("mb (");
        stack(PRELOAD_DOWNLOAD_RATE());
        IF_SETTEXT(`${stack()}${inttostring(10)}kb/s))`, 54132737);
    };
    var int2 = IF_GETHIDE(54132736);
    if ((int2 == 0)) {
        int2 = IF_GETHIDE(IF_GETPARENTLAYER(54132736));
    };
    IF_SETHIDE(0, 54132736);
    IF_SETHIDE(0, IF_GETPARENTLAYER(54132736));
    IF_SETSIZE(SCALE(IF_GETWIDTH(54132744), 100, int0), 0, 0, 1, 54132745);
    IF_SETCOLOUR(int1, 54132745);
    if ((int2 == 1)) {
        script15672();
    };
    return;
}