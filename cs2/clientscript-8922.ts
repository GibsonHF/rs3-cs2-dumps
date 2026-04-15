//
function script8922(int0: component): void {
    var int1 = IF_GETPARENTLAYER(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0)));
    if (((IF_FIND(IF_GETPARENTLAYER(int0)) == 1) && (cc_getparam(4040) != comp(-1, 65535)))) {
        if ((IF_GETHIDE(cc_getparam(4040)) == true)) {
            script9580(int0);
        };
        IF_SETSCROLLPOS(0, IF_GETY(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0))), int1);
    };
    return;
}