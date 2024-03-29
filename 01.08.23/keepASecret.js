// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

// failed attempt
function createSecretHolder(secret) {
    this.secret = secret;
    this.getSecret = function () {
        return this.secret;
    };
    this.setSecret = function (s) {
        this.secret = s;
    };
}

// actual solution
function createSecretHolder(secret) {
    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (v) {
            secret = v;
        },
    };
}
