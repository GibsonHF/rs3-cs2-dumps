//
function script20443(): void {
    var int0 = -1 as graphic;
    var int1 = script14441();
    if (((int1 != -1 as struct) && (struct_getparam(int1, 6139) == 5))) {
        switch (MAP_LANG()) {
            case 0: {
                int0 = struct_getparam(int1, 3030);
                break;
            }
            case 1: {
                int0 = struct_getparam(int1, 3031);
                break;
            }
            case 2: {
                int0 = struct_getparam(int1, 3032);
                break;
            }
            case 3: {
                int0 = struct_getparam(int1, 3033);
                break;
            }
        };
        stack(int0);
        stack(118096125);
        IF_SETGRAPHIC();
        IF_SETSIZE(200, 364, 0, 0, 118096125);
    };
    return;
}