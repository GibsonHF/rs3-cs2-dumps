//
function script12116(): void {
    varclient_5116 = 0;
    IF_SETONOP(callback(script12132, 0), comp(1708, 43));
    IF_SETONOP(callback(script12132, 1), comp(1708, 44));
    IF_SETONOP(callback(script12132, 2), comp(1708, 45));
    IF_SETONOP(callback(script12132, 3), comp(1708, 46));
    IF_SETONOP(callback(script12132, 4), comp(1708, 47));
    IF_SETONOP(callback(script12132, 5), comp(1708, 48));
    IF_SETONOP(callback(script12132, 6), comp(1708, 49));
    IF_SETONOP(callback(script12132, 7), comp(1708, 50));
    IF_SETONOP(callback(script12132, 8), comp(1708, 51));
    IF_SETONOP(callback(script12132, 9), comp(1708, 52));
    IF_SETONDRAGCOMPLETE(callback(script12133, 0, -2147483642), comp(1708, 43));
    IF_SETONDRAGCOMPLETE(callback(script12133, 1, -2147483642), comp(1708, 44));
    IF_SETONDRAGCOMPLETE(callback(script12133, 2, -2147483642), comp(1708, 45));
    IF_SETONDRAGCOMPLETE(callback(script12133, 3, -2147483642), comp(1708, 46));
    IF_SETONDRAGCOMPLETE(callback(script12133, 4, -2147483642), comp(1708, 47));
    IF_SETONDRAGCOMPLETE(callback(script12133, 5, -2147483642), comp(1708, 48));
    IF_SETONDRAGCOMPLETE(callback(script12133, 6, -2147483642), comp(1708, 49));
    IF_SETONDRAGCOMPLETE(callback(script12133, 7, -2147483642), comp(1708, 50));
    IF_SETONDRAGCOMPLETE(callback(script12133, 8, -2147483642), comp(1708, 51));
    IF_SETONDRAGCOMPLETE(callback(script12133, 9, -2147483642), comp(1708, 52));
    IF_SETONOP(callback(script12137, 0), comp(1708, 23));
    IF_SETONOP(callback(script12137, 1), comp(1708, 24));
    IF_SETONOP(callback(script12137, 2), comp(1708, 25));
    IF_SETONOP(callback(script12137, 3), comp(1708, 26));
    IF_SETONOP(callback(script12137, 4), comp(1708, 27));
    IF_SETONDRAGCOMPLETE(callback(script12139, 0, -2147483642), comp(1708, 29));
    IF_SETONDRAGCOMPLETE(callback(script12139, 1, -2147483642), comp(1708, 116));
    IF_SETONDRAGCOMPLETE(callback(script12139, 2, -2147483642), comp(1708, 118));
    IF_SETONDRAGCOMPLETE(callback(script12139, 3, -2147483642), comp(1708, 120));
    IF_SETONDRAGCOMPLETE(callback(script12139, 4, -2147483642), comp(1708, 122));
    IF_SETONOP(callback(script12151, 0, -2147483645), comp(1708, 14));
    IF_SETONOP(callback(script12151, 1, -2147483645), comp(1708, 15));
    IF_SETONOP(callback(script12151, 2, -2147483645), comp(1708, 16));
    IF_SETONOP(callback(script12151, 3, -2147483645), comp(1708, 17));
    IF_SETONOP(callback(script12151, 4, -2147483645), comp(1708, 18));
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 14));
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 15));
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 16));
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 17));
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 18));
    if ((IF_FIND(comp(1708, 14)) == 1)) {
        cc_setparam(5534, 0);
    };
    if ((IF_FIND(comp(1708, 15)) == 1)) {
        cc_setparam(5534, 1);
    };
    if ((IF_FIND(comp(1708, 16)) == 1)) {
        cc_setparam(5534, 2);
    };
    if ((IF_FIND(comp(1708, 17)) == 1)) {
        cc_setparam(5534, 3);
    };
    if ((IF_FIND(comp(1708, 18)) == 1)) {
        cc_setparam(5534, 4);
    };
    script12118();
    return;
}