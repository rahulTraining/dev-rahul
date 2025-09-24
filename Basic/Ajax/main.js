function makeAJAXCall(e) {
    e.preventDefault();
    jQuery.ajax({
        url: '',
        data: $('#formId').serialize(),
        type: "GET"
    });
}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (true) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "ajax_ino.txt", true);
    xhttp.send();
}

captureNetworkLogs()

function captureNetworkLogs() {
    let pendingRequests = 0;
    const originalFetch = window.fetch;
    window.fetch = function (url, options = {}) {
        const startTime = Date.now();
        let method, payload, responseStatus, responseText, errorMessage;
        if (options) {
            method = options.method || 'NA';
            payload = options.body;
        }
        pendingRequests++;
        return originalFetch(url, options)
            .then(response => {
                responseStatus = response.status;
                return response.clone().text().then(bodyText => {
                    responseText = bodyText;
                });
            })
            .catch(error => {
                errorMessage = error.message;
            })
            .finally(() => {
                pendingRequests--;
                const duration = Date.now() - startTime;
                if (pendingRequests === 0) {
                    if (errorMessage) {
                        logRequests(url, method, payload, "Error", duration, errorMessage);
                    } else {
                        logRequests(url, method, payload, responseStatus, duration, responseText);
                    }
                }
            });
    };
}

const originalXHR = window.XMLHttpRequest;

window.XMLHttpRequest = function () {
    const xhr = new originalXHR();
    const startTime = Date.now();
    const _open = xhr.open;
    const _send = xhr.send;

    // Log the request method and URL
    xhr.open = function (method, url, async, user, password) {
        this._url = url;
        this._method = method;
        console.log('XMLHttpRequest Opened:', method, url);
        _open.apply(this, arguments);
    };

    xhr.send = function (data) {
        const payload = data || 'NA';
        const that = this;
        console.log(this)

        // Intercept the onload callback
        this.onload = function () {
            const duration = Date.now() - startTime;
            console.log('XMLHttpRequest Completed:');
            console.log({
                url: that._url,
                method: that._method,
                status: that.status,
                responseText: that.responseText,
                duration: duration + 'ms',
                payload: payload
            });
        };

        // Intercept the onerror callback
        this.onerror = function () {
            console.log(this, 'this')
            const duration = Date.now() - startTime;
            console.error('XMLHttpRequest Failed:');
            console.error({
                url: that._url,
                method: that._method,
                errorMessage: 'Network Error',
                duration: duration + 'ms',
                payload: payload
            });
        };

        _send.apply(this, arguments); // Send the request
    };

    return xhr;
};


function logRequests(url, method, payload, status, duration, response) {
    //const filteredLogs = urlsToLog.some(log => url.includes(log));
    if (true) {
        let logData = {
            URL: url,
            Method: method,
            Payload: payload ? JSON.stringify(payload) : "No Payload",
            Status: status,
            Duration: duration ? duration + " ms" : null,
            Response: response,
            VisitorId: $("#sessionVisitorId").val() || "No VisitorId"
        };
        console.log(logData, 'logData:::::&&&');
    }
}

function timer() {
    for (var i = 1; i <= 5; i++) {
        function ti(a) {
            setTimeout(function () {
                console.log(a)
            }, a * 1000)
        }
        ti(i)
    }
}
timer()


//auto logout

function autoLogoutAfterInactivity() {
    let idleTime = 30;
    let runIdleTime;
    let lastActivityTime;
    let sessionTime = 30;

    const startInactivityTimer = () => {
        runIdleTime = setInterval(function () {
            idleTime--;
            $('#idleTime').val(idleTime);
            if (idleTime <= 0) {
                clearInterval(runIdleTime);
                //doAutoLogout();
                console.log("You have been inactive for too long! Logging out...");
            }
        }, 1000);
    };

    const resetTimer = () => {
        console.log('performing some action');
        idleTime = 30;
        $('#idleTime').val(idleTime);
        clearInterval(runIdleTime);
        startInactivityTimer();
        lastActivityTime = moment.tz("Asia/Kolkata");
    };
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden) {
            console.log('Page became visible again');
            console.log('lastActivityTime', lastActivityTime);
            const timeSinceLastActivity = moment().tz("Asia/Kolkata").diff(lastActivityTime, 'seconds');
            console.log(timeSinceLastActivity, 'timeSinceLastActivity', idleTime, 'idleTime');
            if (timeSinceLastActivity >= sessionTime) {
                //doAutoLogout();
                console.log(idleTime,"You were inactive for too long while the page was hidden or minimized!", timeSinceLastActivity);
            }
            resetTimer();
        }
    });
    window.addEventListener('load', resetTimer);
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);
    document.addEventListener('click', resetTimer);
    document.addEventListener('scroll', resetTimer);
}


autoLogoutAfterInactivity()
