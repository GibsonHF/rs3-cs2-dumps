//
function script15968(int0: number, int1: number, string0: string): number {
    if ((STRING_LENGTH(string0) > 0)) {
        while ((int1 != -1 as stylesheet)) {
            if ((STYLESHEET_HAS_VALUE(int1, string0) == 1)) {
                return STYLESHEET_GET_VALUE(int1, string0, 0);
            };
            var int1 = STYLESHEET_GET_PARENT_ID(int1);
        };
    };
    return -1;
}