//
function script9580(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if (((IF_FIND(IF_GETPARENTLAYER(int0)) == 1) && (cc_getparam(4040) != comp(-1, 65535)))) {
        if ((IF_GETHIDE(cc_getparam(4040)) == false)) {
            IF_SETHIDE(true, cc_getparam(4040));
        } else {
            IF_SETHIDE(false, cc_getparam(4040));
        };
        IF_CALLONRESIZE(cc_getparam(4040));
        script9579(int0);
        script9581(IF_GETPARENTLAYER(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0))));
    };
    return;
}