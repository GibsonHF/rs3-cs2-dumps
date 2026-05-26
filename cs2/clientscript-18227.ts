//
function script18227(int0: number, int1: number): void {
    IF_SETHIDE(0, 88015020);
    IF_SETTEXT(OC_NAME(int0), 88015035);
    IF_SETOBJECT_ALWAYSNUM(int0, int1, 88015037);
    var string0 = "";
    if (((OC_MEMBERS(int0) == 0) || ((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 1)))) {
        string0 = OC_DESC(int0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, 88015038);
    } else {
        IF_SETTEXT(item_getparam(int0, 4085), 88015038);
    };
    return;
}