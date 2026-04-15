//[clientscript,ii_storage_update]
function script2905(int0: component, int1: obj, int2: int, int3: component): void {
    var int4 = IF_GETLAYER(int0);
    var int5 = 0;
    if ((int1 == 10010 as obj)) {
        switch (varbitplayer_4222) {
            case 1: {
                int5 = 1;
                break;
            }
            case 2: {
                int5 = 1;
                var int1 = 11259 as obj;
                break;
            }
        };
    } else if ((int1 == 11262 as obj)) {
        int5 = varbitplayer_4215;
    } else if ((int1 == 11260 as obj)) {
        int5 = varbitplayer_4223;
    };
    IF_SETTEXT(`${OC_NAME(int1)}<br>(${inttostring(int5, 10)}/${inttostring(int2, 10)})`, int3);
    IF_SETOBJECT_NONUM(int1, -1, int0);
    IF_SETOUTLINE(1, int0);
    if ((int5 > 0)) {
        IF_SETCOLOUR(16776960, int3);
    } else {
        IF_SETCOLOUR(13369344, int3);
    };
    return;
}