//
function script12116(): void {
    varclient_5116 = 0;
    IF_SETONOP(callback(script12132, 0), comp(1708, 43));  // invent_discovery:part_icon_0
    IF_SETONOP(callback(script12132, 1), comp(1708, 44));  // invent_discovery:part_icon_1
    IF_SETONOP(callback(script12132, 2), comp(1708, 45));  // invent_discovery:part_icon_2
    IF_SETONOP(callback(script12132, 3), comp(1708, 46));  // invent_discovery:part_icon_3
    IF_SETONOP(callback(script12132, 4), comp(1708, 47));  // invent_discovery:part_icon_4
    IF_SETONOP(callback(script12132, 5), comp(1708, 48));  // invent_discovery:part_icon_5
    IF_SETONOP(callback(script12132, 6), comp(1708, 49));  // invent_discovery:part_icon_6
    IF_SETONOP(callback(script12132, 7), comp(1708, 50));  // invent_discovery:part_icon_7
    IF_SETONOP(callback(script12132, 8), comp(1708, 51));  // invent_discovery:part_icon_8
    IF_SETONOP(callback(script12132, 9), comp(1708, 52));  // invent_discovery:part_icon_9
    IF_SETONDRAGCOMPLETE(callback(script12133, 0, -2147483642), comp(1708, 43));  // invent_discovery:part_icon_0
    IF_SETONDRAGCOMPLETE(callback(script12133, 1, -2147483642), comp(1708, 44));  // invent_discovery:part_icon_1
    IF_SETONDRAGCOMPLETE(callback(script12133, 2, -2147483642), comp(1708, 45));  // invent_discovery:part_icon_2
    IF_SETONDRAGCOMPLETE(callback(script12133, 3, -2147483642), comp(1708, 46));  // invent_discovery:part_icon_3
    IF_SETONDRAGCOMPLETE(callback(script12133, 4, -2147483642), comp(1708, 47));  // invent_discovery:part_icon_4
    IF_SETONDRAGCOMPLETE(callback(script12133, 5, -2147483642), comp(1708, 48));  // invent_discovery:part_icon_5
    IF_SETONDRAGCOMPLETE(callback(script12133, 6, -2147483642), comp(1708, 49));  // invent_discovery:part_icon_6
    IF_SETONDRAGCOMPLETE(callback(script12133, 7, -2147483642), comp(1708, 50));  // invent_discovery:part_icon_7
    IF_SETONDRAGCOMPLETE(callback(script12133, 8, -2147483642), comp(1708, 51));  // invent_discovery:part_icon_8
    IF_SETONDRAGCOMPLETE(callback(script12133, 9, -2147483642), comp(1708, 52));  // invent_discovery:part_icon_9
    IF_SETONOP(callback(script12137, 0), comp(1708, 23));  // invent_discovery:blueprint_icon_layer_0
    IF_SETONOP(callback(script12137, 1), comp(1708, 24));  // invent_discovery:blueprint_icon_layer_1
    IF_SETONOP(callback(script12137, 2), comp(1708, 25));  // invent_discovery:blueprint_icon_layer_2
    IF_SETONOP(callback(script12137, 3), comp(1708, 26));  // invent_discovery:blueprint_icon_layer_3
    IF_SETONOP(callback(script12137, 4), comp(1708, 27));  // invent_discovery:blueprint_icon_layer_4
    IF_SETONDRAGCOMPLETE(callback(script12139, 0, -2147483642), comp(1708, 29));  // invent_discovery:blueprint_icon_0
    IF_SETONDRAGCOMPLETE(callback(script12139, 1, -2147483642), comp(1708, 116));  // invent_discovery:blueprint_icon_1
    IF_SETONDRAGCOMPLETE(callback(script12139, 2, -2147483642), comp(1708, 118));  // invent_discovery:blueprint_icon_2
    IF_SETONDRAGCOMPLETE(callback(script12139, 3, -2147483642), comp(1708, 120));  // invent_discovery:blueprint_icon_3
    IF_SETONDRAGCOMPLETE(callback(script12139, 4, -2147483642), comp(1708, 122));  // invent_discovery:blueprint_icon_4
    IF_SETONOP(callback(script12151, 0, -2147483645), comp(1708, 14));  // invent_discovery:track_icon_0
    IF_SETONOP(callback(script12151, 1, -2147483645), comp(1708, 15));  // invent_discovery:track_icon_1
    IF_SETONOP(callback(script12151, 2, -2147483645), comp(1708, 16));  // invent_discovery:track_icon_2
    IF_SETONOP(callback(script12151, 3, -2147483645), comp(1708, 17));  // invent_discovery:track_icon_3
    IF_SETONOP(callback(script12151, 4, -2147483645), comp(1708, 18));  // invent_discovery:track_icon_4
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 14));  // invent_discovery:track_icon_0
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 15));  // invent_discovery:track_icon_1
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 16));  // invent_discovery:track_icon_2
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 17));  // invent_discovery:track_icon_3
    IF_SETONDRAGCOMPLETE(callback(script12153, -2147483645, -2147483642), comp(1708, 18));  // invent_discovery:track_icon_4
    if ((IF_FIND(comp(1708, 14)) == 1)) {  // invent_discovery:track_icon_0
        cc_setparam(5534, 0);
    };
    if ((IF_FIND(comp(1708, 15)) == 1)) {  // invent_discovery:track_icon_1
        cc_setparam(5534, 1);
    };
    if ((IF_FIND(comp(1708, 16)) == 1)) {  // invent_discovery:track_icon_2
        cc_setparam(5534, 2);
    };
    if ((IF_FIND(comp(1708, 17)) == 1)) {  // invent_discovery:track_icon_3
        cc_setparam(5534, 3);
    };
    if ((IF_FIND(comp(1708, 18)) == 1)) {  // invent_discovery:track_icon_4
        cc_setparam(5534, 4);
    };
    script12118();
    return;
}