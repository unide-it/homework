# Zadanie domowe w procesie rekrutacyjnym UNIDE

Ten projekt to wariacja na temat klasycznej listy TODO. Twoim zadaniem będzie dodanie pobierania listy notatek z API - https://swapi.dev/.

# Wymagania

* Stwórz fork'a tego repozytorium 
* Swoje zmiany wprowadzaj na stworzonego przez siebie branch'a o nazwie `api`.
* Dodaj pobieranie listy postaci z API (`/api/people`).
* Przychodzące obiekty postaci mają zostać zapisane w stanie aplikacji jako notatki (w istniejącym już NotesService) 
* Przemapowanie postaci na notatkę ma zajść w następujący sposób (postać -> notatka):
  * `name` -> `id`,
  * `name` -> `title`,
  * `hair_color` -> `note`,
* Aplikacja powinna zachować aktualnie działające feature'y: wyświetlanie, dodawanie i usuwanie notatek.
* Po zakończeniu pracy stwórz pull request'a do brancha `main` i powiadom nas mailowo o wykonaniu zadania.

Powodzenia 👾

- - - -

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
