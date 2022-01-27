AuthService.$inject = [
    '$http',
    'config'
]

export const authServiceName = 'authAPI'

export function AuthService(this: any, $http, config) {
    this.login = (user) => {
        return $http.post(config.apiUrl + "/login", user, {
            hearders: {
                "Content-Type": "application/json"
            }
        });
    };

    this.getCurrentUser = (token) => {
        return $http.get(config.apiUrl + "/funcionarios/current", {
            headers: {
                "Authorization": token
            }
        });
    }
};