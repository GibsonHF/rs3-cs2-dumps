//[proc,hex_to_rgb]
function script2413(int0: int): [int, int, int] {
    return [(int0 / 65536), (AND(int0, 65280) / 256), AND(int0, 255)];
}