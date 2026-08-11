//
function script16891(): void {
    var int0 = MIN(960, IF_GETWIDTH(comp(1066, 0)));  // gamemode_seasonal_fss_registration:base
    var int1 = MIN(540, IF_GETHEIGHT(comp(1066, 0)));  // gamemode_seasonal_fss_registration:base
    IF_SETSIZE(int0, int1, 0, 0, comp(1066, 4));  // gamemode_seasonal_fss_registration:titled_window
    script16892();
    script16894();
    script16895();
    IF_SETONRESIZE(callback(script16891), comp(1066, 3));  // gamemode_seasonal_fss_registration:background_layer
    return;
}