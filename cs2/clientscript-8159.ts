//
function script8159(int0: int, int1: unknown_int): void {
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int2, 3503);
    var int4 = struct_getparam(int2, 3506);
    if (((int3 == comp(-1, 65535)) || (int4 == comp(-1, 65535)))) {
        return;
    };
    if ((int0 == 26)) {
        if ((HAS_NXT() == 1)) {
            printmessage("This feature is currently disabled in this client.");
            return;
        };
        if ((varbitclient_23064 < 1)) {
            printmessage("You need to be logged into Twitch to do that.");
            return;
        };
    };
    script8306();
    if ((IF_GETHIDE(int3) == false)) {
        if ((script6213(int0) == 1)) {
            if ((((varbitplayer_36885 == 1) && (varbitplayer_27169 == 0)) && (varbitplayer_38842 == 0))) {
                script8054(int3, -1, 12, (36 * 2));
            } else {
                script8323(int0, 0);
                script13842(int0);
            };
        };
        return;
    };
    if ((((int1 == 1) && (varbitplayer_19925 == 0)) && (varbitplayer_38842 == 0))) {
        IF_SETHIDE(false, int3);
        IF_SETPOSITION(0, 0, 0, 0, int3);
        IF_SETSIZE(1, 1, 0, 0, int3);
        if ((CC_FIND(int4, 0) == 1)) {
            CC_SETONDRAG(callback(script8160, int0, GET_MOUSEX(), GET_MOUSEY()));
            CC_SETONDRAGCOMPLETE(callback(script8161, int0));
            CC_DRAGPICKUP(0, 0);
            FORCE_INTERFACE_DRAG();
            script173(int0);
        };
    } else {
        script8162(int0);
        script13842(int0);
    };
    return;
}