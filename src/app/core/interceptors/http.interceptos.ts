import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, tap, throwError } from "rxjs";
import { AuthService } from "../service/auth.service";

export const HttpInterceptor: HttpInterceptorFn = (req, next) => {

    const authService = inject(AuthService);
    const token = authService.obterToken();


    console.log('REQUEST', req.url);

    const novaReq = token ?
        req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            },
        })

        :req;

    return next(novaReq).pipe(
            tap({
                next: (event) => console.log('RESPONSE', event),
                error: (error) => console.error('ERRO', error)
            }),
            catchError((error) => {
                console.error('ERRO GLOBAL:', error);
                if (error.status === 401) {
                    console.warn('Não autorizado!');
                }
                if (error.status === 500) {
                    console.warn('Erro interno no servidor!');
                }
                return throwError(() => error);
            }),
        );
};