//
function script13148(int0: component): void {
    if (((IF_FIND(int0) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
        if ((varbitplayer_29607 == 2)) {
            if ((varbitclient_35134 == 1)) {
                CC_SETPOSITION[1](0, 0, 0, 0);
            } else {
                CC_SETPOSITION[1](220, 0, 2, 0);
            };
        } else {
            CC_SETPOSITION[1](46, 30, 0, 0);
        };
    };
    return;
}