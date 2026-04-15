//
function script17270(int0: obj, int1: quest): int {
    var int2 = item_getparam(int0, 9076);
    if ((int2 == -1 as var_reference)) {
        script12478(`oc_debugname is missing param=statvar_used.`);
        return 0;
    };
    if (((script18522(int1) == true) && (WORLDMAP_GETDISPLAYCOORD(int2) < item_getparam(int0, 9099)))) {
        return 1;
    };
    return 0;
}