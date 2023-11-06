// lib-config.token.ts in your library

import { InjectionToken } from '@angular/core';
import { LibConfig } from './lib-config.interface';

export const LIB_CONFIG = new InjectionToken<LibConfig>('LIB_CONFIG');
