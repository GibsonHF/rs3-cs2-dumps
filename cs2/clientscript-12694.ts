//
function script12694(): void {
    var int0 = script14441();
    if (((int0 == -1) || (varbitplayer_33661 == 0))) {
        return;
    };
    if ((struct_getparam(int0, 5904) != comp(-1, 65535))) {
        IF_SETGRAPHIC(struct_getparam(int0, 5901), comp(1784, 9));  // toplevel_v2_parent_suboverlay_seasonal:tab1_icon
        IF_SETGRAPHIC(18100 as graphic, comp(1784, 8));  // toplevel_v2_parent_suboverlay_seasonal:tab1_bg
        IF_SETHIDE(true, struct_getparam(int0, 5904));
    };
    if ((struct_getparam(int0, 5909) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 15)) != struct_getparam(int0, 6287))) {  // toplevel_v2_parent_suboverlay_seasonal:tab2_icon
            IF_SETGRAPHIC(struct_getparam(int0, 5906), comp(1784, 15));  // toplevel_v2_parent_suboverlay_seasonal:tab2_icon
        };
        IF_SETGRAPHIC(18100 as graphic, comp(1784, 14));  // toplevel_v2_parent_suboverlay_seasonal:tab2_bg
        IF_SETHIDE(true, struct_getparam(int0, 5909));
    };
    if ((struct_getparam(int0, 5914) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 17)) != struct_getparam(int0, 6288))) {  // toplevel_v2_parent_suboverlay_seasonal:tab3_icon
            IF_SETGRAPHIC(struct_getparam(int0, 5911), comp(1784, 17));  // toplevel_v2_parent_suboverlay_seasonal:tab3_icon
        };
        IF_SETGRAPHIC(18100 as graphic, comp(1784, 16));  // toplevel_v2_parent_suboverlay_seasonal:tab3_bg
        IF_SETHIDE(true, struct_getparam(int0, 5914));
    };
    if ((struct_getparam(int0, 5919) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 19)) != struct_getparam(int0, 6289))) {  // toplevel_v2_parent_suboverlay_seasonal:tab4_icon
            IF_SETGRAPHIC(struct_getparam(int0, 5916), comp(1784, 19));  // toplevel_v2_parent_suboverlay_seasonal:tab4_icon
        };
        IF_SETGRAPHIC(18100 as graphic, comp(1784, 18));  // toplevel_v2_parent_suboverlay_seasonal:tab4_bg
        IF_SETHIDE(true, struct_getparam(int0, 5919));
    };
    if ((struct_getparam(int0, 5924) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 21)) != struct_getparam(int0, 6290))) {  // toplevel_v2_parent_suboverlay_seasonal:tab5_icon
            IF_SETGRAPHIC(struct_getparam(int0, 5921), comp(1784, 21));  // toplevel_v2_parent_suboverlay_seasonal:tab5_icon
        };
        IF_SETGRAPHIC(18100 as graphic, comp(1784, 20));  // toplevel_v2_parent_suboverlay_seasonal:tab5_bg
        IF_SETHIDE(true, struct_getparam(int0, 5924));
    };
    switch (varbitplayer_33660) {
        case 2: {
            IF_SETGRAPHIC(struct_getparam(int0, 5908), comp(1784, 15));  // toplevel_v2_parent_suboverlay_seasonal:tab2_icon
            IF_SETGRAPHIC(18102 as graphic, comp(1784, 14));  // toplevel_v2_parent_suboverlay_seasonal:tab2_bg
            IF_SETHIDE(false, struct_getparam(int0, 5909));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(struct_getparam(int0, 5913), comp(1784, 17));  // toplevel_v2_parent_suboverlay_seasonal:tab3_icon
            IF_SETGRAPHIC(18102 as graphic, comp(1784, 16));  // toplevel_v2_parent_suboverlay_seasonal:tab3_bg
            IF_SETHIDE(false, struct_getparam(int0, 5914));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(struct_getparam(int0, 5918), comp(1784, 19));  // toplevel_v2_parent_suboverlay_seasonal:tab4_icon
            IF_SETGRAPHIC(18102 as graphic, comp(1784, 18));  // toplevel_v2_parent_suboverlay_seasonal:tab4_bg
            IF_SETHIDE(false, struct_getparam(int0, 5919));
            break;
        }
        case 5: {
            IF_SETGRAPHIC(struct_getparam(int0, 5923), comp(1784, 21));  // toplevel_v2_parent_suboverlay_seasonal:tab5_icon
            IF_SETGRAPHIC(18102 as graphic, comp(1784, 20));  // toplevel_v2_parent_suboverlay_seasonal:tab5_bg
            IF_SETHIDE(false, struct_getparam(int0, 5924));
            break;
        }
        default: {
            if ((struct_getparam(int0, 5904) != comp(-1, 65535))) {
                IF_SETGRAPHIC(struct_getparam(int0, 5903), comp(1784, 9));  // toplevel_v2_parent_suboverlay_seasonal:tab1_icon
                IF_SETGRAPHIC(18102 as graphic, comp(1784, 8));  // toplevel_v2_parent_suboverlay_seasonal:tab1_bg
                IF_SETHIDE(false, struct_getparam(int0, 5904));
            };
            break;
        }
    };
    return;
}