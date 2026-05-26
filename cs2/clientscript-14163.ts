//
function script14163(): void {
    if ((IF_GETTOP() != 1477)) {
        return;
    };
    if ((varbitplayer_38842 == 1)) {
        script14155();
    };
    if ((varclient_6403 == 2)) {
        return;
    };
    var int0 = script8071();
    if ((IF_HASSUB(int0) == 1)) {
        if ((((((((((IF_HASSUBMODAL(int0, 1188) == 1) || (IF_HASSUBMODAL(int0, 1183) == 1)) || (IF_HASSUBMODAL(int0, 1193) == 1)) || (IF_HASSUBMODAL(int0, 1235) == 1)) || (IF_HASSUBMODAL(int0, 668) == 1)) || (IF_HASSUBMODAL(int0, 737) == 1)) || (IF_HASSUBMODAL(int0, 133) == 1)) || (IF_HASSUBMODAL(int0, 393) == 1)) || (IF_HASSUBMODAL(int0, 507) == 1))) {
            script20393(1, 4);
        } else {
            script20393(0, 4);
        };
    } else if ((IF_HASSUB(comp(1477, 749)) == 1)) {
        script20393(0, 4);
    } else {
        script20393(0, 4);
    };
    return;
}