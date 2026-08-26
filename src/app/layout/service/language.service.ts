import { DestroyRef, inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Optimus } from '@openng/optimus-ui/config';

export type LanguageType = {
    name: string;
    code: string;
    lang: string;
};

/**
 * Servicio singleton para manejo de idiomas (internacionalización).
 *
 * Integra ngx-translate con PrimeNG para mantener las traducciones
 * sincronizadas en ambos sistemas.
 */
@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private readonly _translateService: TranslateService = inject(TranslateService);
    private readonly _optimus: Optimus = inject(Optimus);
    private readonly _destroyRef: DestroyRef = inject(DestroyRef);

    /** Lista de idiomas disponibles */
    readonly languages: LanguageType[] = [
        { name: 'Español', code: 'EC', lang: 'es' },
        { name: 'English', code: 'US', lang: 'en' }
    ];

    /**
     * Encuentra el idioma por defecto y lo activa.
     * @returns El LanguageType del idioma encontrado
     */
    findLanguage(): LanguageType {
        const defaultLang = this._translateService.getFallbackLang();
        const language = this.languages.find((languageType: LanguageType) => languageType.lang === defaultLang) || this.languages[0];

        this.setLanguage(language.lang);
        return language;
    }

    /**
     * Escucha cambios de idioma para sincronizar PrimeNG.
     * Debe llamarse una vez al iniciar la app.
     */
    onChangeLanguage(): void {
        this._translateService.onLangChange
            .pipe(
                switchMap(() => this._translateService.get('optimus')),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe((res) => {
                this._optimus.setTranslation(res);
            });
    }

    /**
     * Cambia el idioma activo.
     * @param language - Código de idioma (ej: 'es', 'en')
     */
    setLanguage(language: string): void {
        this._translateService.setFallbackLang(language);
        this._translateService.use(language);
    }

    /**
     * Obtiene el idioma actual.
     * @returns Código de idioma activo o 'es' por defecto
     */
    getLanguage(): string {
        const currentLang = this._translateService.getCurrentLang();
        const defaultLang = this._translateService.getFallbackLang();
        const browserLang = this._translateService.getBrowserLang();
        return currentLang || defaultLang || browserLang || 'es';
    }
}
