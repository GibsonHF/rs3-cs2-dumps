//
function script15675(): void {
    if ((script14236() == 0)) {
        IF_SETHIDE(true, IF_GETPARENTLAYER(comp(826, 0)));  // preload_cache:base
        IF_SETHIDE(true, comp(826, 0));  // preload_cache:base
        script15673();
        return;
    };
    var int0 = 0;
    var int1 = 16776960;
    if ((PRELOAD_DOWNLOAD_COMPLETE() == 1)) {
        int0 = SCALE(MIN(10, PRELOAD_PROGRESS()), 10, 100);
        IF_SETTEXT(`Verifying Cache (${inttostring(int0, 10)}% complete)`, comp(826, 1));  // preload_cache:bar_text
    } else {
        int0 = SCALE((PRELOAD_PROGRESS() - 10), 90, 100);
        if ((int0 >= 100)) {
            IF_SETHIDE(true, IF_GETPARENTLAYER(comp(826, 0)));  // preload_cache:base
            IF_SETHIDE(true, comp(826, 0));  // preload_cache:base
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
        stack(inttostring(10));
        stack("mb / ");
        PRELOAD_DOWNLOAD_TOTALSIZE();
        IF_SETTEXT(`${inttostring(10)}mb (${inttostring(PRELOAD_DOWNLOAD_RATE(), 10)}kb/s))`, comp(826, 1));  // preload_cache:bar_text
    };
    var int2 = IF_GETHIDE(comp(826, 0));  // preload_cache:base
    if ((int2 == false)) {
        int2 = IF_GETHIDE(IF_GETPARENTLAYER(comp(826, 0)));  // preload_cache:base
    };
    IF_SETHIDE(false, comp(826, 0));  // preload_cache:base
    IF_SETHIDE(false, IF_GETPARENTLAYER(comp(826, 0)));  // preload_cache:base
    IF_SETSIZE(SCALE(IF_GETWIDTH(comp(826, 8) /*preload_cache:bar_inner*/), 100, int0), 0, 0, 1, comp(826, 9) /*preload_cache:bar_fill*/);
    IF_SETCOLOUR(int1, comp(826, 9));  // preload_cache:bar_fill
    if ((int2 == true)) {
        script15672();
    };
    return;
}