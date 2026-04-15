//
function script10289(): [cs2enum, cs2enum] {
    var int0 = script10283();
    if ((int0 == -1 as struct)) {
        return [-1 as cs2enum, -1 as cs2enum];
    };
    return [struct_getparam(int0, 4508), struct_getparam(int0, 4510)];
}