import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: environment.baseUrl,
          prefix: environment.prefix,
        },
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['apparel-uk-spa'],
        currency: ['GBP'],
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '6.4',
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
