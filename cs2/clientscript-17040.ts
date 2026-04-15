//
function script17040(int0: struct): string {
    if ((int0 == -1 as struct)) {
        return "";
    };
    var string0 = struct_getparam(int0, 1266);
    var string1 = struct_getparam(int0, 4940);
    if ((STRING_LENGTH(string1) == 0)) {
        return string0;
    };
    return `${string0}:<br>${string1}`;
}