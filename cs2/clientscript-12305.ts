//
function script12305(int0: number): void {
    if ((int0 == 1)) {
        if (((IF_GETNEXTSUBID(comp(1477, 13) /*toplevel_v2:graph_data_layer*/) != 0) || (IF_GETNEXTSUBID(comp(1477, 14) /*toplevel_v2:graph_data_fine_layer*/) != 0))) {
            return;
        };
    };
    CC_DELETEALL(comp(1477, 13));  // toplevel_v2:graph_data_layer
    CC_DELETEALL(comp(1477, 14));  // toplevel_v2:graph_data_fine_layer
    script12307();
    IF_SETHIDE(true, comp(1477, 13));  // toplevel_v2:graph_data_layer
    IF_SETHIDE(true, comp(1477, 14));  // toplevel_v2:graph_data_fine_layer
    if ((script12278() == 0)) {
        return;
    };
    if ((varbitclient_30618 == 0)) {
        script12296(1, 0);
    } else {
        varclient_5156 = MAX(varclient_5156, 1);
    };
    IF_SETONTIMER(callback(script12306), comp(1477, 12));  // toplevel_v2:graph_listener
    return;
}