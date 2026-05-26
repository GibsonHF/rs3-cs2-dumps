//
function script18132(int0: number, int1: number): [number, string] {
    if ((MAP_MEMBERS() == 0)) {
        return [0, "This feature can only be used on a members' world."];
    };
    if ((struct_getparam(int0, 8682) == 2)) {
        return [0, "This challenge cannot be rerolled."];
    };
    return [1, "Spend vis wax to replace this challenge with a different challenge."];
}