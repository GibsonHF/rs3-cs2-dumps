//
function script15268(int0: component): void {
    var string0 = SSO_DISPLAYNAME();
    if (((STRING_LENGTH(string0) == 0) || (STRING_INDEXOF_STRING(string0, "#", 0) == -1))) {
        IF_SETTEXT(`Logging in as:<br><col=ffffff>${string0}</col>`, int0);
    } else {
        IF_SETTEXT("", int0);
    };
    return;
}