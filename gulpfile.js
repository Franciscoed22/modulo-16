import gulp from 'gulp';
import sass from 'gulp-sass';
import sassModule from 'sass';
import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';

// Definindo o compilador Sass
sass.compiler = sassModule;

// Compilação do SASS
export function style() {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Compressão de imagens
export function image() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Compressão de JavaScript
export function script() {
    return gulp.src('src/js/*.js')
        .pipe(terser())
        .pipe(gulp.dest('dist/js'));
}

// Tarefa padrão
export default gulp.series(style, image, script);
