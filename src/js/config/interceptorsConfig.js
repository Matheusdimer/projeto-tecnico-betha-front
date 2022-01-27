export function HttpInterceptorsConfig($httpProvider) {
    $httpProvider.interceptors.push("authorizationInterceptor");
    $httpProvider.interceptors.push("loadingInterceptor");
}