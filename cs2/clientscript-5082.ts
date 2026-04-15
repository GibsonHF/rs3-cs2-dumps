//
function script5082(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if (((varclient_160 != -1) && (CC_FIND[1](int0, ((varclient_160 * 10) + 2)) == 1))) {
        int1 = ((script4405() + CC_GETHEIGHT[1]()) - script3366(comp(1114, 22)));
        if ((int1 >= IF_GETHEIGHT(int0))) {
            IF_SETHIDE(true, comp(1114, 23));
        } else if ((int1 <= 0)) {
            IF_SETHIDE(true, comp(1114, 23));
        } else {
            IF_SETHIDE(false, comp(1114, 23));
            IF_SETPOSITION((script1815() - script3365(comp(1114, 22))), int1, 0, 0, comp(1114, 23));
            if ((IF_FIND[1](comp(1114, 23)) == 1)) {
                int3 = (cc_getparam[1](1477) + 8);
                int2 = MAX(MIN(int3, (IF_GETHEIGHT(comp(1114, 22)) - int1)), 0);
                CC_SETSIZE[1](cc_getparam[1](1476), int2, 0, 0);
            };
            IF_SETONTIMER(callback(script5083, -2147483645, varclient_160, (CLIENTCLOCK() + 2)), 73007127);
        };
    } else {
        IF_SETHIDE(true, comp(1114, 23));
    };
    return;
}