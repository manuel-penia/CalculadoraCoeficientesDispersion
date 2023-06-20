function sigma_z(x, estabilidad) {
    if (x <= 0) {
        throw new Error('La distancia es menor o igual a 0');
    } else if (x <= 1000) {
        if (estabilidad === "A") {
            var c = 440.8;
            var d = 1.941;
            var f = 9.27;
        } else if (estabilidad === "B") {
            var c = 106.6;
            var d = 1.149;
            var f = 3.3;
        } else if (estabilidad === "C") {
            var c = 61;
            var d = 0.911;
            var f = 0;
        } else if (estabilidad === "D") {
            var c = 33.2;
            var d = 0.725;
            var f = -1.7;
        } else if (estabilidad === "E") {
            var c = 22.8;
            var d = 0.678;
            var f = -1.3;
        } else if (estabilidad === "F") {
            var c = 14.35;
            var d = 0.74;
            var f = -0.35;
        } else {
            return "No es una estabilidad válida";
        }
    } else {
        if (estabilidad === "A") {
            var c = 459.7;
            var d = 2.094;
            var f = -9.6;
        } else if (estabilidad === "B") {
            var c = 108.2;
            var d = 1.098;
            var f = 2;
        } else if (estabilidad === "C") {
            var c = 61;
            var d = 0.911;
            var f = 0;
        } else if (estabilidad === "D") {
            var c = 44.5;
            var d = 0.516;
            var f = -13;
        } else if (estabilidad === "E") {
            var c = 55.4;
            var d = 0.305;
            var f = -34;
        } else if (estabilidad === "F") {
            var c = 62.6;
            var d = 0.18;
            var f = -48.6;
        } else {
            return "No es una estabilidad válida";
        }
    }

    var s_z = c * Math.pow((x / 1000), d) + f;
    return s_z;
}

function sigma_y(x, estabilidad) {
    if (x <= 0) {
        throw new Error('La distancia es menor o igual a 0');
    } else {
        if (estabilidad === "A") {
            var a = 213;
        } else if (estabilidad === "B") {
            var a = 156;
        } else if (estabilidad === "C") {
            var a = 104;
        } else if (estabilidad === "D") {
            var a = 68;
        } else if (estabilidad === "E") {
            var a = 50.5;
        } else if (estabilidad === "F") {
            var a = 34;
        } else {
            return "No es una estabilidad válida";
        }
    }

    var s_y = a * Math.pow((x / 1000), 0.894);
    return s_y;
}
