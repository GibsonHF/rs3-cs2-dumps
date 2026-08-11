//
function script8066(int0: number): [number, number] {
    if ((script8292(3, 2) == 1)) {
        if ((varplayer_3936 != int0)) {
            if ((CC_FIND(comp(1783, 18), 29) == 1)) {  // toplevel_v2_parent_suboverlay_questlist_v4:quests
                return [comp(1783, 18), int0];  // toplevel_v2_parent_suboverlay_questlist_v4:quests
            };
            return [struct_getparam(21301, 3509), ((4 * 2) - 1)];
        };
    } else {
        if ((script8292(3, -1) == 1)) {
            return [struct_getparam(21301, 3509), ((4 * 2) - 1)];
        };
        return script8069(3);
    };
    return [comp(-1, 65535), 0];
}