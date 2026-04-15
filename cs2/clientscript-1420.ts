//
function script1420(): unknown_int {
    if ((varplayer_1114 == 3)) {
        return 0;
    };
    if ((varclient_173 != 1)) {
        if ((varbitplayer_3028 == 0)) {
            if (((CAM2_ISENABLED() == 1) || (CAM2_GETCONTROLMODE() == 1))) {
                return 1;
            };
        } else if ((((varbitplayer_3028 == 1) && (varbitplayer_3031 == 1)) && ((CAM2_ISENABLED() == 1) || (CAM2_GETCONTROLMODE() == 1)))) {
            return 1;
        };
    };
    return 0;
}