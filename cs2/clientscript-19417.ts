//
function script19417(int0: number): void {
    var string0 = "Regular";
    if (((int0 == 1) || (MODULO(CLIENTCLOCK(), 50) == 0))) {
        if (((varbitplayer_56572 == 1) || (varbitplayer_56573 == 1))) {
            IF_SETHIDE(1, 85196801);
            IF_SETHIDE(0, 85196802);
            IF_SETTEXT(varclient_8166, 85196806);
            IF_SETMAXLINES(1, 85196806);
            script3536(varclient_8166, 85196806, -1);
            string0 = script19324(varclient_8158, varclient_8159);
            IF_SETTEXT(string0, 85196808);
            script19418();
            if ((varbitplayer_56572 == 1)) {
                IF_SETHIDE(0, 85196809);
                IF_SETHIDE(0, 85196812);
                IF_SETHIDE(0, 85196815);
                IF_SETPOSITION(0, 35, 1, 0, 85196816);
            } else {
                IF_SETHIDE(1, 85196809);
                IF_SETHIDE(1, 85196812);
                IF_SETHIDE(1, 85196815);
                IF_SETPOSITION(0, 0, 1, 0, 85196816);
            };
        } else {
            IF_SETHIDE(0, 85196801);
            IF_SETHIDE(1, 85196802);
        };
    };
    return;
}