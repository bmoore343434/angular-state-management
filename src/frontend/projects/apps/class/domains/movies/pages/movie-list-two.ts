import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FeaturePage } from '@app-shell/features/feature-page';
import { bigMovieStore } from '../stores/movie-big';

@Component({
  selector: 'app-movies-pages-page-big',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [bigMovieStore], // this means this will live as long as this component
  imports: [FeaturePage],
  template: `<ui-feature-page pageName="page-big"></ui-feature-page>`,
  styles: ``,
})
export class MovieListTwoPage {
  store = inject(bigMovieStore);
}
