//
function script12847(int0: component, string0: unknown_string): void {
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(22624 as graphic);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
    CC_SETONMOUSELEAVE(callback(script8805));
    CC_SETONCLICK(callback(script12845));
    CC_CREATE[1](int0, 5, 1);
    CC_SETSIZE[1](10, 32, 0, 0);
    CC_SETPOSITION[1](0, 0, 1, 1);
    CC_SETGRAPHIC[1](937);
    CC_SETHIDE[1](1);
    CC_SETONTIMER(callback(script12848, int0, CC_GETID[1]()));
    return;
}