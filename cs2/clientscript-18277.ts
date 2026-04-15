//
function script18277(int0: struct, int1: unknown_int, int2: component, int3: component, int4: component, int5: component, int6: int, int7: dbrow): void {
    if ((int6-- > 0)) {
        IF_SETONTIMER(callback(script18277, int0, int1, int2, int3, int4, int5, int6, int7), int4);
        return;
    };
    IF_SETONTIMER(callback(), int4);
    switch (int1) {
        case 4: {
            script16509(int0, int2, int3, int4, int5, 0, int7);
            break;
        }
    };
    return;
}