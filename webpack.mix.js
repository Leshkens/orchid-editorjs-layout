let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

if (mix.inProduction()) {
  mix.version();
}

mix
  .js('resources/js/app.js', 'js/orchid_editor_layout.js')
  .setPublicPath('public')
  .disableNotifications();