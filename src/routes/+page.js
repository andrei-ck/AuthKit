// since there's no dynamic data here, we can prerender

import { page } from "$app/stores";

// serve it as static
export const prerender = true;